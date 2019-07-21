"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templateCompiler_1 = __importDefault(require("./templateCompiler"));
class MVVMBasicMVVM {
    constructor(options) {
        // catch data
        this.$vm = this;
        this.$el = options.el;
        this.$data = options.data;
        // is el has in app
        if (this.$el) {
            this.$compiler = new templateCompiler_1.default(this.$el, this.$vm);
        }
    }
}
exports.default = MVVMBasicMVVM;
