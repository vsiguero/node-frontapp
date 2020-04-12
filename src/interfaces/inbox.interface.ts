interface RelatedInboxInterface {
  teammates: string;
  conversations: string;
  channels: string;
  owner: string;
}

export interface LinkInboxInterface {
  _self: string;
  related: RelatedInboxInterface;
}

export interface InboxInterface {
  _link: LinkInboxInterface;
  id: string;
  name: string;
  is_private: boolean;
}

export interface InboxInterfaceCreate {
  name: string;
  teammate_ids?: ReadonlyArray<string>;
}
