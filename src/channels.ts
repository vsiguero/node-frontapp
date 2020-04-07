import {
  IChannel,
  IChannelCreate,
  IChannelUpdate,
} from './interfaces/channel.interface';

import { IInbox } from './interfaces/inbox.interface';

export class Channels {
  constructor(client: any) {
    this.client = client;
  }
  client: any;

  async get(id: string, f?: any): Promise<IChannel> {
    return await this.client.get(`/channels/${id}`, {}, f);
  }

  async list(f?: any): Promise<IChannel[]> {
    return await this.client.get(`/channels`, {}, f);
  }

  async create(
    inboxId: string,
    params: IChannelCreate,
    f?: any,
  ): Promise<IChannel[]> {
    return await this.client.get(`/${inboxId}/channels`, params, f);
  }

  async update(
    channelId: string,
    params: IChannelUpdate,
    f?: any,
  ): Promise<IChannel[]> {
    return await this.client.get(`/channels/${channelId}`, params, f);
  }

  async listInboxes(f?: any): Promise<IInbox[]> {
    return await this.client.get(`/inboxes`, {}, f);
  }

  async getInbox(inboxId: string, f?: any): Promise<IInbox[]> {
    return await this.client.get(`/inboxes/${inboxId}`, {}, f);
  }

  async listInboxChannels(inboxId: string, f?: any): Promise<IChannel[]> {
    return await this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
  }
}
