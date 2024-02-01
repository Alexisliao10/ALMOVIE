import * as nodes from "../utilities/nodes.js";
import { searchMoviesAPI, genresMovieList } from "../utilities/getDataApi.js";
import renderPreviewCards from "./renderCards.js";

export function searchViewLayout() {
  nodes.moviesContainerTitle.classList.add("hidden");
}

export async function searchMovies(page) {
  const [_, query] = location.hash.split("=");
  const searchData = await searchMoviesAPI(query, page);
  console.log("🚀 ~ searchMovies ~ searchData:", searchData);
  renderPreviewCards({ apiData: searchData, list: genresMovieList });
}
