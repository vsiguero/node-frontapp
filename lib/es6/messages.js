export class Messages {
    constructor(client) {
        this.client = client;
    }
    async get(message_id, f) {
        return this.client.get(`/messages/${message_id}`, {}, f);
    }
    async reply(conversation_id, params, f) {
        return this.client.get(`/conversations/${conversation_id}/messages`, params, f);
    }
}
