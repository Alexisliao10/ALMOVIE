import * as node from "../utilities/nodes.js";

export function moreDetailsLayout() {
  node.moreDetailsView.classList.remove("hidden");
  node.inputContainer.classList.add("hidden");
  node.moviesContainer.classList.add("hidden");
  node.divContainer.classList.remove("h-12");
}
