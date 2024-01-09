import { renderTrendMovies } from "./trendMovies.js";
import * as node from "./nodes.js";

const hashPages = {
  "#trends": trendsPage,
  "#search=": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#newRelease": newReleasePage,
  "#movie=": moviePreviewPage,
  "#error404": error404,
};

function navigator() {
  const hash = location.hash;

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
  renderTrendMovies();
}

function trendsPage() {
  console.log("trends");
}

function searchPage() {
  console.log(searchPage);
}

function seriesPage() {
  console.log("series");
}

function moviesPage() {
  console.log("movies");
}

function newReleasePage() {
  console.log("new release");
}

function moviePreviewPage() {
  console.log("movie preview");
}

function error404() {
  console.log("error");
}

export default navigator;
