System.register([], function (exports_1, context_1) {
    "use strict";
    var Inboxes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Inboxes = class Inboxes {
                constructor(client) {
                    this.client = client;
                }
                async list(f) {
                    return this.client.get(`/inboxes`, {}, f);
                }
                async listChannels(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
                }
                async get(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}`, {}, f);
                }
                async create(params, f) {
                    const newInbox = await this.client.post(`/inboxes`, params, f);
                    return this.get(newInbox.id);
                }
            };
            exports_1("Inboxes", Inboxes);
        }
    };
});
