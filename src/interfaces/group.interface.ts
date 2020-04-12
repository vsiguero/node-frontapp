export interface ContactGroupsQueryInterface {
  page_token?: string;
  limit?: number;
}

export interface GroupAddContactInterface {
  contact_ids: Array<string>;
}
