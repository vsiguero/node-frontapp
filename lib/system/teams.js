System.register([], function (exports_1, context_1) {
    "use strict";
    var Teams;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Teams = class Teams {
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
                    await this.client.post(`/teams/${team_id}/teammates`, params, f);
                    return this.client.defaultResponse({
                        id: team_id,
                        added: true,
                        object: 'team',
                        params: params,
                    });
                }
                async removeTeammate(team_id, params, f) {
                    await this.client.delete(`/teams/${team_id}/teammates`, params, f);
                    return this.client.defaultResponse({
                        id: team_id,
                        removed: true,
                        object: 'team',
                        params: params,
                    });
                }
                async listGroups(team_id, f) {
                    return this.client.get(`/teams/${team_id}/contact_groups`, {}, f);
                }
                async createGroup(team_id, name, f) {
                    await this.client.post(`/teams/${team_id}/contact_groups`, { name: name }, f);
                    return this.client.defaultResponse({
                        id: team_id,
                        created: true,
                        object: 'contact_groups',
                        params: name,
                    });
                }
            };
            exports_1("Teams", Teams);
        }
    };
});
