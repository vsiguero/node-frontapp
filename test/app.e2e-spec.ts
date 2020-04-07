import * as request from 'supertest';

describe('AppController (e2e)', () => {
  beforeEach(async () => {
    console.log('test');
  });

  it('/ (GET)', () => {
    return request('url')
      .get('/')
      .expect(200)
      .expect({ version: '0.0.1', message: {} });
  });
});
