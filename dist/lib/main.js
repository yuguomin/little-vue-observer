var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../js/mvvm"], function (require, exports, mvvm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mvvm_1 = __importDefault(mvvm_1);
    var a = document.getElementById('app');
    if (a) {
        new mvvm_1.default({
            el: a,
            data: {
                b: 'xxxx',
                c: 0
            }
        });
    }
});
