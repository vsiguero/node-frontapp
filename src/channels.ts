import {
  ChannelInterface,
  ChannelCreateInterface,
  ChannelUpdateInterface,
  ChannelMessageParamsInterface,
} from './interfaces/channel.interface';

import { FrontAppClient } from './client';
import { MessageInterface } from './interfaces';
import { FileInterface } from './interfaces/message.interface';

export class Channels {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(f?: any): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/channels`, {}, f);
  }

  async listByTeam(
    id: string,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/teams/${id}/channels`, {}, f);
  }

  async listByTeammate(
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
  ): Promise<ChannelInterface> {
    const newChannel = await this.client.post(
      `/${inboxId}/channels`,
      params,
      f,
    );
    return this.get(newChannel.id);
  }

  async update(
    channelId: string,
    params: ChannelUpdateInterface,
    f?: any,
  ): Promise<ChannelInterface> {
    await this.client.put(`/channels/${channelId}`, params, f);
    return this.get(channelId);
  }

  async createMessage(
    channel_id: string,
    params: ChannelMessageParamsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.get(`/channels/${channel_id}/messages`, params, f);
  }

  async createCustomMessage(
    channel_id: string,
    params: MessageInterface,
    file: FileInterface,
    f?: any,
  ): Promise<any> {
    return this.client.postMessageWithAttachment(
      `/channels/${channel_id}/messages`,
      params,
      file,
      f,
    );
  }
}
