import { isElementNode } from '../../utils/isElementNode';
import { nodeToFragment } from '../../utils/nodeToFragment';
import { toArray } from '../../utils/toArray';
import CompileUtils from './compileUtils';
import { DirectiveMap } from '../../constant/directive';

// create a template compiler tool
export default class TemplateCompiler extends CompileUtils {
  public el: Element | null;
  public vm: any;

  constructor(el: Element | string, vm: any) {
    super();

    this.el = this.getAppNode(el);
    this.vm = vm;

    if (this.el) {
      const fragment = nodeToFragment(this.el);
      this.compile(fragment);
      this.el.appendChild(fragment);
    }
  }

  public getAppNode(el: Element | string) {
    if (isElementNode(el)) {
      return el as Element;
    }
    if (typeof el === 'string') {
      return document.querySelector(el);
    }
    return null;
  }

  public compile(fragment: DocumentFragment) {
    const childNodes: Element[] = toArray(fragment.childNodes);
    childNodes.forEach((node) => {
      if (isElementNode(node)) {
        // compiler directive
        this.compileElement(node);
      }
    })
  }

  public compileElement(node: Element) {
    const nodeAttrs = toArray(node.attributes);
    nodeAttrs.forEach((attr) => {
      const attrName = attr.name;
      if (this.isDirective(attrName)) {
        const expr = attr.value;
        switch (attrName) {
          case DirectiveMap["v-text"]:
            this.compileDirectiveText(node, this.vm, expr);
            break;
        }
      }
    });
  }
} 