import { FrontAppClient } from './client';
export declare class Analytics {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    get(params: object, f?: any): Promise<any>;
    list(params: object, f?: any): Promise<any>;
}
