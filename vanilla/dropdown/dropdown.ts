function dropdown(
  titleInfo: titleInfo,
  hoverable: boolean,
  animation: string,
  items: itemInfo[],
  classes: dropdownComponentClasses
) {
  const container = document.createElement("ul");

  const dropdownMenu = document.createElement("ul");
  const renderedItems = items.map((item) => {
    const renderedItem = listItem(item, classes.itemClasses);
    dropdownMenu.appendChild(renderedItem);

    return renderedItem;
  });
  dropdownMenu.classList.add("absolute", "w-full", ...classes.dropdownClasses);
  container.appendChild(dropdownMenu);

  const titleItem = heading(titleInfo, classes.headingClasses);
  if (hoverable) {
    addHoverListeners(container, renderedItems);
  } else {
    addClickListeners(container, titleItem, renderedItems);
  }
  container.prepend(titleItem);

  container.classList.add(...classes.containerClasses, "relative");
  return container;
}

function addHoverListeners(
  container: HTMLUListElement,
  renderedItems: HTMLLIElement[]
) {
  // When hovered, hide ALL dropdown items then reveal children
  container.addEventListener("mouseenter", () => {
    document.querySelectorAll(".dropdownItem").forEach((item) => {
      item.classList.add("hidden", "opacity-0");
    });
    renderedItems.forEach((item) => {
      item.classList.remove("hidden", "opacity-0");
    });
  });
  // When the mouse leaves the container, hide all children
  container.addEventListener("mouseleave", () => {
    renderedItems.forEach((item) => {
      item.classList.add("hidden", "opacity-0");
    });
  });
}

function addClickListeners(
  container: HTMLUListElement,
  titleItem: HTMLLIElement,
  renderedItems: HTMLLIElement[]
) {
  titleItem.addEventListener("click", (e) => {
    // Since we need to click the title to open, it can't work as a link
    e.preventDefault();
    renderedItems.forEach((item) => {
      item.classList.toggle("hidden");
      item.classList.toggle("opacity-0");
    });
  });
  // Automatically close the dropdown when user clicks outside it
  document.addEventListener("click", (e) => {
    if (e.target instanceof Node && !container.contains(e.target)) {
      renderedItems.forEach((item) => {
        item.classList.add("hidden", "opacity-0");
      });
    }
  });
}

function heading(titleInfo: titleInfo, classes: string[]) {
  const titleItem = document.createElement("li");
  const heading = document.createElement("a");
  heading.href = titleInfo.href;
  heading.innerText = titleInfo.text;

  titleItem.classList.add(...classes);
  titleItem.appendChild(heading);

  return titleItem;
}

function listItem(item: itemInfo, classes: string[]) {
  const li = document.createElement("li");
  const element = document.createElement(item.elementType);
  element.innerText = item.text;
  if (element instanceof HTMLAnchorElement) element.href = "";
  li.classList.add(...classes, "hidden", "opacity-0", "z-10", "dropdownItem");
  li.appendChild(element);

  return li;
}

export { dropdown };
