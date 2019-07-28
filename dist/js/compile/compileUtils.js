var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./updateUtils", "../../constant/directive"], function (require, exports, updateUtils_1, directive_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    updateUtils_1 = __importDefault(updateUtils_1);
    var CompileUtils = /** @class */ (function (_super) {
        __extends(CompileUtils, _super);
        function CompileUtils() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isDirective = function (attrName) {
                return Boolean(directive_1.DirectiveMap[attrName]);
            };
            _this.compileDirectiveText = function (node, vm, expr) {
                _this.textUpdater(node, vm.$data[expr]);
            };
            return _this;
        }
        return CompileUtils;
    }(updateUtils_1.default));
    exports.default = CompileUtils;
});
