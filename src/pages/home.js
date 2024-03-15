import * as node from "../utilities/nodes.js";
import { trendMoviesByPage } from "../utilities/getDataApi.js";
import renderPreviewCards from "../utilities/renderCards.js";
import { getDiscoverMovies } from "../utilities/getDataApi.js";
import { renderMoreDetails } from "./moreDetails.js";

export let totalPagesFromHome;

export function homeLayout() {
  node.moviesContainer.classList.remove("hidden");
  node.moviesContainerTitle.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.textContent = "Trending Movies";
}

export async function renderHero(page) {
  const res = await getDiscoverMovies;
  const slicedRes = res.slice(0, 10);
  const movie = slicedRes[page];

  node.heroTitle.textContent = movie.title;
  node.heroInfo.textContent = movie.overview;
  node.heroImg.src = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;

  node.heroInfoContainer.addEventListener("click", () => {
    location.hash = "#movie=" + movie.id + "-" + movie.title;
  });
}

export async function loadMoreTrending(page) {
  const resByPage = await trendMoviesByPage(page);
  const data = resByPage.results;
  totalPagesFromHome = [];
  totalPagesFromHome.push(resByPage.total_pages);
  renderPreviewCards(data, { clean: false });
}

node.heroContainer.addEventListener("mouseenter", () => {
  node.heroButtonLeft.classList.add("opacity-80");
  node.heroButtonsRight.classList.add("opacity-80");
});
node.heroContainer.addEventListener("mouseleave", () => {
  node.heroButtonsRight.classList.remove("opacity-80");
  node.heroButtonLeft.classList.remove("opacity-80");
});

let count = 0;

node.heroButtonLeft.addEventListener("click", () => {
  movieCarrousel("prev");
  clearInterval(myInterval);
});

node.heroButtonsRight.addEventListener("click", () => {
  movieCarrousel("next");
  clearInterval(myInterval);
});

function movieCarrousel(direction = "next") {
  if (direction === "next") {
    count = count === 9 ? 0 : count + 1;
  } else if (direction === "prev") {
    count = count === 0 ? 9 : count - 1;
  }
  renderHero(count);
}

const myInterval = setInterval(movieCarrousel, 6000);
