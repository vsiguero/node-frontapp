export class Contacts {
  constructor(client: any) {
    this.client = client;
  }
  client: any;

  async get(params: object, f?: any): Promise<any> {
    return this.client.get('/contacts', params, f);
  }

  async list(params: object, f?: any): Promise<any> {
    return this.client.get('/contacts', params, f);
  }
}
