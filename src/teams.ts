import { FrontAppClient } from './client';
import { TeammateIdsInterface } from './interfaces/team.interface';

export class Teams {
  constructor(client: FrontAppClient) {
    this.client = client;
  }
  client: FrontAppClient;

  async list(f?: any): Promise<any> {
    return this.client.get(`/teams`, {}, f);
  }

  async get(team_id: object, f?: any): Promise<any> {
    return this.client.get(`/teams/${team_id}`, {}, f);
  }

  async addTeammate(
    team_id: string,
    params: TeammateIdsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.post(`/teams/${team_id}/teammates`, params, f);
  }

  async removeTeammate(
    team_id: string,
    params: TeammateIdsInterface,
    f?: any,
  ): Promise<any> {
    return this.client.delete(`/teams/${team_id}/teammates`, params, f);
  }

  async listGroups(team_id: string, f?: any): Promise<any> {
    return this.client.get(`/teams/${team_id}/contact_groups`, {}, f);
  }

  async createGroup(team_id: string, name: string, f?: any): Promise<any> {
    return this.client.post(
      `/teams/${team_id}/contact_groups`,
      { name: name },
      f,
    );
  }
}
