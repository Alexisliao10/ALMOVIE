import * as node from "../utilities/nodes.js";

export function categoryLayout(category) {
  node.heroContainer.classList.add("lg:hidden");
  node.moviesContainer.classList.remove("hidden");
  node.moviesContainerTitle.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.classList.remove("lg:hidden");
  node.sectionTitle.textContent = category;
  node.asideContainer.classList.remove("lg:hidden");
}
