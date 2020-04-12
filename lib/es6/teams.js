export class Teams {
    constructor(client) {
        this.client = client;
    }
    async list(f) {
        return this.client.get(`/teams`, {}, f);
    }
    async get(team_id, f) {
        return this.client.get(`/teams/${team_id}`, {}, f);
    }
    async addTeammate(team_id, params, f) {
        return this.client.post(`/teams/${team_id}/teammates`, params, f);
    }
    async removeTeammate(team_id, params, f) {
        return this.client.delete(`/teams/${team_id}/teammates`, params, f);
    }
    async listGroups(team_id, f) {
        return this.client.get(`/teams/${team_id}/contact_groups`, {}, f);
    }
    async createGroup(team_id, name, f) {
        return this.client.post(`/teams/${team_id}/contact_groups`, { name: name }, f);
    }
}
