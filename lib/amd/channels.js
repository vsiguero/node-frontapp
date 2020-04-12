define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Channels {
        constructor(client) {
            this.client = client;
        }
        async list(f) {
            return this.client.get(`/channels`, {}, f);
        }
        async listTeam(id, f) {
            return this.client.get(`/teams/${id}/channels`, {}, f);
        }
        async listTeammate(id, f) {
            return this.client.get(`/teammates/${id}/channels`, {}, f);
        }
        async get(id, f) {
            return this.client.get(`/channels/${id}`, {}, f);
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
    }
    exports.Channels = Channels;
});
