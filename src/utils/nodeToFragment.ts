export const nodeToFragment: (node: Element) => DocumentFragment = (node) => {
  const fragment = document.createDocumentFragment();
  let child: Node | null;
  while(child = node.firstChild) {
    fragment.appendChild(child);
  }
  return fragment;
}