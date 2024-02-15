import * as node from "../utilities/nodes.js";
import { searchMovies } from "../pages/searchView.js";

export function removeShowMoreBtn() {
  node.moviesContainer.removeChild(node.showMoreBtn);
}

export function addShowMoreBtn() {
  if (!document.getElementById("showMoreBtn")) {
    node.moviesContainer.appendChild(node.showMoreBtn);
    node.showMoreBtn.addEventListener("click", renderMoreMoviesOnce);
  }
}

function renderMoreMoviesOnce() {
  searchMovies(2, false);
  removeShowMoreBtn();
}
