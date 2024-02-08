import { navigate } from "./utilities/navigation.js";
import * as nodes from "./utilities/nodes.js";
import { mainLoadingSkeleton } from "./pages/loading.js";

location.hash = "#home";
mainLoadingSkeleton();

window.addEventListener("load", navigate);
window.addEventListener("hashchange", navigate);

nodes.hamMenu.addEventListener("click", toggleHamMenuView);
function toggleHamMenuView() {
  nodes.hamIcon.classList.toggle("hidden");
  nodes.quitIcon.classList.toggle("hidden");
  nodes.menu.classList.toggle("translate-y-0");
  nodes.divContainer.classList.toggle("h-52");
  nodes.divContainer.classList.toggle("h-12");
  nodes.inputContainer.classList.toggle("translate-y-40");
  nodes.sectionTrending.classList.toggle("opacity-50");
}
function closeHamMenu() {
  if (!nodes.hamIcon.classList.contains("hidden")) {
    return;
  }
  toggleHamMenuView();
}
function addSearchLocation() {
  const query = nodes.searchFormInput.value;
  if (query) {
    location.hash = "#search=" + nodes.searchFormInput.value;
  }
}
nodes.moviesContainer.addEventListener("click", closeHamMenu);
nodes.navHome.addEventListener("click", closeHamMenu);
nodes.navSeries.addEventListener("click", closeHamMenu);
nodes.navMovies.addEventListener("click", closeHamMenu);
nodes.navNewRelease.addEventListener("click", closeHamMenu);
nodes.searchBtn.addEventListener("click", addSearchLocation);
nodes.searchFormInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addSearchLocation();
  }
});
