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
        async listByTeam(id, f) {
            return this.client.get(`/teams/${id}/channels`, {}, f);
        }
        async listByTeammate(id, f) {
            return this.client.get(`/teammates/${id}/channels`, {}, f);
        }
        async get(id, f) {
            return this.client.get(`/channels/${id}`, {}, f);
        }
        async create(inboxId, params, f) {
            const newChannel = await this.client.post(`/${inboxId}/channels`, params, f);
            return this.get(newChannel.id);
        }
        async update(channelId, params, f) {
            await this.client.put(`/channels/${channelId}`, params, f);
            return this.get(channelId);
        }
        async createMessage(channel_id, params, f) {
            return this.client.get(`/channels/${channel_id}/messages`, params, f);
        }
        async createCustomMessage(channel_id, params, file, f) {
            return this.client.postMessageWithAttachment(`/channels/${channel_id}/messages`, params, file, f);
        }
    }
    exports.Channels = Channels;
});
