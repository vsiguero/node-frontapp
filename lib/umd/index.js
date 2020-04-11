(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./error", "./client"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_1 = require("./error");
    exports.FrontAppError = error_1.FrontAppError;
    var client_1 = require("./client");
    exports.FrontAppClient = client_1.FrontAppClient;
});
