System.register([], function (exports_1, context_1) {
    "use strict";
    var FrontAppError;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            FrontAppError = class FrontAppError extends Error {
                constructor(message, title, details, status) {
                    super(message);
                    this.name = 'FrontAppError';
                    this.message = message;
                    this.status = status;
                    this.title = title;
                    this.details = details;
                }
            };
            exports_1("FrontAppError", FrontAppError);
        }
    };
});
