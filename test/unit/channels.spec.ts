// import *  from 'jest';
import { FrontAppClient } from '../../src/client';
import nock from 'nock';

describe('channels', () => {
  it('should resolve promises', () => {
    nock('https://api2.frontapp.com').get('/channels').reply(200, []);
    const client = new FrontAppClient('token');
    return client.channels.list({}).then((data) => expect(data).toEqual([]));
  });
});
