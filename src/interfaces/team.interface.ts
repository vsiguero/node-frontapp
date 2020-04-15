import { InboxInterface } from './inbox.interface';

export interface TeammateIdsInterface {
  teammate_ids: Array<string>;
}

interface SelfTeamInterface {
  self: string;
}

interface TeammateLinksRelated {
  inboxes: string;
  conversations: string;
}
interface TeammateLinks {
  self: string;
  related: TeammateLinksRelated;
}

export interface TeamMateInterface {
  _links: TeammateLinks;
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  is_available: boolean;
  is_blocked: boolean;
}

export interface TeamInterface {
  _links: SelfTeamInterface;
  id: string;
  name: string;
  inboxes: ReadonlyArray<InboxInterface>;
  members: ReadonlyArray<TeamMateInterface>;
}
