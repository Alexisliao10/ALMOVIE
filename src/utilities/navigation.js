import renderPreviewCards from "../pages/renderCards.js";
import * as node from "./nodes.js";
import {
  trendMovies,
  trendSeries,
  popularMovies,
  upcomingMovies,
} from "../utilities/getDataApi.js";
import { putSeries } from "../pages/series.js";
import { moreDetailsLayout, renderMoreDetails } from "../pages/moreDetails.js";
import { homeLayout } from "../pages/home.js";
import { searchViewLayout, searchMovies } from "../pages/searchView.js";
import { moviesLayout } from "../pages/movie.js";
import { upcomingLayout } from "../pages/upcoming.js";
import { checkTotalPage, removeShowMoreBtn } from "../button/showMorebtn.js";

const hashPages = {
  "#trends": trendsPage,
  "#search": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#newRelease": upcomingPage,
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
  removeShowMoreBtn();
  console.log("home");
}

function trendsPage() {
  removeShowMoreBtn();
  console.log("trends");
}

function searchPage() {
  searchViewLayout();
  searchMovies();
  setTimeout(checkTotalPage, 500);
  console.log("searchPage");
}

function seriesPage() {
  putSeries();
  renderPreviewCards(trendSeries);
  removeShowMoreBtn();
  console.log("series");
}

function moviesPage() {
  moviesLayout();
  renderPreviewCards(popularMovies);
  removeShowMoreBtn();
  console.log("movies");
}

function upcomingPage() {
  upcomingLayout();
  renderPreviewCards(upcomingMovies);
  removeShowMoreBtn();
  console.log("upcoming");
}

export function moviePreviewPage() {
  const [hash, movieInfo] = location.hash.split("=");
  const [movieId] = movieInfo.split("-");
  moreDetailsLayout();
  if (hash) renderMoreDetails(movieId);
  removeShowMoreBtn();
  console.log("movie preview");
}

function error404() {
  removeShowMoreBtn();
  console.log("error");
}
