import * as node from "../utilities/nodes.js";

export function mainLoadingSkeleton() {
  const card = document.createElement("div");
  const text = document.createElement("div");

  card.classList.add(
    "animate-pulse",
    "relative",
    "mb-9",
    "h-[250px]",
    "w-[150px]",
    "max-w-xs",
    "rounded-lg",
    "bg-[#6b7280]/[0.5]",
  );
  text.classList.add(
    "animate-pulse",
    "absolute",
    "-bottom-8",
    "left-7",
    "h-5",
    "w-24",
    "rounded-lg",
    "bg-[#6b7280]/[0.5]",
  );
  card.append(text);

  for (let i = 0; i < 4; i++) {
    const clonedCard = card.cloneNode(true);
    node.articleContainer.append(clonedCard);
  }
}
