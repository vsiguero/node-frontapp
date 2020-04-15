import { FrontAppClient, DefaultResponseInterface } from './client';
import {
  TeammateIdsInterface,
  TeamInterface,
} from './interfaces/team.interface';
import { ContactInterface } from './interfaces';

export class Teams {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(f?: any): Promise<ReadonlyArray<TeamInterface>> {
    return this.client.get(`/teams`, {}, f);
  }

  async get(team_id: object, f?: any): Promise<TeamInterface> {
    return this.client.get(`/teams/${team_id}`, {}, f);
  }

  async addTeammate(
    team_id: string,
    params: TeammateIdsInterface,
    f?: any,
  ): Promise<DefaultResponseInterface> {
    await this.client.post(`/teams/${team_id}/teammates`, params, f);
    return this.client.defaultResponse({
      id: team_id,
      added: true,
      object: 'team',
      params: params,
    });
  }

  async removeTeammate(
    team_id: string,
    params: TeammateIdsInterface,
    f?: any,
  ): Promise<DefaultResponseInterface> {
    await this.client.delete(`/teams/${team_id}/teammates`, params, f);
    return this.client.defaultResponse({
      id: team_id,
      removed: true,
      object: 'team',
      params: params,
    });
  }

  async listGroups(
    team_id: string,
    f?: any,
  ): Promise<ReadonlyArray<ContactInterface>> {
    return this.client.get(`/teams/${team_id}/contact_groups`, {}, f);
  }

  async createGroup(
    team_id: string,
    name: string,
    f?: any,
  ): Promise<DefaultResponseInterface> {
    await this.client.post(
      `/teams/${team_id}/contact_groups`,
      { name: name },
      f,
    );
    return this.client.defaultResponse({
      id: team_id,
      created: true,
      object: 'contact_groups',
      params: name,
    });
  }
}
