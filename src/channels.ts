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

  async getChannel(id: string, f?: any): Promise<ChannelInterface> {
    return this.client.get(`/channels/${id}`, {}, f);
  }

  async createChannel(
    inboxId: string,
    params: ChannelCreateInterface,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/${inboxId}/channels`, params, f);
  }

  async updateChannel(
    channelId: string,
    params: ChannelUpdateInterface,
    f?: any,
  ): Promise<ReadonlyArray<ChannelInterface>> {
    return this.client.get(`/channels/${channelId}`, params, f);
  }

  async createChannelMessage(
    channel_id: string,
    params: ChannelMessageParamsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.get(`/channels/${channel_id}/messages`, params, f);
  }

  async createChannelCustomMessage(
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
