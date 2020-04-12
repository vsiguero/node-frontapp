System.register([], function (exports_1, context_1) {
    "use strict";
    var Contacts;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Contacts = class Contacts {
                constructor(client) {
                    this.client = client;
                }
                async list(params, f) {
                    return this.client.get(`/contacts`, params || {}, f);
                }
                async get(id, params, f) {
                    return this.client.get(`/contacts/${id}`, params || {}, f);
                }
                async post(params, f) {
                    return this.client.post(`/contacts`, params, f);
                }
                async put(id, params, f) {
                    return this.client.put(`/contacts/${id}`, params, f);
                }
                async delete(id, f) {
                    return this.client.delete(`/contacts/${id}`, {}, f);
                }
            };
            exports_1("Contacts", Contacts);
        }
    };
});
