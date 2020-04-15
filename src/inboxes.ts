import {
  InboxInterface,
  InboxInterfaceCreate,
} from './interfaces/inbox.interface';
import { FrontAppClient } from './client';

export class Inboxes {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(f?: any): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes`, {}, f);
  }

  async listChannels(
    inboxId: string,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
  }

  async get(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes/${inboxId}`, {}, f);
  }

  async create(
    params: InboxInterfaceCreate,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    const newInbox = await this.client.post(`/inboxes`, params, f);
    return this.get(newInbox.id);
  }
}
