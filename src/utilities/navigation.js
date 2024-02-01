import renderPreviewCards from "../pages/renderCards.js";
import * as node from "./nodes.js";
import { trendMovies, trendSeries } from "../utilities/getDataApi.js";
import { putSeries } from "../pages/series.js";
import { moreDetailsLayout, renderMoreDetails } from "../pages/moreDetails.js";
import { homeLayout } from "../pages/home.js";
import { searchViewLayout, searchMovies } from "../pages/searchView.js";
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
  const hash = location.hash.split("=")[0];
  console.log("🚀 ~ navigator ~ hash:", hash);

  if (hashPages[hash]) {
    hashPages[hash]();
  } else {
    homePage();
  }
}

// function changeHashLocation(hash) {
//   location.hash = "#" + hash;
// }

function homePage() {
  homeLayout();
  renderPreviewCards({
    apiData: trendMovies,
  });
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
  renderPreviewCards({
    apiData: trendSeries,
  });
  console.log("series");
}

function moviesPage() {
  console.log("movies");
}

function newReleasePage() {
  console.log("new release");
}

export function moviePreviewPage() {
  const [_, movieInfo] = location.hash.split("=");
  const [movieId] = movieInfo.split("-");
  moreDetailsLayout();
  renderMoreDetails(movieId); // TODO add data type (movie or series)
  console.log("movie preview");
}

function error404() {
  console.log("error");
}
