const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Auth Endpoints', function() {
  let db;

  const { testTeachers, hashedTeachers } = helpers.makeFixtures();
  const testTeacher = testTeachers[0];

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

  describe(`POST /api/auth/login`, () => {
    beforeEach('insert teachers', () => {
      return db
      .into('teachers')
      .insert(hashedTeachers)
    });

    const requiredFields = ['teacher_name', 'password'];

    requiredFields.forEach(field => {
      const loginAttemptBody = {
        teacher_name: testTeacher.teacher_name,
        password: testTeacher.password,
      };

      it(`responds with 400 required error when '${field}' is missing`, () => {
        delete loginAttemptBody[field];

        return supertest(app)
          .post('/api/auth/login')
          .send(loginAttemptBody)
          .expect(400, {
            error: `Missing '${field}' in request body`,
          });
      });
    });

    it(`responds 400 'invalid teacher_name or password' when bad teacher_name`, () => {
      const userInvalidUser = { teacher_name: 'user-not', password: 'existy' };
      return supertest(app)
        .post('/api/auth/login')
        .send(userInvalidUser)
        .expect(400, { error: `Incorrect teacher_name or password` });
    });

    it(`responds 400 'invalid teacher_name or password' when bad password`, () => {
      const userInvalidPass = { teacher_name: testTeacher.teacher_name, password: 'incorrect' };
      return supertest(app)
        .post('/api/auth/login')
        .send(userInvalidPass)
        .expect(400, { error: `Incorrect teacher_name or password` });
    });

    it(`responds 200 and JWT auth token using secret when valid credentials`, () => {
      // this test fails about 50% of the time and I don't know why
      const userValidCreds = {
        teacher_name: testTeacher.teacher_name,
        password: testTeacher.password,
      };
      const sub = testTeacher.teacher_name;
      const payload = { teacher_id: testTeacher.id };
      const expectedToken = helpers.createJwt(sub, payload);
      return supertest(app)
        .post('/api/auth/login')
        .send(userValidCreds)
        .expect(200, {
          authToken: expectedToken,
        });
    });
  });
});
