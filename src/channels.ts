import {
  ChannelInterface,
  ChannelCreateInterface,
  ChannelUpdateInterface,
} from './interfaces/channel.interface';

import { InboxInterface } from './interfaces/inbox.interface';
import { FrontAppClient } from './client';

export class Channels {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(f?: any): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/channels`, {}, f);
  }

  async listTeam(
    id: string,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/teams/${id}/channels`, {}, f);
  }

  async listTeammate(
    id: string,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/teammates/${id}/channels`, {}, f);
  }

  async get(id: string, f?: any): Promise<ChannelInterface> {
    return this.client.get(`/channels/${id}`, {}, f);
  }

  async create(
    inboxId: string,
    params: ChannelCreateInterface,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/${inboxId}/channels`, params, f);
  }

  async update(
    channelId: string,
    params: ChannelUpdateInterface,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/channels/${channelId}`, params, f);
  }

  async listInboxes(f?: any): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes`, {}, f);
  }

  async getInbox(
    inboxId: string,
    f?: any,
  ): Promise<ReadonlyArray<InboxInterface>> {
    return this.client.get(`/inboxes/${inboxId}`, {}, f);
  }

  async listInboxChannels(
    inboxId: string,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
  }
}
