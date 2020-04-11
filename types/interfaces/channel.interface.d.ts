interface IRelatedChannel {
    inbox: string;
    owner: string;
}
interface ILinkChannel {
    _self: string;
    related: IRelatedChannel;
}
export interface IChannel {
    name?: string;
    _link?: ILinkChannel;
    id?: string;
    address?: string;
    type?: 'smtp' | 'imap' | 'twilio' | 'twitter' | 'facebook' | 'smooch' | 'intercom' | 'truly' | 'custom';
    send_as?: string;
    settings?: object;
    is_private?: boolean;
    same_channel?: 'same_channel' | 'unsupported';
}
export interface IChannelCreate {
    name?: string;
    type: 'smtp' | 'imap' | 'twilio' | 'twitter' | 'facebook' | 'smooch' | 'intercom' | 'truly' | 'custom';
    send_as?: string;
    settings?: object;
}
export interface IChannelUpdate {
    name?: string;
    settings?: object;
    reply_mode?: 'same_channel' | 'unsupported';
}
export {};
