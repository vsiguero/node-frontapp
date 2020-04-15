import { InboxInterface, InboxInterfaceCreate } from './interfaces/inbox.interface';
import { FrontAppClient } from './client';
export declare class Inboxes {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<ReadonlyArray<InboxInterface>>;
    listChannels(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>>;
    get(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>>;
    create(params: InboxInterfaceCreate, f?: any): Promise<ReadonlyArray<InboxInterface>>;
}
