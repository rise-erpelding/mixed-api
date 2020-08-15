const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');
const { expect } = require('chai');

describe('Classes Endpoints', function () {
  let db;

  const { testTeachers, testClasses } = helpers.makeFixtures();


  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
      pool: {
        min: 0,
        max: 7
      }
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => db.raw(`TRUNCATE
  teachers,
  classes
RESTART IDENTITY CASCADE`));

  afterEach('cleanup', () => db.raw(`TRUNCATE
  teachers,
  classes
RESTART IDENTITY CASCADE`));

  describe(`GET /api/classes`, () => {
    context(`Given no classes in the database`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get(`/api/classes`)
          .expect(200, []);
      });
    });

    context(`Given an XSS attack class`, () => {
      const { maliciousClass, sanitizedClass } = helpers.makeMaliciousClassName();
      beforeEach('insert malicious class', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(maliciousClass)
          });
      });

      it(`removes XSS attack content`, () => {
        return supertest(app)
          .get(`/api/classes`)
          .expect(200, [sanitizedClass])
      })
    })

    context(`Given there are classes in the database`, () => {

      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });

      it(`responds with 200 and all of the classes`, () => {
        const expectedClasses = [
          {
            id: 1,
            class_name: "1st Period",
            date_created: "2020-08-13T01:17:37.935Z",
            teacher_id: 1
          },
          {
            id: 2,
            class_name: "2nd Period",
            date_created: "2020-08-13T01:17:37.935Z",
            teacher_id: 1
          },
          {
            id: 3,
            class_name: "Reading",
            date_created: "2020-08-13T01:17:37.935Z",
            teacher_id: 2
          }
        ];
        return supertest(app)
          .get(`/api/classes`)
          .expect(200, expectedClasses);
      })
    })
  });

  describe(`POST /api/classes`, () => {
    context(`Given there are teachers in the database`, () => {

      beforeEach('insert teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
      });

      it(`creates a new class, responding with 201 and the new class`, () => {
        const newClass = {
          class_name: "Test Class",
          teacher_id: 1
        }
        return supertest(app)
          .post(`/api/classes`)
          .send(newClass)
          .expect(201)
          .expect(res => {
            expect(res.body.class_name).to.eql(newClass.class_name);
            expect(res.body.teacher_id).to.eql(newClass.teacher_id);
            expect(res.body).to.have.property('id');
          });
      });
    });
  });

  describe(`GET /api/classes/teacher/:teacher_id`, () => {
    context(`Given there are teachers but no classes in the database`, () => {
      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
      });
      it(`responds with 404 if there are no classes for that teacher`, () => {
        return supertest(app)
          .get(`/api/classes/teacher/1`)
          .expect(404, {
            error: { message: 'No classes found for specified teacher' }
          })
      })
    })
    context(`Given there are classes and teachers in the database`, () => {
      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });
      it(`responds with 200 and all classses corresponding to that teacher id`, () => {
        const expectedClasses = [
          {
            id: 1,
            class_name: "1st Period",
            date_created: "2020-08-13T01:17:37.935Z",
            teacher_id: 1
          },
          {
            id: 2,
            class_name: "2nd Period",
            date_created: "2020-08-13T01:17:37.935Z",
            teacher_id: 1
          }
        ];
        return supertest(app)
          .get(`/api/classes/teacher/1`)
          .expect(200, expectedClasses)
      });

      it(`responds with 404 if the teacher id does not exist`, () => {
        return supertest(app)
          .get(`/api/classes/teacher/999`)
          .expect(404, {
            error: { message: 'Teacher does not exist' }
          })
      });
    });
  });

  describe(`GET /api/classes/:id`, () => {
    context(`Given that there are classes in the database`, () => {
      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });

      it(`responds with 200 and the specified note`, () => {
        const expectedClass = {
          id: 1,
          class_name: "1st Period",
          date_created: "2020-08-13T01:17:37.935Z",
          teacher_id: 1
        };
        return supertest(app)
          .get(`/api/classes/1`)
          .expect(200, [expectedClass])
      });
    });
  });

  describe(`DELETE /api/classes/:id`, () => {
    context(`Given there are no classes in the database`, () => {
      it(`responds with 404`, () => {
        const nonexistentClassId = 999;
        return supertest(app)
          .delete(`/api/classes/${nonexistentClassId}`)
          .expect(404)
      });
    });

    context(`Given there are classes in the database`, () => {
      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });
      it(`responds with 204 and removes the class`, () => {
        return supertest(app)
          .delete(`/api/classes/3`)
          .expect(204)
          .then(res =>
            supertest(app)
              .get(`/api/classes/3`)
              .expect(404, { error: { message: `Class does not exist` } })
          )
      });
    });
  });

  describe(`PATCH /api/classes/:id`, () => {
    context(`Given there are classes in the database`, () => {
      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });
      it(`responds with 204 and updates the class name`, () => {
        const newClassName = {
          class_name: "Changed Class Name"
        }
        return supertest(app)
          .patch(`/api/classes/3`)
          .send(newClassName)
          .expect(204)
          .then(res =>
            supertest(app)
              .get(`/api/classes/3`)
              .expect(res => {
                // show that the class name has changed
                expect(res.body[0].class_name).to.eql(newClassName.class_name)
                // show that the teacher id has not changed
                expect(res.body[0].teacher_id).to.eql(testClasses[2].teacher_id)
              })
          )
      });
    });
  });
});