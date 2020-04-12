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

  async listInboxes(f?: any): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes`, {}, f);
  }

  async listInboxChannels(
    inboxId: string,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
  }

  async getInbox(
    inboxId: string,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes/${inboxId}`, {}, f);
  }

  async createInbox(
    params: InboxInterfaceCreate,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes`, params, f);
  }
}
