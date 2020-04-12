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
            };
            exports_1("Teams", Teams);
        }
    };
});
