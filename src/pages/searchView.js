import * as nodes from "../utilities/nodes.js";
import { searchMoviesAPI, genreList } from "../utilities/getDataApi.js";
import renderPreviewCards from "./renderCards.js";

export function searchViewLayout() {
  nodes.moviesContainerTitle.classList.add("hidden");
  nodes.moreDetailsView.innerHTML = "";
  nodes.moviesContainer.classList.remove("hidden");
}

export let totalPagesFromSearch = [];

export async function searchMovies(page = 1) {
  const [_, query] = location.hash.split("=");
  const searchData = await searchMoviesAPI(query, page);
  const resultsData = searchData.results;
  const validData = resultsData.filter(
    (movie) => movie.poster_path && movie.overview,
  );
  totalPagesFromSearch = [];
  totalPagesFromSearch.push(searchData.total_pages);
  renderPreviewCards(validData);
}
