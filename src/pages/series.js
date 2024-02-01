import * as nodes from "../utilities/nodes.js";

export function putSeries() {
  nodes.sectionTitle.textContent = "Trending Series";
  nodes.moviesContainerTitle.classList.remove("hidden");
  nodes.moreDetailsView.innerHTML = "";
  nodes.moviesContainer.classList.remove("hidden");
}
