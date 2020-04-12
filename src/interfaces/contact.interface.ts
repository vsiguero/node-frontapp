interface RelatedContactInterface {
  notes: string;
  conversations: string;
  owner: string;
}

interface LinkContactInterface {
  self: string;
  related: RelatedContactInterface;
}

export interface HandleInterface {
  handle: string;
  source:
    | 'email'
    | 'phone'
    | 'twitter'
    | 'facebook'
    | 'intercom'
    | 'smooch'
    | 'custom';
}

interface RelatedGroupInterface {
  contacts: string;
  owner: string;
}

interface LinkGroupInterface {
  self: string;
  related: RelatedGroupInterface;
}

export interface GroupInterface {
  _links: LinkGroupInterface;
  id: string;
  name: string;
  is_private: boolean;
}

export interface ContactInterface {
  _links?: LinkContactInterface;
  name?: string;
  id?: string;
  description?: string;
  handles: Array<HandleInterface>;
  groups: Array<GroupInterface>;
  is_spammer: boolean;
  links: Array<string>;
  updated_at: number;
  custom_fields: object;
  is_private: boolean;
}

export interface ContactCreateInterface {
  name?: string;
  description?: string;
  handles?: Array<HandleInterface>;
  groups?: Array<GroupInterface>;
  is_spammer?: boolean;
  custom_fields?: object;
  is_private?: boolean;
}
export interface ContactUpdateInterface {
  name?: string;
  description?: string;
  handles?: Array<HandleInterface>;
  groups?: Array<GroupInterface>;
  is_spammer?: boolean;
  custom_fields?: object;
  is_private?: boolean;
}
