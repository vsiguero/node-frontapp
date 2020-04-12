import { FrontAppClient } from './client';
import { MessagesParamsInterface } from './interfaces/message.interface';
export declare class Messages {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    getMessage(message_id: string, f?: any): Promise<any>;
    replyConversation(conversation_id: string, params: MessagesParamsInterface, f?: any): Promise<any>;
}
