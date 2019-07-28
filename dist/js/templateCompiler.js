define(["require", "exports", "../utils/isElementNode", "../utils/nodeToFragment"], function (require, exports, isElementNode_1, nodeToFragment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // create a template compiler tool
    var TemplateCompiler = /** @class */ (function () {
        function TemplateCompiler(el, vm) {
            this.el = this.getAppNode(el);
            this.vm = vm;
            if (this.el) {
                var fragment = nodeToFragment_1.nodeToFragment(this.el);
                this.compiler(fragment);
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
        TemplateCompiler.prototype.compiler = function (fragment) {
        };
        return TemplateCompiler;
    }());
    exports.default = TemplateCompiler;
});
