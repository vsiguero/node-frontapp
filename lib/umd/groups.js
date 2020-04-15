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
    class Groups {
        constructor(client) {
            this.client = client;
        }
        async get(group_id, f) {
            return this.client.get(`/contact_groups/${group_id}`, {}, f);
        }
        async list(f) {
            return this.client.get(`/contact_groups`, {}, f);
        }
        async listContacts(group_id, query, f) {
            return this.client.get(`/contact_groups/${group_id}/contacts`, query || {}, f);
        }
        async create(name, f) {
            const newGroup = await this.client.post(`/contact_groups`, { name: name }, f);
            return this.get(newGroup.id);
        }
        async addContact(group_id, params, f) {
            await this.client.post(`/contact_groups/${group_id}/contacts`, params, f);
            return this.client.defaultResponse({
                id: group_id,
                added: true,
                params: params,
            });
        }
        async delete(group_id, f) {
            await this.client.delete(`/contact_groups/${group_id}`, {}, f);
            return this.client.defaultResponse({
                id: group_id,
                deleted: true,
                object: 'contact_group',
            });
        }
    }
    exports.Groups = Groups;
});
