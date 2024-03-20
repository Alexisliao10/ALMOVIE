import { searchMovies } from "../pages/searchView.js";
import * as node from "./nodes.js";
import { totalPagesFromSearch } from "../pages/searchView.js";
import { loadMoreTrending, totalPagesFromHome } from "../pages/home.js";
import {
  loadMoreCategories,
  totalPagesFromCategory,
} from "../pages/category.js";

const infiniteScrollPages = {
  "#search": searchInfinite,
  "#home": homeInfinite,
  "#category": categoryInfinite,
};

export function handleScroll() {
  const scrollIsBottom =
    document.documentElement.scrollTop +
      document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 15;

  const [hash] = location.hash.split("=");

  const hasInfiniteScrollPage = infiniteScrollPages[hash];
  const isScrollBottom = scrollIsBottom;
  const hasShowMoreButton = document.getElementById("showMoreBtn");
  const hasEnoughArticles = node.articleContainer.childElementCount > 20;

  if (
    hasInfiniteScrollPage &&
    isScrollBottom &&
    !hasShowMoreButton &&
    hash === "#category"
      ? true
      : hasEnoughArticles
  ) {
    hasInfiniteScrollPage();
  }
}
let currentPage = 3;

function resetCurrentPage() {
  currentPage = 3;
}

let inputSearchValue = undefined;

function validateSearchChange() {
  if (inputSearchValue !== node.searchFormInput.value) {
    inputSearchValue = node.searchFormInput.value;
    resetCurrentPage();
  }
}

window.addEventListener("hashchange", validateSearchChange);

function searchInfinite() {
  if (currentPage <= totalPagesFromSearch[0]) {
    searchMovies(currentPage, false);
  }
  if (currentPage <= totalPagesFromSearch) {
    currentPage++;
  }
}

function homeInfinite() {
  loadMoreTrending(currentPage);
  if (currentPage <= totalPagesFromHome) {
    currentPage++;
  }
}

function categoryInfinite() {
  const [_, category] = location.hash.split("=");
  const [__, categoryId] = category.split("-");
  loadMoreCategories(categoryId, currentPage);
  if (currentPage <= totalPagesFromCategory) {
    currentPage++;
  }
}
