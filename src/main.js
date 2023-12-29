import axios, { isCancel, AxiosError } from "axios";
import API_KEY from "./apiKey.js";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  const trendMovies = data.results;

  trendMovies.slice(0, 10).forEach((movie) => {
    const trendMoviesContainer = document.querySelector("#trendMovies");

    const movieCard = document.createElement("figure");
    // const link = document.createElement("a");
    const movieImg = document.createElement("img");
    const movieTitle = document.createElement("figcaption");
    movieImg.classList.add(
      "rounded-lg",
      "active:border-2",
      "active:border-sky-500",
    );
    movieImg.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    movieImg.alt = movie.title;
    movieTitle.textContent = movie.title;
    movieTitle.classList.add("w-full", "text-center", "mt-2");

    movieCard.append(movieImg, movieTitle);
    trendMoviesContainer.append(movieCard);
  });
}

getTrendingMoviesPreview();
const hamMenu = document.querySelector("nav .hamMenu");
const hamIcon = document.querySelector(".hamMenu .fa-bars");
const moviesContainer = document.querySelector("body > main > section");

hamMenu.addEventListener("click", toggleHamMenuView);

function toggleHamMenuView() {
  const quitIcon = document.querySelector(".hamMenu .fa-xmark");
  const menu = document.querySelector("main div ul");
  const divContainer = document.querySelector("body > main > div");
  const inputContainer = document.querySelector("body > main > div > div");
  const sectionTrending = document.querySelector("body > main > section");

  hamIcon.classList.toggle("hidden");
  quitIcon.classList.toggle("hidden");
  menu.classList.toggle("translate-y-0");
  divContainer.classList.toggle("h-52");
  divContainer.classList.toggle("h-12");
  inputContainer.classList.toggle("translate-y-40");
  sectionTrending.classList.toggle("opacity-50");
}

moviesContainer.addEventListener("click", closeHamMenu);

function closeHamMenu() {
  if (hamIcon.classList.contains("hidden")) {
    toggleHamMenuView();
  }
}
