import * as node from "../utilities/nodes.js";
import { searchMovies } from "../pages/searchView.js";
import { loadMoreTrending } from "../pages/home.js";

export function removeShowMoreBtn() {
  node.moviesContainer.removeChild(node.showMoreBtn);
}

export function addShowMoreBtn() {
  if (pageIdentifier() === "home") {
    node.moviesContainer.appendChild(node.showMoreBtn);
    node.showMoreBtn.removeEventListener("click", renderSearch);
    node.showMoreBtn.addEventListener("click", renderHome);
  } else if (pageIdentifier() === "search") {
    node.moviesContainer.appendChild(node.showMoreBtn);
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
    return "home";
  } else if (location.hash.startsWith("#search")) {
    return "search";
  }
}
