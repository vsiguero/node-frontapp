import { ContactCreateInterface, ContactUpdateInterface } from './interfaces';
import { FrontAppClient, DefaultResponseInterface } from './client';
import { ContactSearchParamsInterface, ContactListParamsInterface, HandleInterface, HandleDeleteInterface, ContactInterface } from './interfaces/contact.interface';
export declare class Contacts {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    list(params?: ContactListParamsInterface, query?: ContactSearchParamsInterface, f?: any): Promise<any>;
    get(contact_id: string, f?: any): Promise<ContactInterface>;
    getByEmail(email: string, f?: any): Promise<ContactInterface>;
    getByPhone(phone: string, f?: any): Promise<ContactInterface>;
    create(params: ContactCreateInterface, f?: any): Promise<ContactInterface>;
    update(contact_id: string, params: ContactUpdateInterface, f?: any): Promise<ContactInterface>;
    delete(contact_id: string, f?: any): Promise<DefaultResponseInterface>;
    addHandle(contact_id: string, params: HandleInterface, f?: any): Promise<DefaultResponseInterface>;
    deleteHandle(contact_id: string, params: HandleDeleteInterface, f?: any): Promise<{}>;
}
