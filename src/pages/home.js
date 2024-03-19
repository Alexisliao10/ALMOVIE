import * as node from "../utilities/nodes.js";
import { trendMoviesByPage } from "../utilities/getDataApi.js";
import renderPreviewCards from "../utilities/renderCards.js";
import { getDiscoverMovies } from "../utilities/getDataApi.js";

export let totalPagesFromHome;

export function homeLayout() {
  node.heroContainer.classList.remove("lg:hidden");
  node.moviesContainer.classList.remove("hidden");
  node.moviesContainerTitle.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.textContent = "Trending Movies";
  node.sectionTitle.classList.add("lg:hidden");
  node.asideContainer.classList.remove("lg:hidden");
}

export async function renderHero(page) {
  const res = await getDiscoverMovies;
  const slicedRes = res.slice(0, 10);

  const movies = slicedRes[page];
  const heroInfoContainer = document.createElement("div");
  const heroTitle = document.createElement("h1");
  const heroInfo = document.createElement("p");
  // reset
  const prevHeroInfoContainer = document.querySelector("#hero-lg > div");
  if (prevHeroInfoContainer) {
    node.heroContainer.removeChild(prevHeroInfoContainer);
  }
  //classList
  heroInfoContainer.classList.add(
    "absolute",
    "bottom-6",
    "z-10",
    "px-12",
    "opacity-0",
    "hover:cursor-pointer",
    "transition-all",
    "fade-in",
  );
  heroTitle.classList.add(
    "font-sans",
    "text-4xl",
    "font-black",
    "hover:text-azure/[0.9]",
    "fancy-link",
  );
  heroInfo.classList.add("mt-3", "line-clamp-5", "w-[450px]", "font-serif");

  heroTitle.textContent = movies.title;
  heroInfo.textContent = movies.overview;
  node.heroImg.src = `https://image.tmdb.org/t/p/w780${movies.backdrop_path}`;
  node.heroImg.alt = movies.title;
  heroInfoContainer.append(heroTitle, heroInfo);
  node.heroContainer.insertBefore(heroInfoContainer, node.heroButtonLeft);

  heroInfoContainer.addEventListener("click", () => {
    location.hash = "#movie=" + movies.id + "-" + movies.title;
  });
}

renderHero(0);
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

node.inputContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("searchFormInput")) {
    node.searchFormInput.classList.toggle("lg:hidden");
    node.searchLabel.classList.toggle("lg:inline");
  }
});

node.searchFormInput.addEventListener("click", (event) => {
  event.stopPropagation();
});
