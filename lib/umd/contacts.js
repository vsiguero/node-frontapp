var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const utils_1 = __importDefault(require("./utils"));
    class Contacts {
        constructor(client) {
            this.client = client;
        }
        async list(params, query, f) {
            return this.client.get(`/contacts/${utils_1.default.toUrlParam(params)}`, query || {}, f);
        }
        async get(contact_id, f) {
            return this.client.get(`/contacts/${contact_id}`, {}, f);
        }
        async create(params, f) {
            return this.client.post(`/contacts`, params, f);
        }
        async update(contact_id, params, f) {
            return this.client.put(`/contacts/${contact_id}`, params, f);
        }
        async delete(contact_id, f) {
            return this.client.delete(`/contacts/${contact_id}`, {}, f);
        }
        async addHandle(contact_id, params, f) {
            return this.client.post(`/contacts/${contact_id}/handles`, params, f);
        }
        async deleteHandle(contact_id, params, f) {
            return this.client.post(`/contacts/${contact_id}/handles`, params, f);
        }
    }
    exports.Contacts = Contacts;
});
