import {
  getDirector,
  trendMovies,
  genresMovieList,
  getMovieDetails,
} from "../utilities/getDataApi.js";
import * as node from "../utilities/nodes.js";
import { getIdName } from "./renderCards.js";

export function moreDetailsLayout() {
  node.moreDetailsView.classList.remove("hidden");
  node.inputContainer.classList.add("hidden");
  node.moviesContainer.classList.add("hidden");
  node.divContainer.classList.remove("h-12");
}
export async function renderMoreDetails(id, type) {
  // reset
  node.moreDetailsView.innerHTML = "";
  // request
  const directorName = await getDirector(id, type);
  const res = await trendMovies;
  const [movieInfo] = res.filter((movie) => movie.id == id);
  const genreNames = getIdName(movieInfo.genre_ids, await genresMovieList).join(
    ", ",
  );
  const movieDetails = await getMovieDetails(id);
  const runtime = movieDetails.runtime;
  const duration = (minutes) => {
    let duration = [];
    if (minutes >= 60) {
      const runtimeInHour = Math.floor(minutes / 60);
      const runtimeMinutes = minutes % 60;
      duration.push(runtimeInHour + "h", runtimeMinutes + "m");
    } else {
      const runtimeMinutes = minutes;
      duration.push(runtimeMinutes + "m");
    }
    return duration;
  };
  // classlist / attribute
  node.backBtnContainer.classList.add("my-4", "px-5");
  node.anchor.href = "#home";
  node.backIcon.classList.add(
    "fa-solid",
    "fa-arrow-left",
    "fa-xl",
    "text-white",
  );
  node.backdropImg.classList.add(
    "h-[240px]",
    "w-full",
    "bg-cover",
    "bg-center",
  );
  node.backdropImg.src = `https://image.tmdb.org/t/p/w780/${movieInfo.backdrop_path}`;
  node.movieTitle.classList.add(
    "my-4",
    "flex",
    "justify-center",
    "font-sans",
    "text-[22px]",
    "font-black",
  );
  node.movieTitle.textContent = movieInfo.title;
  node.infoContainer.classList.add("bg-secondary-color-b", "py-2", "text-sm");
  node.timeContainer.classList.add(
    "relative",
    "m-[0_auto]",
    "flex",
    "w-40",
    "justify-center",
    "gap-2",
  );
  node.releaseDate.textContent = movieInfo.release_date;
  node.separator.textContent = "|";
  node.duration.textContent = duration(runtime).join(" "); // TODO
  node.ratingContainer.id = "movieRatingStart-infoSec";
  node.ratingContainer.classList.add(
    "absolute",
    "-right-24",
    "top-[0.7rem]",
    "flex",
    "items-center",
    "gap-2",
  );
  node.ratingScore.classList.add("rating", "text-l");
  node.ratingScore.textContent = movieInfo.vote_average.toFixed(1);
  node.ratingIcon.classList.add(
    "fa-solid",
    "fa-star",
    "fa-md",
    "text-amber-500",
  );
  node.genreContainer.classList.add("flex", "justify-center", "gap-2");
  node.genreContainer.textContent = genreNames;
  node.overviewContainer.classList.add("px-5");
  node.overview.classList.add("mt-6", "font-sans", "text-xl", "font-bold");
  node.overview.textContent = "Overview";
  node.movieOverview.classList.add("mt-1", "text-base");
  node.movieOverview.textContent = movieInfo.overview; // TODO
  node.director.classList.add("mt-9", "font-bold");
  node.director.textContent = directorName;
  node.positionTitle.classList.add("text-sm");
  node.positionTitle.textContent = "Director";
  // appends
  node.anchor.append(node.backIcon);
  node.backBtnContainer.append(node.anchor);
  node.backdropContainer.append(node.backdropImg, node.movieTitle);
  node.ratingContainer.append(node.ratingScore, node.ratingIcon);
  node.timeContainer.append(
    node.releaseDate,
    node.separator,
    node.duration,
    node.ratingContainer,
  );
  node.infoContainer.append(node.timeContainer, node.genreContainer);
  node.overviewContainer.append(
    node.overview,
    node.movieOverview,
    node.director,
    node.positionTitle,
  );
  node.moreDetailsView.append(
    node.backBtnContainer,
    node.backdropContainer,
    node.infoContainer,
    node.overviewContainer,
  );
}

// backdrop img del trendMovies
// movie title
// release date, duration
// genres
// rating
// overview
// director done
