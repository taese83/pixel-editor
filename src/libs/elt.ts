export interface PropEvent {
  (event: MouseEvent | TouchEvent): void;
}

export interface Props {
  [key: string]: string | PropEvent;
}

export type Children = string | HTMLElement;

export const elt = (
  type: string,
  props: Props | null,
  ...children: Children[]
) => {
  const dom = document.createElement(type);
  props && Object.assign(dom, props);
  for (let child of children) {
    if (typeof child !== "string") dom.appendChild(child);
    else dom.appendChild(document.createTextNode(child));
  }
  return dom;
};
