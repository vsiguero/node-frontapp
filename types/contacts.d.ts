import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient } from './client';
export declare class Contacts {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(params?: object, f?: any): Promise<any>;
    get(id: string, params?: object, f?: any): Promise<any>;
    post(params: ContactCreateInterface, f?: any): Promise<any>;
    put(id: string, params: ContactUpdateInterface, f?: any): Promise<any>;
    delete(id: string, f?: any): Promise<any>;
}
