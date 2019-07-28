define(["require", "exports", "../utils/isElementNode", "../utils/nodeToFragment", "../utils/toArray"], function (require, exports, isElementNode_1, nodeToFragment_1, toArray_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // create a template compiler tool
    var TemplateCompiler = /** @class */ (function () {
        function TemplateCompiler(el, vm) {
            this.el = this.getAppNode(el);
            this.vm = vm;
            if (this.el) {
                var fragment = nodeToFragment_1.nodeToFragment(this.el);
                this.compile(fragment);
                // this.el.appendChild(fragment);
            }
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
            var nodeAttrs = toArray_1.toArray(node.attributes);
            console.log(nodeAttrs);
        };
        return TemplateCompiler;
    }());
    exports.default = TemplateCompiler;
});
