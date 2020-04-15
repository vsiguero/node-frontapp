(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Messages {
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
    exports.Messages = Messages;
});
