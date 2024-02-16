import * as node from "../utilities/nodes.js";
import { searchMovies } from "../pages/searchView.js";
import { loadMoreTrending } from "../pages/home.js";

export function removeShowMoreBtn() {
  node.moviesContainer.removeChild(node.showMoreBtn);
}

export function addShowMoreBtn() {
  node.moviesContainer.appendChild(node.showMoreBtn);
  if (pageIdentifier()) {
    node.showMoreBtn.removeEventListener("click", renderSearch);
    node.showMoreBtn.addEventListener("click", renderHome);
  } else {
    node.showMoreBtn.removeEventListener("click", renderHome);
    node.showMoreBtn.addEventListener("click", renderSearch);
  }
}

function renderSearch() {
  searchMovies(2, false);
  removeShowMoreBtn();
}

function renderHome() {
  loadMoreTrending(2);
  removeShowMoreBtn();
}

function pageIdentifier() {
  if (location.hash === "#home") {
    return true;
  } else {
    return false;
  }
}
