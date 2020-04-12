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
        async getChannel(id, f) {
            return this.client.get(`/channels/${id}`, {}, f);
        }
        async createChannel(inboxId, params, f) {
            return this.client.get(`/${inboxId}/channels`, params, f);
        }
        async updateChannel(channelId, params, f) {
            return this.client.get(`/channels/${channelId}`, params, f);
        }
        async createChannelMessage(channel_id, params, f) {
            return this.client.get(`/channels/${channel_id}/messages`, params, f);
        }
        async createChannelCustomMessage(channel_id, params, file, f) {
            return this.client.postMessageWithAttachment(`/channels/${channel_id}/messages`, params, file, f);
        }
    }
    exports.Channels = Channels;
});
