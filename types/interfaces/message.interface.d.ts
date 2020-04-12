export interface MessageInterface {
    contact_id: string;
    body: string;
    handle: string;
    to: string;
}
export interface FileInterface {
    buffer: string;
    name: string;
    mimetype: string;
    originalname?: string;
}
interface MessageOptionsInterface {
    tag_ids?: Array<string>;
    archive?: boolean;
}
export interface MessagesParamsInterface {
    to?: string;
    cc?: string;
    bcc?: string;
    sender_name?: string;
    subject?: string;
    author_id?: string;
    body: string;
    text?: string;
    options?: MessageOptionsInterface;
    attachments?: Array<string>;
}
export {};
