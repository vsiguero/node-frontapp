interface RelatedChannelInterface {
  inbox: string;
  owner: string;
}

interface LinkChannelInterface {
  _self: string;
  related: RelatedChannelInterface;
}

export interface ChannelInterface {
  name?: string;
  _link?: LinkChannelInterface;
  id?: string;
  address?: string;
  type?:
    | 'smtp'
    | 'imap'
    | 'twilio'
    | 'twitter'
    | 'facebook'
    | 'smooch'
    | 'intercom'
    | 'truly'
    | 'custom';
  send_as?: string;
  settings?: object;
  is_private?: boolean;
  same_channel?: 'same_channel' | 'unsupported';
}

export interface ChannelCreateInterface {
  name?: string;
  type:
    | 'smtp'
    | 'imap'
    | 'twilio'
    | 'twitter'
    | 'facebook'
    | 'smooch'
    | 'intercom'
    | 'truly'
    | 'custom';
  send_as?: string;
  settings?: object;
}

export interface ChannelUpdateInterface {
  name?: string;
  settings?: object;
  reply_mode?: 'same_channel' | 'unsupported';
}
