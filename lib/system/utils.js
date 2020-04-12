System.register([], function (exports_1, context_1) {
    "use strict";
    var UtilsClass, FrontUtils;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            UtilsClass = class UtilsClass {
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
            };
            FrontUtils = new UtilsClass();
            exports_1("default", FrontUtils);
        }
    };
});
