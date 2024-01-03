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
