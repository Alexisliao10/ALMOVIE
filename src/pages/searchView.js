import * as nodes from "../utilities/nodes.js";
import { searchMoviesAPI, genresMovieList } from "../utilities/getDataApi.js";
import renderPreviewCards from "./renderCards.js";

export function searchViewLayout() {
  nodes.moviesContainerTitle.classList.add("hidden");
  nodes.moreDetailsView.innerHTML = "";
  nodes.moviesContainer.classList.remove("hidden");
}

export async function searchMovies(page = 1) {
  const [_, query] = location.hash.split("=");
  const searchData = await searchMoviesAPI(query, page);
  const validData = searchData.filter((movie) => movie.poster_path);
  renderPreviewCards({ apiData: validData, list: genresMovieList });
}
