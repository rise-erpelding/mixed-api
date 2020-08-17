const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Protected endpoints', function() {
  let db;

  const {
    testTeachers,
    testClasses,
    testGroupings,
  } = helpers.makeFixtures();

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

  before('cleanup', () => db.raw(`TRUNCATE teachers, classes, groupings RESTART IDENTITY CASCADE`));

  afterEach('cleanup', () => db.raw(`TRUNCATE teachers, classes, groupings RESTART IDENTITY CASCADE`));

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

  const protectedEndpoints = [
    {
      name: 'GET /api/teachers',
      path: '/api/teachers',
      method: supertest(app).get,
    },
    {
      name: 'GET /api/classes',
      path: '/api/classes',
      method: supertest(app).get,
    },
    {
      name: 'POST /api/classes',
      path: '/api/classes',
      method: supertest(app).post,
    },
    {
      name: 'GET /api/classes/teacher/:teacher_id',
      path: '/api/teacher/1',
      method: supertest(app).get,
    },
    {
      name: 'GET /api/classes/:id',
      path: '/api/classes/1',
      method: supertest(app).get,
    },
    {
      name: 'DELETE /api/classes/:id',
      path: '/api/classes/3',
      method: supertest(app).delete,
    },
    {
      name: 'PATCH /api/classes/:id',
      path: '/api/classes/3',
      method: supertest(app).patch,
    },
    {
      name: 'GET /api/groupings',
      path: '/api/groupings',
      method: supertest(app).get,
    },
    {
      name: 'POST /api/groupings',
      path: '/api/groupings',
      method: supertest(app).post,
    },
    {
      name: 'GET /api/groupings/teacher/:teacher_id',
      path: '/api/teacher/1',
      method: supertest(app).get,
    },
    {
      name: 'GET /api/groupings/:id',
      path: '/api/groupings/1',
      method: supertest(app).get,
    },
    {
      name: 'DELETE /api/groupings/:id',
      path: '/api/groupings/1',
      method: supertest(app).delete,
    },
    {
      name: 'PATCH /api/groupings/:id',
      path: '/api/groupings/1',
      method: supertest(app).patch,
    }
  ];

  protectedEndpoints.forEach(endpoint => {
    describe(endpoint.name, () => {
      it(`responds 401 'Missing bearer token' when no bearer token`, () => {
        return endpoint.method(endpoint.path)
          .expect(401, { error: `Missing bearer token` });
      });

      it(`responds 401 'Unauthorized request' when invalid JWT secret`, () => {
        const validUser = testUsers[0];
        const invalidSecret = 'bad-secret';
        return endpoint.method(endpoint.path)
          .set('Authorization', helpers.makeAuthHeader(validUser, invalidSecret))
          .expect(401, { error: `Unauthorized request` });
      });

      it(`responds 401 'Unauthorized request' when invalid sub in payload`, () => {
        const invalidUser = { user_name: 'user-not-existy', id: 1 };
        return endpoint.method(endpoint.path)
          .set('Authorization', helpers.makeAuthHeader(invalidUser))
          .expect(401, { error: `Unauthorized request` });
      });
    });
  });
});