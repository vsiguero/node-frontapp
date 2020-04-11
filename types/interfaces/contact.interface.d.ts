interface IRelatedContact {
    notes: string;
    conversations: string;
    owner: string;
}
interface ILinkContact {
    self: string;
    related: IRelatedContact;
}
interface IHandle {
    handle: string;
    source: 'email' | 'phone' | 'twitter' | 'facebook' | 'intercom' | 'smooch' | 'custom';
}
interface IRelatedGroup {
    contacts: string;
    owner: string;
}
interface ILinkGroup {
    self: string;
    related: IRelatedGroup;
}
interface IGroup {
    _links: ILinkGroup;
    id: string;
    name: string;
    is_private: boolean;
}
export interface IContact {
    _links?: ILinkContact;
    name?: string;
    id?: string;
    description?: string;
    handles: IHandle[];
    groups: IGroup[];
    is_spammer: boolean;
    links: string[];
    updated_at: number;
    custom_fields: object;
    is_private: boolean;
}
export interface IContactCreate {
    name?: string;
}
export interface IContactUpdate {
    name?: string;
}
export {};
