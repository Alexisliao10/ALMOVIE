import * as node from "../utilities/nodes.js";

export function moviesLayout() {
  node.moviesContainer.classList.remove("hidden");
  node.moviesContainerTitle.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.textContent = "Popular Movies";
  node.heroContainer.classList.add("lg:hidden");
  node.sectionTitle.classList.add("lg:hidden");
}
