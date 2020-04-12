import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient } from './client';

export class Contacts {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(params?: object, f?: any): Promise<any> {
    return this.client.get(`/contacts`, params || {}, f);
  }
  async get(id: string, params?: object, f?: any): Promise<any> {
    return this.client.get(`/contacts/${id}`, params || {}, f);
  }

  async post(params: ContactCreateInterface, f?: any): Promise<any> {
    return this.client.post(`/contacts`, params, f);
  }

  async put(id: string, params: ContactUpdateInterface, f?: any): Promise<any> {
    return this.client.put(`/contacts/${id}`, params, f);
  }

  async delete(id: string, f?: any): Promise<any> {
    return this.client.delete(`/contacts/${id}`, {}, f);
  }
}
