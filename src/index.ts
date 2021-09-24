import { elt } from "./libs/elt";

const root = document.querySelector<HTMLElement>("#root");
const dom = elt("div", null, "Canvas");

root?.appendChild(dom);
