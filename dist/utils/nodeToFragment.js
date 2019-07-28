define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nodeToFragment = function (node) {
        var fragment = document.createDocumentFragment();
        var child;
        while (child = node.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    };
});
