import { isElementNode } from "src/utils/isElementNode";

// create a template compiler tool
export default class TemplateCompiler {
  public el: Element | null;

  constructor(el: Element | string, vm: any) {
     this.el = this.getAppNode(el);
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