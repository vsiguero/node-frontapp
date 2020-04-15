import { FrontAppClient, DefaultResponseInterface } from './client';
import { ContactGroupsQueryInterface, GroupAddContactInterface, GroupInterface } from './interfaces/group.interface';
import { ContactInterface } from './interfaces';
export declare class Groups {
    constructor(client: FrontAppClient);
    client: FrontAppClient;
    get(group_id: string, f?: any): Promise<GroupInterface>;
    list(f?: any): Promise<ReadonlyArray<GroupInterface>>;
    listContacts(group_id: string, query: ContactGroupsQueryInterface, f?: any): Promise<ReadonlyArray<ContactInterface>>;
    create(name: string, f?: any): Promise<GroupInterface>;
    addContact(group_id: string, params: GroupAddContactInterface, f?: any): Promise<DefaultResponseInterface>;
    delete(group_id: string, f?: any): Promise<DefaultResponseInterface>;
}
