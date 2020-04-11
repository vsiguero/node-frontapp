define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Analytics {
        constructor(client) {
            this.client = client;
        }
        async get(params, f) {
            return this.client.get('/analytics', params, f);
        }
        async list(params, f) {
            return this.client.get('/analytics', params, f);
        }
    }
    exports.Analytics = Analytics;
});
