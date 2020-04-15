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
    exports.Inboxes = Inboxes;
});
