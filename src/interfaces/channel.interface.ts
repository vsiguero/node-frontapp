import { MessagesParamsInterface } from './message.interface';

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

export interface ChannelMessageParamsInterface extends MessagesParamsInterface {
  to: string;
}

interface SenderInterface {
  contact_id?: string;
  name?: string;
  handle: string;
}

interface MetadataInterface {
  thread_ref?: string;
  headers?: object;
}

export interface CustomChannelMessageParamsInterface {
  sender: SenderInterface;
  subject?: string;
  body: string;
  body_format?: 'html' | 'markdown';
  metadata?: MetadataInterface;
  attachments?: Array<string>;
}
