import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient } from './client';
import { ContactSearchParamsInterface, ContactListParamsInterface, HandleInterface, HandleDeleteInterface } from './interfaces/contact.interface';
export declare class Contacts {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(params?: ContactListParamsInterface, query?: ContactSearchParamsInterface, f?: any): Promise<any>;
    get(contact_id: string, f?: any): Promise<any>;
    create(params: ContactCreateInterface, f?: any): Promise<any>;
    update(contact_id: string, params: ContactUpdateInterface, f?: any): Promise<any>;
    delete(contact_id: string, f?: any): Promise<any>;
    addHandle(contact_id: string, params: HandleInterface, f?: any): Promise<any>;
    deleteHandle(contact_id: string, params: HandleDeleteInterface, f?: any): Promise<any>;
}
