import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient, DefaultResponseInterface } from './client';
import {
  ContactSearchParamsInterface,
  ContactListParamsInterface,
  HandleInterface,
  HandleDeleteInterface,
  ContactInterface,
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
  async get(contact_id: string, f?: any): Promise<ContactInterface> {
    return this.client.get(`/contacts/${contact_id}`, {}, f);
  }

  async getByEmail(email: string, f?: any): Promise<ContactInterface> {
    return this.client.get(`/contacts/alt:email:${email}`, {}, f);
  }

  async getByPhone(phone: string, f?: any): Promise<ContactInterface> {
    return this.client.get(`/contacts/alt:phone:${phone}`, {}, f);
  }

  async create(
    params: ContactCreateInterface,
    f?: any,
  ): Promise<ContactInterface> {
    return this.client.post(`/contacts`, params, f);
  }

  async update(
    contact_id: string,
    params: ContactUpdateInterface,
    f?: any,
  ): Promise<ContactInterface> {
    await this.client.put(`/contacts/${contact_id}`, params, f);
    return this.client.get(`/contacts/${contact_id}`, {}, f);
  }

  async delete(contact_id: string, f?: any): Promise<DefaultResponseInterface> {
    await this.client.delete(`/contacts/${contact_id}`, {}, f);
    return this.client.defaultResponse({
      id: contact_id,
      deleted: true,
      object: 'contact',
    });
  }

  async addHandle(
    contact_id: string,
    params: HandleInterface,
    f?: any,
  ): Promise<DefaultResponseInterface> {
    await this.client.post(`/contacts/${contact_id}/handles`, params, f);
    return this.client.defaultResponse({
      id: contact_id,
      added: true,
      object: 'contact_handle',
      params: params,
    });
  }

  async deleteHandle(
    contact_id: string,
    params: HandleDeleteInterface,
    f?: any,
  ): Promise<{}> {
    await this.client.post(`/contacts/${contact_id}/handles`, params, f);
    return this.client.defaultResponse({
      id: contact_id,
      deleted: true,
      object: 'contact_handle',
      params: params,
    });
  }
}
