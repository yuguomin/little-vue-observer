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
define(["require", "exports", "../../utils/isElementNode", "../../utils/nodeToFragment", "../../utils/toArray", "./compileUtils", "../../constant/directive"], function (require, exports, isElementNode_1, nodeToFragment_1, toArray_1, compileUtils_1, directive_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    compileUtils_1 = __importDefault(compileUtils_1);
    // create a template compiler tool
    var TemplateCompiler = /** @class */ (function (_super) {
        __extends(TemplateCompiler, _super);
        function TemplateCompiler(el, vm) {
            var _this = _super.call(this) || this;
            _this.el = _this.getAppNode(el);
            _this.vm = vm;
            if (_this.el) {
                var fragment = nodeToFragment_1.nodeToFragment(_this.el);
                _this.compile(fragment);
                _this.el.appendChild(fragment);
            }
            return _this;
        }
        TemplateCompiler.prototype.getAppNode = function (el) {
            if (isElementNode_1.isElementNode(el)) {
                return el;
            }
            if (typeof el === 'string') {
                return document.querySelector(el);
            }
            return null;
        };
        TemplateCompiler.prototype.compile = function (fragment) {
            var _this = this;
            var childNodes = toArray_1.toArray(fragment.childNodes);
            childNodes.forEach(function (node) {
                if (isElementNode_1.isElementNode(node)) {
                    // compiler directive
                    _this.compileElement(node);
                }
            });
        };
        TemplateCompiler.prototype.compileElement = function (node) {
            var _this = this;
            var nodeAttrs = toArray_1.toArray(node.attributes);
            nodeAttrs.forEach(function (attr) {
                var attrName = attr.name;
                if (_this.isDirective(attrName)) {
                    var expr = attr.value;
                    switch (attrName) {
                        case directive_1.DirectiveMap["v-text"]:
                            _this.compileDirectiveText(node, _this.vm, expr);
                            break;
                    }
                }
            });
        };
        return TemplateCompiler;
    }(compileUtils_1.default));
    exports.default = TemplateCompiler;
});
