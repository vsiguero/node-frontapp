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
                async get(params, f) {
                    return this.client.get('/contacts', params, f);
                }
                async list(params, f) {
                    return this.client.get('/contacts', params, f);
                }
            };
            exports_1("Contacts", Contacts);
        }
    };
});
