var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../js/mvvm"], function (require, exports, mvvm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mvvm_1 = __importDefault(mvvm_1);
    var vm = new mvvm_1.default({
        el: '#app',
        data: {
            message: 'xxxx',
            initData: {
                name: 'Y&GM'
            },
            name: 0
        }
    });
});
