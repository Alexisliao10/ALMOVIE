import {
  getDirector,
  trendMovies,
  genreList,
  getMovieDetails,
} from "../utilities/getDataApi.js";
import * as nodes from "../utilities/nodes.js";
import { getIdName } from "./renderCards.js";

export function moreDetailsLayout() {
  nodes.moreDetailsView.classList.remove("hidden");
  nodes.inputContainer.classList.add("hidden");
  nodes.moviesContainer.classList.add("hidden");
  nodes.divContainer.classList.remove("h-12");
}
export async function renderMoreDetails(id, apiData, type) {
  // reset
  nodes.moreDetailsView.innerHTML = "";
  // request
  const directorName = await getDirector(id, type);
  const res = await trendMovies;
  const [movieInfo] = res.filter((movie) => movie.id == id);
  const genreNames = getIdName(movieInfo.genre_ids, genreList).join(", ");
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
  nodes.backBtnContainer.classList.add("my-4", "px-5");
  nodes.anchor.onclick = function () {
    history.back();
  };
  nodes.backIcon.classList.add(
    "fa-solid",
    "fa-arrow-left",
    "fa-xl",
    "text-white",
    "hover:cursor-pointer",
  );
  nodes.backdropImg.classList.add(
    "h-[240px]",
    "w-full",
    "bg-cover",
    "bg-center",
  );
  nodes.backdropImg.src = `https://image.tmdb.org/t/p/w780/${movieInfo.backdrop_path}`;
  nodes.movieTitle.classList.add(
    "my-4",
    "flex",
    "justify-center",
    "font-sans",
    "text-[22px]",
    "font-black",
  );
  nodes.movieTitle.textContent = movieInfo.title;
  nodes.infoContainer.classList.add("bg-secondary-color-b", "py-2", "text-sm");
  nodes.timeContainer.classList.add(
    "relative",
    "m-[0_auto]",
    "flex",
    "w-40",
    "justify-center",
    "gap-2",
  );
  nodes.releaseDate.textContent = movieInfo.release_date;
  nodes.separator.textContent = "|";
  nodes.duration.textContent = duration(runtime).join(" "); // TODO
  nodes.ratingContainer.id = "movieRatingStart-infoSec";
  nodes.ratingContainer.classList.add(
    "absolute",
    "-right-24",
    "top-[0.7rem]",
    "flex",
    "items-center",
    "gap-2",
  );
  nodes.ratingScore.classList.add("rating", "text-l");
  nodes.ratingScore.textContent = movieInfo.vote_average.toFixed(1);
  nodes.ratingIcon.classList.add(
    "fa-solid",
    "fa-star",
    "fa-md",
    "text-amber-500",
  );
  nodes.genreContainer.classList.add("flex", "justify-center", "gap-2");
  nodes.genreContainer.textContent = genreNames;
  nodes.overviewContainer.classList.add("px-5");
  nodes.overview.classList.add("mt-6", "font-sans", "text-xl", "font-bold");
  nodes.overview.textContent = "Overview";
  nodes.movieOverview.classList.add("mt-1", "text-base");
  nodes.movieOverview.textContent = movieInfo.overview; // TODO
  nodes.director.classList.add("mt-9", "font-bold");
  nodes.director.textContent = directorName;
  nodes.positionTitle.classList.add("text-sm");
  nodes.positionTitle.textContent = "Director";
  // appends
  nodes.anchor.append(nodes.backIcon);
  nodes.backBtnContainer.append(nodes.anchor);
  nodes.backdropContainer.append(nodes.backdropImg, nodes.movieTitle);
  nodes.ratingContainer.append(nodes.ratingScore, nodes.ratingIcon);
  nodes.timeContainer.append(
    nodes.releaseDate,
    nodes.separator,
    nodes.duration,
    nodes.ratingContainer,
  );
  nodes.infoContainer.append(nodes.timeContainer, nodes.genreContainer);
  nodes.overviewContainer.append(
    nodes.overview,
    nodes.movieOverview,
    nodes.director,
    nodes.positionTitle,
  );
  nodes.moreDetailsView.append(
    nodes.backBtnContainer,
    nodes.backdropContainer,
    nodes.infoContainer,
    nodes.overviewContainer,
  );
}

// backdrop img del trendMovies
// movie title
// release date, duration
// genres
// rating
// overview
// director done
