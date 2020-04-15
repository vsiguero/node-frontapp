export class Messages {
    constructor(client) {
        this.client = client;
    }
    async get(message_id, f) {
        return this.client.get(`/messages/${message_id}`, {}, f);
    }
    // Create message and Create custom message is on channels
    async replyConversation(conversation_id, params, f) {
        return this.client.get(`/conversations/${conversation_id}/messages`, params, f);
    }
}
