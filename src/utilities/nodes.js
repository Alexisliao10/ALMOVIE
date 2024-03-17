const $ = (selector) => document.querySelector(selector);
const create = (element) => document.createElement(element);
// header
export const hamMenu = $("nav .hamMenu");
export const hamIcon = $(".hamMenu .fa-bars");
export const quitIcon = $(".hamMenu .fa-xmark");
export const menu = $("main div ul");

// main
export const navHome = $("#navHome");
export const navSeries = $("#navSeries");
export const navMovies = $("#navMovies");
export const navNewRelease = $("#navNewRelease");
export const moviesContainer = $("#previewCards-container");
export const moviesContainerTitle = $("#previewCards-container > h1");
export const articleContainer = $("#trendMovies");
export const divContainer = $("main > div");
export const inputContainer = $("main > div > div");
export const searchFormInput = $("#searchBar");
export const searchBtn = $("main > div > div > i");
export const searchLabel = $("main > div > div > label");
export const sectionTrending = $("main > section");
export const sectionTitle = $("main > section > h1");
export const heroContainer = $("#hero-lg");
export const heroInfoContainer = $("#hero-lg > div");
export const heroTitle = $("#hero-lg > div > h1");
export const heroInfo = $("#hero-lg > div > p");
export const heroImgContainer = $("#hero-lg > figure");
export const heroImg = $("#hero-lg > figure > img");
export const heroButtonLeft = $("#hero-lg > .fa-angle-left");
export const heroButtonsRight = $("#hero-lg > .fa-angle-right");
export const asideContainer = $("main > aside");

// section more details
export const moreDetailsView = $("#moreDetails");
export const backBtnContainer = create("div");
export const anchor = create("a");
export const backIcon = create("i");
export const backdropContainer = create("figure");
export const backdropImg = create("img");
export const movieTitle = create("figcaption");
export const infoContainer = create("div");
export const timeContainer = create("div");
export const releaseDate = create("p");
export const separator = create("span");
export const duration = create("p");
export const ratingContainer = create("div");
export const ratingScore = create("p");
export const ratingIcon = create("i");
export const genreContainer = create("div");
export const genres = create("p");
export const overviewContainer = create("div");
export const overview = create("h2");
export const movieOverview = create("p");
export const director = create("h3");
export const positionTitle = create("p");

// buttons

export const showMoreBtn = document.createElement("button");
showMoreBtn.id = "showMoreBtn";
showMoreBtn.textContent = "Show More";
showMoreBtn.classList.add(
  "mx-auto",
  "my-10",
  "w-32",
  "rounded-[25rem]",
  "bg-azure",
  "py-2",
  "hover:bg-blue-700",
  "active:ring-2",
  "ring-white",
);
