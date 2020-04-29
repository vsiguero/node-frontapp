import * as request from 'superagent';
import { Analytics } from './analytics';
import { Contacts } from './contacts';
import { Channels } from './channels';
import { MessageInterface, FileInterface } from './interfaces/message.interface';
import { FrontErrorInterface } from './error';
import { Inboxes } from './inboxes';
import { Groups } from './groups';
import { Teams } from './teams';
import { HandleInterface, GroupAddContactInterface, TeammateIdsInterface } from './interfaces';
export interface FrontPagination {
    next: string;
}
export interface DataInterface {
    id?: string;
    deleted?: boolean;
    updated?: boolean;
    created?: boolean;
    added?: boolean;
    removed?: boolean;
    object?: string;
    params?: string | HandleInterface | GroupAddContactInterface | TeammateIdsInterface;
}
export interface DefaultResponseInterface extends FrontErrorInterface {
    data?: DataInterface;
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
    groups: Groups;
    teams: Teams;
    _request: request.SuperAgentStatic;
    promiseProxy(f: any, req: request.SuperAgentRequest): Promise<any>;
    put(endpoint: string, data: object, f: any): Promise<any>;
    post(endpoint: string, data: object, f: any): Promise<any>;
    postMessageWithAttachment(endpoint: string, data: MessageInterface, file: FileInterface, f: any): Promise<any>;
    get(endpoint: string, data: object, f: any): Promise<any>;
    nextPage(paginationObject: FrontPagination, f: any): Promise<any>;
    delete(endpoint: string, data: object, f: any): Promise<any>;
    callback(f: any, res: any): any;
    defaultResponse(data: DataInterface, status?: number, message?: string): DefaultResponseInterface;
}
