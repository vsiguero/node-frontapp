export class Contacts {
  constructor(client: any) {
    this.client = client;
  }
  client: any;

  async get(params: object, f?: any) {
    return await this.client.get('/contacts', params, f);
  }

  async list(params: object, f?: any) {
    return await this.client.get('/contacts', params, f);
  }
}
