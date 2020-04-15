export interface ContactGroupsQueryInterface {
  page_token?: string;
  limit?: number;
}

export interface GroupAddContactInterface {
  contact_ids: Array<string>;
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
  _links?: LinkGroupInterface;
  id?: string;
  name?: string;
  is_private?: boolean;
}
