import { animateForward, animateReverse } from "./animations.js";

const hiddenClasses = ["hidden", "opacity-0"];

function dropdown(
  titleInfo: titleInfo,
  hoverable: boolean,
  animationInfo: animationInfo,
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
  // Absolute is necessary for menu positioning, so last
  dropdownMenu.classList.add("w-full", ...classes.dropdownClasses, "absolute");
  container.appendChild(dropdownMenu);

  const titleItem = heading(titleInfo, classes.headingClasses);
  if (hoverable) {
    addHoverListeners(
      container,
      dropdownMenu,
      titleItem,
      renderedItems,
      animationInfo
    );
  } else {
    addClickListeners(
      container,
      dropdownMenu,
      titleItem,
      renderedItems,
      animationInfo
    );
  }
  container.prepend(titleItem);

  // Relative is necessary for menu positioning, so last
  container.classList.add(...classes.containerClasses, "relative");
  return container;
}

function addHoverListeners(
  container: HTMLUListElement,
  dropdownMenu: HTMLUListElement,
  titleItem: HTMLLIElement,
  renderedItems: HTMLLIElement[],
  animationInfo: animationInfo
) {
  container.addEventListener("mouseenter", () => {
    hideOtherDropdowns(container);
    animateForward(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
  });
  container.addEventListener("mouseleave", () => {
    animateReverse(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
  });
}

function addClickListeners(
  container: HTMLUListElement,
  dropdownMenu: HTMLUListElement,
  titleItem: HTMLLIElement,
  renderedItems: HTMLLIElement[],
  animationInfo: animationInfo
) {
  titleItem.addEventListener("click", (e) => {
    // Since we need to click the title to open, it can't work as a link
    e.preventDefault();
    if (titleItem.ariaExpanded == "false") {
      titleItem.ariaExpanded = "true";
      animateForward(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
    } else {
      titleItem.ariaExpanded = "false";
      animateReverse(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
    }
  });
  // Automatically close the dropdown when user clicks outside it
  window.addEventListener("click", (e) => {
    autoClose(e, container, titleItem, renderedItems);
  });
}

function autoClose(
  e: Event,
  container: HTMLUListElement,
  titleItem: HTMLLIElement,
  renderedItems: HTMLLIElement[]
) {
  if (e.target instanceof Node && !container.contains(e.target)) {
    titleItem.ariaExpanded = "false";
    renderedItems.forEach((item) => {
      item.classList.add(...hiddenClasses);
    });
  }
}

function heading(titleInfo: titleInfo, classes: string[]) {
  const titleItem = document.createElement("li");
  const heading = document.createElement("a");
  heading.href = titleInfo.href;
  heading.innerText = titleInfo.text;

  titleItem.ariaExpanded = "false";
  titleItem.classList.add(...classes, "dropdownTitle");
  titleItem.appendChild(heading);

  return titleItem;
}

function hideOtherDropdowns(container: HTMLUListElement) {
  // Toggle ariaExpanded on all other dropdowns to false
  [...document.querySelectorAll(".dropdownTitle")]
    .filter(
      (title) => title instanceof HTMLLIElement && !container.contains(title)
    )
    .forEach((title) => {
      title.ariaExpanded = "false";
    });
  // Get all dropdownItems (not in current dropdown) and hide them
  [...document.querySelectorAll(".dropdownItem")]
    .filter(
      (item) => item instanceof HTMLLIElement && !container.contains(item)
    )
    .forEach((item) => {
      item.classList.add(...hiddenClasses);
    });
}

function listItem(item: itemInfo, classes: string[]) {
  const li = document.createElement("li");
  const element = document.createElement(item.elementType);
  element.innerText = item.text;
  if (element instanceof HTMLAnchorElement) element.href = "";

  li.classList.add(...classes, ...hiddenClasses, "z-10", "dropdownItem");
  li.appendChild(element);

  return li;
}

export { dropdown };
