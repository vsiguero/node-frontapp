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
        async get(params, f) {
            return this.client.get('/contacts', params, f);
        }
        async list(params, f) {
            return this.client.get('/contacts', params, f);
        }
    }
    exports.Contacts = Contacts;
});
