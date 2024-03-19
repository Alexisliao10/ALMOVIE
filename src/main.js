import * as nodes from "./utilities/nodes.js";
import { mainLoadingSkeleton } from "./pages/loading.js";
import { handleScroll } from "./utilities/infiniteScroll.js";
import "./pages/aside.js";

location.hash = "#home";
mainLoadingSkeleton();

export const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      const url = element.target.getAttribute("data-img");
      element.target.setAttribute("src", url);
    }
  });
});

window.addEventListener("scroll", handleScroll, { passive: false });

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
