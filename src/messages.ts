import { FrontAppClient } from './client';
import { MessagesParamsInterface } from './interfaces/message.interface';

export class Messages {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async getMessage(message_id: string, f?: any): Promise<any> {
    return this.client.get(`/messages/${message_id}`, {}, f);
  }

  async replyConversation(
    conversation_id: string,
    params: MessagesParamsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.get(
      `/conversations/${conversation_id}/messages`,
      params,
      f,
    );
  }
}
