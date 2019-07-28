import UpdateUtils from "./updateUtils";
import { DirectiveMap } from "../../constant/directive";

export default class CompileUtils extends UpdateUtils {
  public isDirective: (attrName: string) => boolean = (attrName) => {
    return Boolean(DirectiveMap[attrName]);
  }

  public compileText = (node: Element, vm: any, expr: string) => {
    // expr = expr.split('.').map((value) => {
    //   return `[${value}]`;
    // }).join('');
    // console.log(vm.$data[expr]);
    this.textUpdater(node, vm.$data[expr]);
  }

  public compileValue = (node: HTMLInputElement, vm: any, expr: string) => {
    // expr = expr.split('.').map((value) => {
    //   return `[${value}]`;
    // }).join('');
    // console.log(vm.$data[expr]);
    this.modelUpdater(node, vm.$data[expr]);
  }
}