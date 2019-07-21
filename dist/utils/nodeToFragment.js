"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToFragment = (node) => {
    const fragment = document.createDocumentFragment();
    let child;
    while (child = node.firstChild) {
        fragment.appendChild(child);
    }
    return fragment;
};
