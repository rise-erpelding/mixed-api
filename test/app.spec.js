const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 containing "Hello, MixEd API!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, MixEd API!')
  })
})