import { FrontAppClient } from './client';
import {
  MessagesParamsInterface,
  MessageInterface,
} from './interfaces/message.interface';

export class Messages {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async get(message_id: string, f?: any): Promise<MessageInterface> {
    return this.client.get(`/messages/${message_id}`, {}, f);
  }

  // Create message and Create custom message is on channels

  async replyConversation(
    conversation_id: string,
    params: MessagesParamsInterface,
    f?: any,
  ): Promise<MessageInterface> {
    return this.client.get(
      `/conversations/${conversation_id}/messages`,
      params,
      f,
    );
  }

  // TODO: Import messages
}
