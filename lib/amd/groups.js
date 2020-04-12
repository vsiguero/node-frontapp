define(["require", "exports"], function (require, exports) {
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
            return this.client.post(`/contact_groups`, { name: name }, f);
        }
        async addContact(group_id, params, f) {
            return this.client.post(`/contact_groups/${group_id}/contacts`, params, f);
        }
        async delete(group_id, f) {
            return this.client.delete(`/contact_groups/${group_id}`, {}, f);
        }
    }
    exports.Groups = Groups;
});
