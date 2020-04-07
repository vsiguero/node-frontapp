// import *  from 'jest';
import FrontApp from './client';
import * as nock from 'nock';

describe('channels', () => {
  it('should resolve promises', () => {
    nock('https://api2.frontapp.com').get('/channels').reply(200, []);
    const client = new FrontApp('token');
    return client.channels.list({}).then((data) => expect(data).toEqual([]));
  });
});
