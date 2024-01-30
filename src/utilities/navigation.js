import renderPreviewCards from "../pages/renderCards.js";
import * as node from "./nodes.js";
import {
  genresMovieList,
  trendMovies,
  trendSeries,
  genresSeriesList,
} from "../utilities/getDataApi.js";
import { putSeries } from "../pages/series.js";
import { moreDetailsLayout, renderMoreDetails } from "../pages/moreDetails.js";
import { homeLayout } from "../pages/home.js";

const hashPages = {
  "#trends": trendsPage,
  "#search": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#newRelease": newReleasePage,
  "#movie": moviePreviewPage,
  "#error404": error404,
};

function navigator() {
  const hash = location.hash.split("=")[0];

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
    list: genresMovieList,
  });
  console.log("home");
}

function trendsPage() {
  console.log("trends");
}

function searchPage() {
  console.log("searchPage");
}

function seriesPage() {
  putSeries();
  renderPreviewCards({
    apiData: trendSeries,
    list: genresSeriesList,
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

export default navigator;
