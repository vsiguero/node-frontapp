import * as request from 'superagent';
import { Analytics } from './analytics';
import { Contacts } from './contacts';
import { Channels } from './channels';
import { MessageInterface, FileInterface } from './interfaces/message.interface';
import { Inboxes } from './inboxes';
export interface FrontPagination {
    next: string;
}
export declare class FrontAppClient {
    constructor(token: string, apiUrl?: string);
    useCallbacks(): any;
    API_URL: string;
    token: string;
    promises: boolean;
    analytics: Analytics;
    channels: Channels;
    contacts: Contacts;
    inboxes: Inboxes;
    private _request;
    promiseProxy(f: any, req: request.SuperAgentRequest): Promise<any>;
    put(endpoint: string, data: object, f: any): Promise<any>;
    post(endpoint: string, data: object, f: any): Promise<any>;
    postMessageWithAttachment(endpoint: string, data: MessageInterface, file: FileInterface, f: any): Promise<any>;
    get(endpoint: string, data: object, f: any): Promise<any>;
    nextPage(paginationObject: FrontPagination, f: any): Promise<any>;
    delete(endpoint: string, data: object, f: any): Promise<any>;
    callback(f: any, res: any): any;
}
