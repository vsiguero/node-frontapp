import { ChannelInterface, ChannelCreateInterface, ChannelUpdateInterface } from './interfaces/channel.interface';
import { InboxInterface } from './interfaces/inbox.interface';
import { FrontAppClient } from './client';
export declare class Channels {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listTeam(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listTeammate(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    get(id: string, f?: any): Promise<ChannelInterface>;
    create(inboxId: string, params: ChannelCreateInterface, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    update(channelId: string, params: ChannelUpdateInterface, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listInboxes(f?: any): Promise<ReadonlyArray<InboxInterface>>;
    getInbox(inboxId: string, f?: any): Promise<ReadonlyArray<InboxInterface>>;
    listInboxChannels(inboxId: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
}
