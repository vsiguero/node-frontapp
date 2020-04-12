import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient } from './client';
import {
  ContactSearchParamsInterface,
  ContactListParamsInterface,
  HandleInterface,
  HandleDeleteInterface,
} from './interfaces/contact.interface';
import Utils from './utils';

export class Contacts {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(
    params?: ContactListParamsInterface,
    query?: ContactSearchParamsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.get(
      `/contacts/${Utils.toUrlParam(params)}`,
      query || {},
      f,
    );
  }
  async get(contact_id: string, f?: any): Promise<any> {
    return this.client.get(`/contacts/${contact_id}`, {}, f);
  }

  async create(params: ContactCreateInterface, f?: any): Promise<any> {
    return this.client.post(`/contacts`, params, f);
  }

  async update(
    contact_id: string,
    params: ContactUpdateInterface,
    f?: any,
  ): Promise<any> {
    return this.client.put(`/contacts/${contact_id}`, params, f);
  }

  async delete(contact_id: string, f?: any): Promise<any> {
    return this.client.delete(`/contacts/${contact_id}`, {}, f);
  }

  async addHandle(
    contact_id: string,
    params: HandleInterface,
    f?: any,
  ): Promise<any> {
    return this.client.post(`/contacts/${contact_id}/handles`, params, f);
  }

  async deleteHandle(
    contact_id: string,
    params: HandleDeleteInterface,
    f?: any,
  ): Promise<any> {
    return this.client.post(`/contacts/${contact_id}/handles`, params, f);
  }
}
