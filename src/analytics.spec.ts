// import *  from 'jest';
import FrontApp from './client';
import * as nock from 'nock';

describe('analytics', () => {
  it('should resolve promises', () => {
    nock('https://api2.frontapp.com').get('/analytics').reply(200, {});
    const client = new FrontApp('token');
    return client.analytics.list({}).then((data) => expect(data).toEqual({}));
  });
});
