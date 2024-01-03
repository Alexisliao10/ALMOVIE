import { api } from "./main.js";

const trendMovies = [];
export async function getTrendMovies(range = "day") {
  const { data } = await api(`trending/movie/${range}`);
  trendMovies = data.results;
}
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

getTrendMovies();
console.log(trendMovies);
