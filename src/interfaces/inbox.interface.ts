interface IRelatedInbox {
  teammates: string;
  conversations: string;
  channels: string;
  owner: string;
}

interface ILinkInbox {
  _self: string;
  related: IRelatedInbox;
}

export interface IInbox {
  _link: ILinkInbox;
  id: string;
  name: string;
  is_private: boolean;
}
