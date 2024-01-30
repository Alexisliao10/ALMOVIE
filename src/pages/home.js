import * as node from "../utilities/nodes.js";

export function homeLayout() {
  node.moviesContainer.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.textContent = "Trending Movies";
}
