import * as node from "../utilities/nodes.js";
import { trendMoviesByPage } from "../utilities/getDataApi.js";
import renderPreviewCards from "../utilities/renderCards.js";

export function homeLayout() {
  node.moviesContainer.classList.remove("hidden");
  node.moviesContainerTitle.classList.remove("hidden");
  node.moreDetailsView.classList.add("hidden");
  node.inputContainer.classList.remove("hidden");
  node.divContainer.classList.add("h-12");
  node.sectionTitle.textContent = "Trending Movies";
}

export async function loadMoreTrending(page) {
  const resByPage = await trendMoviesByPage(page);
  const data = resByPage.results;
  renderPreviewCards(data, { clean: false });
}
