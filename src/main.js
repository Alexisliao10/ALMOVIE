import axios, { isCancel, AxiosError } from "axios";
import API_KEY from "./apiKey.js";
import navigator from "./navigation.js";
import * as nodes from "./nodes.js";
import { getTrendMovies } from "./trendMovies.js";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

window.addEventListener("DOMContentLoaded", navigator);
window.addEventListener("hashchange", navigator);

nodes.hamMenu.addEventListener("click", toggleHamMenuView);

function toggleHamMenuView() {
  nodes.hamIcon.classList.toggle("hidden");
  nodes.quitIcon.classList.toggle("hidden");
  nodes.menu.classList.toggle("translate-y-0");
  nodes.divContainer.classList.toggle("h-52");
  nodes.divContainer.classList.toggle("h-12");
  nodes.inputContainer.classList.toggle("translate-y-40");
  nodes.sectionTrending.classList.toggle("opacity-50");
}
function closeHamMenu() {
  if (!hamIcon.classList.contains("hidden")) {
    return;
  }
  toggleHamMenuView();
}
nodes.moviesContainer.addEventListener("click", closeHamMenu);

export async function renderTrendMovies(range) {
  try {
    const trendMovies = await getTrendMovies(range);
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
  } catch (error) {
    throw new Error(error.message);
  }
}
