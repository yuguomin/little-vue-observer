import TemplateCompiler from "./templateCompiler";

interface IVmOptions {
  el: Element | string;
  data: object;
}

export default class MVVM {
  public $vm: any;
  public $el: Element | string;
  public $data: object;
  public $compiler: any;

  constructor(options: IVmOptions) {
    // catch data
    this.$vm = this;
    this.$el = options.el;
    this.$data = options.data;
    // is el has in app
    if (this.$el) {
      this.$compiler = new TemplateCompiler(this.$el, this.$vm);
    }
  }
}