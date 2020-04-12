System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1, Contacts;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            Contacts = class Contacts {
                constructor(client) {
                    this.client = client;
                }
                async list(params, query, f) {
                    return this.client.get(`/contacts/${utils_1.default.toUrlParam(params)}`, query || {}, f);
                }
                async get(contact_id, f) {
                    return this.client.get(`/contacts/${contact_id}`, {}, f);
                }
                async create(params, f) {
                    return this.client.post(`/contacts`, params, f);
                }
                async update(contact_id, params, f) {
                    return this.client.put(`/contacts/${contact_id}`, params, f);
                }
                async delete(contact_id, f) {
                    return this.client.delete(`/contacts/${contact_id}`, {}, f);
                }
                async addHandle(contact_id, params, f) {
                    return this.client.post(`/contacts/${contact_id}/handles`, params, f);
                }
                async deleteHandle(contact_id, params, f) {
                    return this.client.post(`/contacts/${contact_id}/handles`, params, f);
                }
            };
            exports_1("Contacts", Contacts);
        }
    };
});
