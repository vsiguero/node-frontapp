import { ChannelInterface, ChannelCreateInterface, ChannelUpdateInterface, ChannelMessageParamsInterface } from './interfaces/channel.interface';
import { FrontAppClient } from './client';
import { MessageInterface } from './interfaces';
import { FileInterface } from './interfaces/message.interface';
export declare class Channels {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listByTeam(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listByTeammate(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    get(id: string, f?: any): Promise<ChannelInterface>;
    create(inboxId: string, params: ChannelCreateInterface, f?: any): Promise<ChannelInterface>;
    update(channelId: string, params: ChannelUpdateInterface, f?: any): Promise<ChannelInterface>;
    createMessage(channel_id: string, params: ChannelMessageParamsInterface, f?: any): Promise<any>;
    createCustomMessage(channel_id: string, params: MessageInterface, file: FileInterface, f?: any): Promise<any>;
}
