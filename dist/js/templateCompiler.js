"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isElementNode_1 = require("src/utils/isElementNode");
const nodeToFragment_1 = require("src/utils/nodeToFragment");
// create a template compiler tool
class TemplateCompiler {
    constructor(el, vm) {
        this.el = this.getAppNode(el);
        this.vm = vm;
        if (this.el) {
            const fragment = nodeToFragment_1.nodeToFragment(this.el);
        }
    }
    getAppNode(el) {
        if (isElementNode_1.isElementNode(el)) {
            return el;
        }
        if (typeof el === 'string') {
            return document.querySelector(el);
        }
        return null;
    }
}
exports.default = TemplateCompiler;
