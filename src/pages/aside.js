import * as node from "../utilities/nodes.js";
import { genresMovieList } from "../utilities/getDataApi.js";

export async function renderCategories() {
  const genres = await genresMovieList;
  genres.forEach((item) => {
    const asideLinkWrapper = document.createElement("li");
    const asideLink = document.createElement("a");
    const asideLinkTagIcon = document.createElement("i");
    asideLinkWrapper.classList.add("fancy-link", "w-fit", "cursor-pointer");
    asideLink.href = `#category=${item.name}-${item.id}`;
    asideLinkWrapper.appendChild(asideLinkTagIcon);
    asideLinkTagIcon.classList.add(
      "fa-solid",
      "fa-tag",
      "mr-1",
      "text-amber-500",
    );
    asideLink.textContent = item.name;

    asideLinkWrapper.appendChild(asideLink);
    node.asideUlWrapper.appendChild(asideLinkWrapper);
  });
}

renderCategories();
