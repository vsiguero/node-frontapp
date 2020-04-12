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
    class UtilsClass {
        toUrlParam(paramObj) {
            if (!paramObj) {
                return '';
            }
            return Object.entries(paramObj)
                .map(([key, val]) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
            })
                .join('&');
        }
    }
    const FrontUtils = new UtilsClass();
    exports.default = FrontUtils;
});
