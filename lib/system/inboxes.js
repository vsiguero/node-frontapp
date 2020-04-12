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
                async listInboxes(f) {
                    return this.client.get(`/inboxes`, {}, f);
                }
                async listInboxChannels(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
                }
                async getInbox(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}`, {}, f);
                }
                async createInbox(params, f) {
                    return this.client.get(`/inboxes`, params, f);
                }
            };
            exports_1("Inboxes", Inboxes);
        }
    };
});
