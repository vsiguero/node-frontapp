import { FrontAppClient } from './client';
import {
  ContactGroupsQueryInterface,
  GroupAddContactInterface,
} from './interfaces/group.interface';

export class Groups {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async get(group_id: string, f?: any): Promise<any> {
    return this.client.get(`/contact_groups/${group_id}`, {}, f);
  }

  async list(f?: any): Promise<any> {
    return this.client.get(`/contact_groups`, {}, f);
  }

  async listContacts(
    group_id: string,
    query: ContactGroupsQueryInterface,
    f?: any,
  ): Promise<any> {
    return this.client.get(
      `/contact_groups/${group_id}/contacts`,
      query || {},
      f,
    );
  }

  async create(name: string, f?: any): Promise<any> {
    return this.client.post(`/contact_groups`, { name: name }, f);
  }

  async addContact(
    group_id: string,
    params: GroupAddContactInterface,
    f?: any,
  ): Promise<any> {
    return this.client.post(`/contact_groups/${group_id}/contacts`, params, f);
  }

  async delete(group_id: string, f?: any): Promise<any> {
    return this.client.delete(`/contact_groups/${group_id}`, {}, f);
  }
}
