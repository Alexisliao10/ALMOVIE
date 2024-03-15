import renderPreviewCards from "./renderCards.js";
import * as node from "./nodes.js";
import {
  trendMovies,
  trendSeries,
  popularMovies,
  upcomingMovies,
} from "../utilities/getDataApi.js";
import { putSeries } from "../pages/series.js";
import { moreDetailsLayout, renderMoreDetails } from "../pages/moreDetails.js";
import { homeLayout, renderHero } from "../pages/home.js";
import { searchViewLayout, searchMovies } from "../pages/searchView.js";
import { moviesLayout } from "../pages/movie.js";
import { upcomingLayout } from "../pages/upcoming.js";

setTimeout(() => {
  navigate();
}, 300);

window.addEventListener("hashchange", navigate, false);

const hashPages = {
  "#trends": trendsPage,
  "#search": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#newRelease": upcomingPage,
  "#movie": moviePreviewPage,
  "#error404": error404,
};

function navigate() {
  const [hash] = location.hash.split("=");
  if (hashPages[hash]) {
    hashPages[hash]();
  } else {
    homePage();
  }
}

function homePage() {
  homeLayout();
  renderHero(0);
  renderPreviewCards(trendMovies);
  console.log("home");
}

function trendsPage() {
  console.log("trends");
}

let inputSearchValue = undefined;

function searchPage() {
  searchViewLayout();
  if (inputSearchValue !== node.searchFormInput.value) {
    inputSearchValue = node.searchFormInput.value;
    searchMovies();
  }
  console.log("searchPage");
}

function seriesPage() {
  putSeries();
  renderPreviewCards(trendSeries);
  console.log("series");
}

function moviesPage() {
  moviesLayout();
  renderPreviewCards(popularMovies);
  console.log("movies");
}

function upcomingPage() {
  upcomingLayout();
  renderPreviewCards(upcomingMovies);
  console.log("upcoming");
}

export function moviePreviewPage() {
  const [hash, movieInfo] = location.hash.split("=");
  const [movieId] = movieInfo.split("-");
  moreDetailsLayout();
  if (hash) renderMoreDetails(movieId);
  console.log("movie preview");
}

function error404() {
  console.log("error");
}
