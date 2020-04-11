import { IChannel, IChannelCreate, IChannelUpdate } from './interfaces/channel.interface';
import { IInbox } from './interfaces/inbox.interface';
export declare class Channels {
    constructor(client: any);
    client: any;
    get(id: string, f?: any): Promise<IChannel>;
    list(f?: any): Promise<ReadonlyArray<IChannel>>;
    create(inboxId: string, params: IChannelCreate, f?: any): Promise<ReadonlyArray<IChannel>>;
    update(channelId: string, params: IChannelUpdate, f?: any): Promise<ReadonlyArray<IChannel>>;
    listInboxes(f?: any): Promise<ReadonlyArray<IInbox>>;
    getInbox(inboxId: string, f?: any): Promise<ReadonlyArray<IInbox>>;
    listInboxChannels(inboxId: string, f?: any): Promise<ReadonlyArray<IChannel>>;
}
