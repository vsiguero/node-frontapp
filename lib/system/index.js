System.register(["./error", "./client"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (error_1_1) {
                exports_1({
                    "FrontAppError": error_1_1["FrontAppError"]
                });
            },
            function (client_1_1) {
                exports_1({
                    "FrontAppClient": client_1_1["FrontAppClient"]
                });
            }
        ],
        execute: function () {
        }
    };
});
