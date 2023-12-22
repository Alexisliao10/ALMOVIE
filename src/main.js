import API_KEY from "./apiKey.js";

const API_URL = "https://api.themoviedb.org/3/";

async function getTrendingMoviesPreview() {
  const res = await fetch(
    `${API_URL}trending/movie/day?language=en-US&api_key=${API_KEY}`,
  );
  const data = await res.json();
  const trendMovies = data.results;
  console.log(data);

  trendMovies.forEach((movie) => {
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
