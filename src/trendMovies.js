import { getTrendMovies, getGenreList } from "./main.js";
export async function renderTrendMovies(range) {
  try {
    const trendMovies = await getTrendMovies(range);
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
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findNameOfId(id) {
  try {
    const genreList = await getGenreList();
    const genre = genreList.find((genre) => genre.id === id);

    if (genre) {
      return genre.name;
    } else {
      console.log("no genre found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getInfoMovies(range) {
  const data = await getTrendMovies(range);
  console.log(data[0].genre_ids[0]);
  const name = await findNameOfId(data[0].genre_ids[0]);
  console.log(name);
}
