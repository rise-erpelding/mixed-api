const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');
const supertest = require('supertest');

describe('Teachers Endpoints', function() {
  let db;

  const { testTeachers } = helpers.makeFixtures();


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
    // THIS TEST IS FAILING CONSISTENTLY
    it(`responds with 200 and an empty list`, () => {
      return supertest(app)
        .get(`/api/teachers`)
        .set('Authorization', helpers.makeAuthHeader(testTeachers[0]))
        .expect(200, []);
    });
  });

  context(`Given there are teachers in the database`, () => {
    beforeEach('insert teachers', () => {
      return db
      .into('teachers')
      .insert(testTeachers)
    });

    it(`responds with 200 and all of the teachers`, () => {
      // THIS TEST IS FAILING CONSISTENTLY
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
        .set('Authorization', helpers.makeAuthHeader(testTeachers[0]))
        .expect(200, expectedTeachers);
    })
  })
});

});