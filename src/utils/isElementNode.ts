export const isElementNode: (node: any) => boolean = (node) => {
  return node.nodeType === 1;
}