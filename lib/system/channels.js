System.register([], function (exports_1, context_1) {
    "use strict";
    var Channels;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Channels = class Channels {
                constructor(client) {
                    this.client = client;
                }
                async get(id, f) {
                    return this.client.get(`/channels/${id}`, {}, f);
                }
                async list(f) {
                    return this.client.get(`/channels`, {}, f);
                }
                async create(inboxId, params, f) {
                    return this.client.get(`/${inboxId}/channels`, params, f);
                }
                async update(channelId, params, f) {
                    return this.client.get(`/channels/${channelId}`, params, f);
                }
                async listInboxes(f) {
                    return this.client.get(`/inboxes`, {}, f);
                }
                async getInbox(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}`, {}, f);
                }
                async listInboxChannels(inboxId, f) {
                    return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
                }
            };
            exports_1("Channels", Channels);
        }
    };
});
