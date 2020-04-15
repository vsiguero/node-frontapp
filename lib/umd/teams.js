(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Teams {
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
    }
    exports.Teams = Teams;
});
