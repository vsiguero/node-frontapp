import { FrontAppClient } from './client';
import { MessagesParamsInterface } from './interfaces/message.interface';
export declare class Messages {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    get(message_id: string, f?: any): Promise<any>;
    reply(conversation_id: string, params: MessagesParamsInterface, f?: any): Promise<any>;
}
