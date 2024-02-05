import * as node from "../utilities/nodes.js";
import { totalPagesFromSearch } from "../pages/searchView.js";
import { searchMovies } from "../pages/searchView.js";

export function removeShowMoreBtn() {
  node.showMoreBtn.classList.add("hidden");
  node.showMoreBtn.classList.remove("block");
}

function addShowMoreBtn() {
  node.showMoreBtn.classList.add("block");
  node.showMoreBtn.classList.remove("hidden");
}

let maxPage;
let currentPage = 1;

export async function checkTotalPage() {
  const totalPages = await totalPagesFromSearch[0];
  maxPage = totalPages;
  currentPage = 1;
  if (totalPages > 1) {
    addShowMoreBtn();
  } else {
    removeShowMoreBtn();
  }
}

function renderMoreMovies() {
  if (node.showMoreBtn.classList.contains("block") && currentPage < maxPage) {
    currentPage++;
    searchMovies(currentPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    console.log("no more pages");
  }
}

showMoreBtn.addEventListener("click", renderMoreMovies);
