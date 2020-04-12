import { InboxInterface, InboxInterfaceCreate } from './interfaces/inbox.interface';
import { FrontAppClient } from './client';
export declare class Inboxes {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    listInboxes(f?: any): Promise<ReadonlyArray<InboxInterface>>;
    listInboxChannels(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>>;
    getInbox(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>>;
    createInbox(params: InboxInterfaceCreate, f?: any): Promise<ReadonlyArray<InboxInterface>>;
}
