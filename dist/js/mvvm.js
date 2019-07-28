var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./compile/templateCompiler"], function (require, exports, templateCompiler_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    templateCompiler_1 = __importDefault(templateCompiler_1);
    var MVVM = /** @class */ (function () {
        function MVVM(options) {
            // catch data
            this.$vm = this;
            this.$el = options.el;
            this.$data = options.data;
            // is el has in app
            if (this.$el) {
                this.$compiler = new templateCompiler_1.default(this.$el, this.$vm);
            }
        }
        return MVVM;
    }());
    exports.default = MVVM;
});
