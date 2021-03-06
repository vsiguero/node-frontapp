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
        const newInbox = await this.client.post(`/inboxes`, params, f);
        return this.get(newInbox.id);
    }
}
