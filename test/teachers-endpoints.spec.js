const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');

describe('Teachers Endpoints', function() {
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

before('cleanup', () => db.raw(`TRUNCATE teachers RESTART IDENTITY CASCADE`));

afterEach('cleanup', () => db.raw(`TRUNCATE teachers RESTART IDENTITY CASCADE`));

describe(`GET /api/teachers`, () => {
  context(`Given no teachers in the database`, () => {
    it(`responds with 200 and an empty list`, () => {
      return supertest(app)
        .get(`/api/teachers`)
        .expect(200, []);
    }); // end it
  }); // end context

  context(`Given there are teachers in the database`, () => {
    beforeEach('insert teachers', () => 
      helpers.seedTeachers(
        db,
        testTeachers
      )
    );

    it(`responds with 200 and all of the teachers`, () => {
      const expectedTeachers = [
        {
          id: 1,
          teacher_name: "msmith",
          email: "msmith@educate.me",
        },
        {
          id: 2,
          teacher_name: "kdavis",
          email: "kdavis@educate.me",
        }
      ];
      return supertest(app)
        .get(`/api/teachers`)
        .expect(200, expectedTeachers);
    })
  })
}); // end describe GET /api/teachers

// describe(`GET /api/teachers/:id`, () => {
//   context(`Given there are teachers in the database`, () => {
//     beforeEach('insert teachers', () =>
//     helpers.seedTeachers(
//       db,
//       testTeachers
//     )
//   )

//   it(`responds with 200 and the teacher information corresponding to the teacher id`, () => {
//     const expectedTeacher = [
//       {
//         id: 1,
//         teacher_name: "msmith",
//         email: "msmith@educate.me"
//       }
//     ]
//     return supertest(app)
//       .get(`/api/teachers/1`)
//       .expect(200, expectedTeacher)
//   })

//   });


// }); // end GET /api/teachers/:id

  // describe(`PATCH /api/teachers/:id`, () => {
  //   context(`Given there are teachers in the database`, () => {

  //   })
  // })

  // describe(`DELETE /api/teachers/:id`, () => {
  //   context(`Given there are teachers in the database`, () => {

  //   })
  // })

});