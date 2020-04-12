"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UtilsClass = /** @class */ (function () {
    function UtilsClass() {
    }
    UtilsClass.prototype.toUrlParam = function (paramObj) {
        if (!paramObj) {
            return '';
        }
        return Object.entries(paramObj)
            .map(function (_a) {
            var key = _a[0], val = _a[1];
            return encodeURIComponent(key) + "=" + encodeURIComponent(val);
        })
            .join('&');
    };
    return UtilsClass;
}());
var FrontUtils = new UtilsClass();
exports.default = FrontUtils;
