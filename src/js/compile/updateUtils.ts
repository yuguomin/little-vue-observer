export default class UpdateUtils {
  public textUpdater = (node: Element, value: string) => {
    node.textContent = value;
  }

  public modelUpdater = (node: HTMLInputElement, value: string) => {
    node.value = value;
  }
}