define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateUtils = /** @class */ (function () {
        function UpdateUtils() {
            this.textUpdater = function (node, value) {
                node.textContent = value;
            };
        }
        return UpdateUtils;
    }());
    exports.default = UpdateUtils;
});
