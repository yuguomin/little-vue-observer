import UpdateUtils from "./updateUtils";
import { DirectiveMap } from "../../constant/directive";

export default class CompileUtils extends UpdateUtils {
  public isDirective: (attrName: string) => boolean = (attrName) => {
    return Boolean(DirectiveMap[attrName]);
  }

  public compileDirectiveText = (node: Element, vm: any, expr: string) => {
    this.textUpdater(node, vm.$data[expr]);
  }
}