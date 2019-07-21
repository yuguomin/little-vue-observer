import { isElementNode } from "src/utils/isElementNode";
import { nodeToFragment } from "src/utils/nodeToFragment";

// create a template compiler tool
export default class TemplateCompiler {
  public el: Element | null;
  public vm: any;

  constructor(el: Element | string, vm:  any) {
     this.el = this.getAppNode(el);
     this.vm = vm;

     if  (this.el) {
      const fragment = nodeToFragment(this.el);
     }
  }






  getAppNode(el: Element | string) {
    if (isElementNode(el)) {
      return el as Element;
    }
    if (typeof el === 'string') {
      return document.querySelector(el);
    }
    return null;
  }
} 