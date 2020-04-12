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
    class Contacts {
        constructor(client) {
            this.client = client;
        }
        async list(params, f) {
            return this.client.get(`/contacts`, params || {}, f);
        }
        async get(id, params, f) {
            return this.client.get(`/contacts/${id}`, params || {}, f);
        }
        async post(params, f) {
            return this.client.post(`/contacts`, params, f);
        }
        async put(id, params, f) {
            return this.client.put(`/contacts/${id}`, params, f);
        }
        async delete(id, f) {
            return this.client.delete(`/contacts/${id}`, {}, f);
        }
    }
    exports.Contacts = Contacts;
});
