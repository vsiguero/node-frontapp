import { FrontAppClient, DefaultResponseInterface } from './client';
import {
  ContactGroupsQueryInterface,
  GroupAddContactInterface,
  GroupInterface,
} from './interfaces/group.interface';
import { ContactInterface } from './interfaces';

export class Groups {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async get(group_id: string, f?: any): Promise<GroupInterface> {
    return this.client.get(`/contact_groups/${group_id}`, {}, f);
  }

  async list(f?: any): Promise<ReadonlyArray<GroupInterface>> {
    return this.client.get(`/contact_groups`, {}, f);
  }

  async listContacts(
    group_id: string,
    query: ContactGroupsQueryInterface,
    f?: any,
  ): Promise<ReadonlyArray<ContactInterface>> {
    return this.client.get(
      `/contact_groups/${group_id}/contacts`,
      query || {},
      f,
    );
  }

  async create(name: string, f?: any): Promise<GroupInterface> {
    const newGroup = await this.client.post(
      `/contact_groups`,
      { name: name },
      f,
    );
    return this.get(newGroup.id);
  }

  async addContact(
    group_id: string,
    params: GroupAddContactInterface,
    f?: any,
  ): Promise<DefaultResponseInterface> {
    await this.client.post(`/contact_groups/${group_id}/contacts`, params, f);
    return this.client.defaultResponse({
      id: group_id,
      added: true,
      params: params,
    });
  }

  async delete(group_id: string, f?: any): Promise<DefaultResponseInterface> {
    await this.client.delete(`/contact_groups/${group_id}`, {}, f);
    return this.client.defaultResponse({
      id: group_id,
      deleted: true,
      object: 'contact_group',
    });
  }
}
