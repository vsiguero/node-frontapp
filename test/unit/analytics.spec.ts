// import *  from 'jest';
import { FrontAppClient } from '../../src/client';
import nock from 'nock';

describe('analytics', () => {
  it('should resolve promises', () => {
    nock('https://api2.frontapp.com').get('/analytics').reply(200, {});
    const client = new FrontAppClient('token');
    return client.analytics.list({}).then((data) => expect(data).toEqual({}));
  });
});
