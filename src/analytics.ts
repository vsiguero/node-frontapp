import { FrontAppClient } from './client';

export class Analytics {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async get(params: object, f?: any): Promise<any> {
    return this.client.get(`/analytics`, params, f);
  }

  async list(params: object, f?: any): Promise<any> {
    return this.client.get(`/analytics`, params, f);
  }
}
