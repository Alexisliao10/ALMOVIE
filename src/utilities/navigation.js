import renderPreviewCards from "../pages/renderCards.js";
import * as node from "./nodes.js";
import {
  trendMovies,
  trendSeries,
  popularMovies,
} from "../utilities/getDataApi.js";
import { putSeries } from "../pages/series.js";
import { moreDetailsLayout, renderMoreDetails } from "../pages/moreDetails.js";
import { homeLayout } from "../pages/home.js";
import { searchViewLayout, searchMovies } from "../pages/searchView.js";
import { moviesLayout } from "../pages/movie.js";
const hashPages = {
  "#trends": trendsPage,
  "#search": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#newRelease": newReleasePage,
  "#movie": moviePreviewPage,
  "#error404": error404,
};

export function navigate() {
  const [hash] = location.hash.split("=");
  if (hashPages[hash]) {
    hashPages[hash]();
  } else {
    homePage();
  }
}

function homePage() {
  homeLayout();
  renderPreviewCards(trendMovies);
  console.log("home");
}

function trendsPage() {
  console.log("trends");
}

function searchPage() {
  searchViewLayout();
  searchMovies();
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

function newReleasePage() {
  console.log("new release");
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
