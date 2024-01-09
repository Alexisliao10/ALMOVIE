import { getTrendMovies, getGenreList } from "./main.js";

function getIdName(id, list, range = 3) {
  const names = [];
  for (let i = 0; i < id.length; i++) {
    const idFound = list.find((item) => item.id === id[i]);
    if (idFound) {
      names.push(idFound.name);
    }
  }
  return names.slice(0, range);
}
async function getGenreNames(apiData, range) {
  const list = await getGenreList();
  let genreList = [];
  apiData.forEach((data) => {
    const genres = getIdName(data.genre_ids, list, range);
    genreList.push(genres);
  });
  return genreList;
}

export async function renderTrendMovies(range) {
  try {
    const trendMovies = await getTrendMovies(range);
    const genreNames = await getGenreNames(trendMovies, 3);
    const trendMoviesContainer = document.querySelector("#trendMovies");

    trendMovies.forEach((movie, i) => {
      const ratingInfo = (movie.vote_average / 2).toFixed(1);
      const movieCard = document.createElement("figure");
      const movieInfoContainer = document.createElement("div");
      const movieOverview = document.createElement("p");
      const movieGenresContainer = document.createElement("div");
      const movieImg = document.createElement("img");
      const movieTitle = document.createElement("figcaption");
      const movieCardFooter = document.createElement("div");
      const anchor = document.createElement("a");
      const viewMore = document.createElement("p");
      const movieRatingContainer = document.createElement("div");
      const rating = document.createElement("p");
      const starIcon = document.createElement("i");

      movieCard.classList.add("relative", "z-auto");
      movieInfoContainer.classList.add(
        "absolute",
        "z-10",
        "opacity-0",
        "cursor-pointer",
        "h-full",
      );
      movieOverview.classList.add(
        "mt-2",
        "line-clamp-10",
        "max-h-40",
        "text-ellipsis",
        "px-2",
        "text-start",
        "text-xs",
      );
      movieOverview.textContent = movie.overview;
      movieGenresContainer.classList.add(
        "absolute",
        "top-44",
        "flex",
        "w-full",
        "flex-wrap",
        "justify-start",
        "gap-2",
        "px-2",
      );

      genreNames[i].forEach((name) => {
        const movieGenre = document.createElement("p");
        movieGenre.classList.add("genre", "text-xxs");
        movieGenre.textContent = name;
        movieGenresContainer.append(movieGenre);
      });
      movieCardFooter.classList.add(
        "absolute",
        "top-[230px]",
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "gap-1",
        "px-2",
      );
      anchor.classList.add("cursor-pointer", "hover:text-azure");
      viewMore.classList.add("text-[11px]");
      viewMore.textContent = "View More...";
      movieRatingContainer.classList.add("flex", "items-center", "gap-1");
      rating.classList.add("rating", "text-sm");
      rating.textContent = ratingInfo;
      starIcon.classList.add(
        "fa-solid",
        "fa-star",
        "fa-sm",
        "pb-1",
        "text-amber-500",
      );

      movieImg.classList.add(
        "rounded-lg",
        "active:border-2",
        "active:border-sky-500",
      );
      movieImg.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      movieImg.alt = movie.title;
      movieTitle.textContent = movie.title;
      movieTitle.classList.add("w-full", "text-center", "mt-2");
      // appends
      anchor.append(viewMore);
      movieRatingContainer.append(rating, starIcon);
      movieCardFooter.append(anchor, movieRatingContainer);
      movieInfoContainer.append(movieOverview);
      movieInfoContainer.append(movieGenresContainer);
      movieInfoContainer.append(movieCardFooter);
      movieCard.append(movieInfoContainer);
      movieCard.append(movieImg, movieTitle);
      trendMoviesContainer.append(movieCard);
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
