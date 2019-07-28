define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isElementNode = function (node) {
        return node.nodeType === 1;
    };
});
