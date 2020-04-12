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
    class Inboxes {
        constructor(client) {
            this.client = client;
        }
        async listInboxes(f) {
            return this.client.get(`/inboxes`, {}, f);
        }
        async listInboxChannels(inboxId, f) {
            return this.client.get(`/inboxes/${inboxId}/channels`, {}, f);
        }
        async getInbox(inboxId, f) {
            return this.client.get(`/inboxes/${inboxId}`, {}, f);
        }
        async createInbox(params, f) {
            return this.client.get(`/inboxes`, params, f);
        }
    }
    exports.Inboxes = Inboxes;
});