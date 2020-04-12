export class Inboxes {
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
        return this.client.get(`/inboxes`, params, f);
    }
}
