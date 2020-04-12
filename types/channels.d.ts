import { ChannelInterface, ChannelCreateInterface, ChannelUpdateInterface, ChannelMessageParamsInterface } from './interfaces/channel.interface';
import { FrontAppClient } from './client';
import { MessageInterface } from './interfaces';
import { FileInterface } from './interfaces/message.interface';
export declare class Channels {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listTeam(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    listTeammate(id: string, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    getChannel(id: string, f?: any): Promise<ChannelInterface>;
    createChannel(inboxId: string, params: ChannelCreateInterface, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    updateChannel(channelId: string, params: ChannelUpdateInterface, f?: any): Promise<ReadonlyArray<ChannelInterface>>;
    createChannelMessage(channel_id: string, params: ChannelMessageParamsInterface, f?: any): Promise<any>;
    createChannelCustomMessage(channel_id: string, params: MessageInterface, file: FileInterface, f?: any): Promise<any>;
}
