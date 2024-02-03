import * as node from "../utilities/nodes.js";

if (logica) {
  const showMoreBtn = document.createElement("button");
  showMoreBtn.textContent = "Show more";
  showMoreBtn.classList.add("mx-auto");
  node.moviesContainer.append(showMoreBtn);
}
