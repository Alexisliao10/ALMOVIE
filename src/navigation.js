import { renderTrendMovies } from "./main.js";

const hashPages = {
  "#trends": trendsPage,
  "#search=": searchPage,
  "#series": seriesPage,
  "#movies": moviesPage,
  "#new-release": newReleasePage,
  "#movie=": moviePreviewPage,
};

function navigator() {
  const hash = location.hash;

  if (hashPages[hash]) {
    hashPages[hash]();
  } else {
    homePage();
  }
}

function changeHashLocation(hash) {
  location.hash = "#" + hash;
}

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

export default navigator;
