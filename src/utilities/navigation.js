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
import { homeLayout } from "../pages/home.js";
import { searchViewLayout, searchMovies } from "../pages/searchView.js";
import { moviesLayout } from "../pages/movie.js";
import { upcomingLayout } from "../pages/upcoming.js";

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

async function homePage() {
  homeLayout();
  await renderPreviewCards(trendMovies);
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
