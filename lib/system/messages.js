System.register([], function (exports_1, context_1) {
    "use strict";
    var Messages;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Messages = class Messages {
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
            };
            exports_1("Messages", Messages);
        }
    };
});
