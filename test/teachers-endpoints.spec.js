const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Teachers Endpoints', function() {
  let db;

  const { testTeachers } = helpers.makeFixtures();
})

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
}); // end describe