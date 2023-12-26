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
  console.log(trendMovies);

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
