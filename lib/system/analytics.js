System.register([], function (exports_1, context_1) {
    "use strict";
    var Analytics;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Analytics = class Analytics {
                constructor(client) {
                    this.client = client;
                }
                async get(params, f) {
                    return this.client.get(`/analytics`, params, f);
                }
                async list(params, f) {
                    return this.client.get(`/analytics`, params, f);
                }
            };
            exports_1("Analytics", Analytics);
        }
    };
});
