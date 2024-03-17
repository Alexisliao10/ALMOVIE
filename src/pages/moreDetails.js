import {
  getDirector,
  genreList,
  getMovieDetails,
  getSeriesDetails,
} from "../utilities/getDataApi.js";
import * as nodes from "../utilities/nodes.js";
import { getIdName } from "../utilities/renderCards.js";

export function moreDetailsLayout() {
  nodes.moreDetailsView.classList.remove("hidden");
  nodes.inputContainer.classList.add("hidden");
  nodes.moviesContainer.classList.add("hidden");
  nodes.asideContainer.classList.add("lg:hidden");
  nodes.heroContainer.classList.add("lg:hidden");
}
export async function renderMoreDetails(id) {
  // const moviesInfo = dataForViewMore.flat();
  const windowWidth = window.innerWidth;
  // reset
  nodes.moreDetailsView.innerHTML = "";
  // request
  let renderDetails;

  try {
    const details = await getMovieDetails(id);
    renderDetails = details;
  } catch (error) {}
  try {
    const details = await getSeriesDetails(id);
    renderDetails = details;
  } catch (error) {}

  const genresIDList = renderDetails.genres.map((item) => item.id);
  const directorName = await getDirector(id);
  const genreNames = getIdName(genresIDList, genreList).join(", "); // solo recibe un array
  const runtime = renderDetails.runtime;
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
  nodes.backBtnContainer.classList.add(
    "my-4",
    "px-5",
    "lg:absolute",
    "lg:top-[115px]",
    "lg:left-[135px]",
  );
  nodes.anchor.onclick = function () {
    history.back();
  };
  nodes.backIcon.classList.add(
    "fa-solid",
    "fa-arrow-left",
    "fa-xl",
    "text-white",
    "hover:text-azure",
    "hover:cursor-pointer",
    "lg:text-[30px]",
  );
  nodes.backdropImg.classList.add(
    "h-[240px]",
    "w-full",
    "bg-cover",
    "bg-center",
    "lg:h-auto",
  );
  nodes.backdropImg.src = `https://image.tmdb.org/t/p/w780/${renderDetails.backdrop_path}`;
  nodes.movieTitle.classList.add(
    "my-4",
    "flex",
    "justify-center",
    "font-sans",
    "text-[22px]",
    "font-black",
  );
  nodes.movieTitle.textContent = renderDetails.title;
  nodes.infoContainer.classList.add(
    "bg-secondary-color-b",
    "py-2",
    "text-sm",
    "lg:h-[80px]",
    "lg:py-4",
  );
  nodes.timeContainer.classList.add(
    "relative",
    "m-[0_auto]",
    "flex",
    "w-40",
    "justify-center",
    "gap-2",
    "lg:w-[500px]",
  );
  nodes.releaseDate.textContent =
    !windowWidth > 1024
      ? renderDetails.release_date
      : `Release date: ${renderDetails.release_date}`;
  nodes.separator.textContent = "|";
  nodes.duration.textContent =
    !windowWidth > 1024
      ? duration(runtime).join(" ")
      : `Duration: ${duration(runtime).join(" ")}`;
  nodes.ratingContainer.id = "movieRatingStart-infoSec";
  nodes.ratingContainer.classList.add(
    "absolute",
    "-right-24",
    "top-[0.7rem]",
    "flex",
    "items-center",
    "gap-2",
  );
  nodes.ratingScore.classList.add("rating", "text-l", "lg:text-[20px]");
  nodes.ratingScore.textContent = renderDetails.vote_average.toFixed(1);
  nodes.ratingIcon.classList.add(
    "fa-solid",
    "fa-star",
    "fa-md",
    "text-amber-500",
    "lg:text-[20px]",
  );
  nodes.genreContainer.classList.add(
    "flex",
    "justify-center",
    "gap-2",
    "lg:mt-2",
  );
  nodes.genreContainer.textContent =
    !windowWidth > 1024 ? genreNames : `Genres: ${genreNames}`;
  nodes.overviewContainer.classList.add("px-5");
  nodes.overview.classList.add("mt-6", "font-sans", "text-xl", "font-bold");
  nodes.overview.textContent = "Overview";
  nodes.movieOverview.classList.add("mt-1", "text-base");
  nodes.movieOverview.textContent = renderDetails.overview;
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
