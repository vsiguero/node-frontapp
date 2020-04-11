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
    class FrontAppError extends Error {
        constructor(message, title, details, status) {
            super(message);
            this.name = 'FrontAppError';
            this.message = message;
            this.status = status;
            this.title = title;
            this.details = details;
        }
    }
    exports.FrontAppError = FrontAppError;
});
