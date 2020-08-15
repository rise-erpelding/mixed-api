const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');
const { expect } = require('chai');

describe.skip('Groupings Endpoints', function () {
  let db;

  const { testTeachers, testClasses, testGroupings } = helpers.makeFixtures();


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
  classes,
  groupings
RESTART IDENTITY CASCADE`));

  afterEach('cleanup', () => db.raw(`TRUNCATE
  teachers,
  classes,
  groupings
RESTART IDENTITY CASCADE`));

  describe(`GET /api/groupings`, () => {
    context(`Given no classes in the database`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get(`/api/classes`)
          .expect(200, []);
      });
    });

    context(`Given there are groupings in the database`, () => {
      beforeEach('insert classes, teachers, groupings', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
              .then(() => {
                return db
                .into('groupings')
                .insert(testGroupings)
              })
          });
      });
      it(`responds with 200 and all of the groupings`, () => {
        const expectedGroupings = helpers.makeAllExpectedGroupings();
        return supertest(app)
          .get(`/api/groupings`)
          .expect(200, expectedGroupings);
      });
    })
  });

  describe(`POST /api/groupings`, () => {
    context(`Given there are teachers and classes in the database`, () => {

      beforeEach('insert classes and teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
              })
      });

      it(`creates a new grouping, responding with 201 and the new grouping`, () => {
        const { newGrouping, expectedGrouping } = helpers.makeGroupingToAdd();
        return supertest(app)
          .post(`/api/groupings`)
          .send(newGrouping)
          .expect(201)
          .expect(res => {
            expect(res.body.class_id).to.eql(expectedGrouping.class_id);
            expect(res.body.teacher_id).to.eql(expectedGrouping.teacher_id);
            expect(res.body.grouping_name).to.eql(expectedGrouping.grouping_name);
            expect(res.body.groupings).to.eql(expectedGrouping.groupings)
            expect(res.body).to.have.property('id');
          });
      });
    });
  });

  describe(`GET /api/groupings/teacher/:teacher_id`, () => {
    context(`Given there are teachers and classes but no groupings in the database`, () => {
      beforeEach('insert classes, teachers', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
          });
      });
      it(`responds with 404 if there are no groupings for that teacher`, () => {
        return supertest(app)
          .get(`/api/groupings/teacher/1`)
          .expect(404, {
            error: { message: 'No groupings found for specified teacher' }
          })
      })
    })
    context(`Given there are classes, teachers and groupings in the database`, () => {
      beforeEach('insert classes, teachers, groupings', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
              .then(() => {
                return db
                .into('groupings')
                .insert(testGroupings)
              })
          });
      });
      it(`responds with 200 and all groupings corresponding to that teacher id`, () => {
        const expectedGroupings = helpers.makeAllExpectedGroupings();
        return supertest(app)
          .get(`/api/groupings/teacher/1`)
          .expect(200, [expectedGroupings[0]])
      });

      it(`responds with 404 if the teacher id does not exist`, () => {
        return supertest(app)
          .get(`/api/groupings/teacher/999`)
          .expect(404, {
            error: { message: 'Teacher does not exist' }
          })
      });
    });
  });

  describe(`GET /api/groupings/:id`, () => {
    context(`Given that there are classes, teachers, groupings in the database`, () => {
      beforeEach('insert classes, teachers, groupings', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
              .then(() => {
                return db
                .into('groupings')
                .insert(testGroupings)
              })
          });
      });

      it(`responds with 200 and the specified grouping`, () => {
        const expectedGroupings = helpers.makeAllExpectedGroupings();
        return supertest(app)
          .get(`/api/groupings/1`)
          .expect(200, expectedGroupings[0])
      });
    });
  });

  describe(`DELETE /api/groupings/:id`, () => {
    context(`Given there are no groupings in the database`, () => {
      it(`responds with 404`, () => {
        const nonexistentGroupingId = 999;
        return supertest(app)
          .delete(`/api/groupings/${nonexistentGroupingId}`)
          .expect(404)
      });
    });

    context(`Given there are groupings in the database`, () => {
      beforeEach('insert classes, teachers, groupings', () => {
        return db
          .into('teachers')
          .insert(testTeachers)
          .then(() => {
            return db
              .into('classes')
              .insert(testClasses)
              .then(() => {
                return db
                .into('groupings')
                .insert(testGroupings)
              })
          });
      });

      it(`responds with 204 and removes the grouping`, () => {
        return supertest(app)
          .delete(`/api/grouping/1`)
          .expect(204)
          .then(res =>
            supertest(app)
              .get(`/api/classes/1`)
              .expect(404, { error: { message: `Grouping does not exist` } })
          )
      });
    });
  });

  // describe(`PATCH /api/classes/:id`, () => {
  //   context(`Given there are classes in the database`, () => {
  //     beforeEach('insert classes and teachers', () => {
  //       return db
  //         .into('teachers')
  //         .insert(testTeachers)
  //         .then(() => {
  //           return db
  //             .into('classes')
  //             .insert(testClasses)
  //         });
  //     });
  //     it(`responds with 204 and updates the class name`, () => {
  //       const newClassName = {
  //         class_name: "Changed Class Name"
  //       }
  //       return supertest(app)
  //         .patch(`/api/classes/3`)
  //         .send(newClassName)
  //         .expect(204)
  //         .then(res =>
  //           supertest(app)
  //             .get(`/api/classes/3`)
  //             .expect(res => {
  //               // show that the class name has changed
  //               expect(res.body[0].class_name).to.eql(newClassName.class_name)
  //               // show that the teacher id has not changed
  //               expect(res.body[0].teacher_id).to.eql(testClasses[2].teacher_id)
  //             })
  //         )
  //     });
  //   });
  // });
});