define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toArray = function (fakeArr) {
        return [].slice.call(fakeArr);
    };
});
