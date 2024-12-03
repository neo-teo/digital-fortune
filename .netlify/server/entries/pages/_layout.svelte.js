import { S as pop, Q as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  console.log("Layout mounting");
  $$payload.out += `<div class="relative min-h-screen py-20" style="background: linear-gradient(to bottom, white 0%, rgb(200 210 215) 50px, rgb(200 210 215) calc(100% - 50px), white 100% )">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
