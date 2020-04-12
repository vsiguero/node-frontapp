import { FrontAppClient } from './client';
import { ContactGroupsQueryInterface, GroupAddContactInterface } from './interfaces/group.interface';
export declare class Groups {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    get(group_id: string, f?: any): Promise<any>;
    list(f?: any): Promise<any>;
    listContacts(group_id: string, query: ContactGroupsQueryInterface, f?: any): Promise<any>;
    create(name: string, f?: any): Promise<any>;
    addContact(group_id: string, params: GroupAddContactInterface, f?: any): Promise<any>;
    delete(group_id: string, f?: any): Promise<any>;
}
