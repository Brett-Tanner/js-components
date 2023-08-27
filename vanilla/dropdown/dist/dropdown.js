import { animateForward, animateReverse } from "./animations.js";
const hiddenClasses = ["hidden", "opacity-0"];
function dropdown(titleInfo, hoverable, animationInfo, items, classes) {
    const container = document.createElement("ul");
    const dropdownMenu = document.createElement("ul");
    const renderedItems = items.map((item) => {
        const renderedItem = listItem(item, classes.itemClasses);
        dropdownMenu.appendChild(renderedItem);
        return renderedItem;
    });
    dropdownMenu.classList.add("w-full", ...classes.dropdownClasses, "absolute");
    container.appendChild(dropdownMenu);
    const titleItem = heading(titleInfo, classes.headingClasses);
    if (hoverable) {
        addHoverListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo);
    }
    else {
        addClickListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo);
    }
    container.prepend(titleItem);
    container.classList.add(...classes.containerClasses, "relative");
    return container;
}
function addHoverListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo) {
    container.addEventListener("mouseenter", () => {
        hideOtherDropdowns(container);
        animateForward(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
    });
    container.addEventListener("mouseleave", () => {
        animateReverse(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
    });
}
function addClickListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo) {
    titleItem.addEventListener("click", (e) => {
        e.preventDefault();
        if (titleItem.ariaExpanded == "false") {
            titleItem.ariaExpanded = "true";
            animateForward(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
        }
        else {
            titleItem.ariaExpanded = "false";
            animateReverse(animationInfo, dropdownMenu, renderedItems, hiddenClasses);
        }
    });
    window.addEventListener("click", (e) => {
        autoClose(e, container, titleItem, renderedItems);
    });
}
function autoClose(e, container, titleItem, renderedItems) {
    if (e.target instanceof Node && !container.contains(e.target)) {
        titleItem.ariaExpanded = "false";
        renderedItems.forEach((item) => {
            item.classList.add(...hiddenClasses);
        });
    }
}
function heading(titleInfo, classes) {
    const titleItem = document.createElement("li");
    const heading = document.createElement("a");
    heading.href = titleInfo.href;
    heading.innerText = titleInfo.text;
    titleItem.ariaExpanded = "false";
    titleItem.classList.add(...classes, "dropdownTitle");
    titleItem.appendChild(heading);
    return titleItem;
}
function hideOtherDropdowns(container) {
    [...document.querySelectorAll(".dropdownTitle")]
        .filter((title) => title instanceof HTMLLIElement && !container.contains(title))
        .forEach((title) => {
        title.ariaExpanded = "false";
    });
    [...document.querySelectorAll(".dropdownItem")]
        .filter((item) => item instanceof HTMLLIElement && !container.contains(item))
        .forEach((item) => {
        item.classList.add(...hiddenClasses);
    });
}
function listItem(item, classes) {
    const li = document.createElement("li");
    const element = document.createElement(item.elementType);
    element.innerText = item.text;
    if (element instanceof HTMLAnchorElement)
        element.href = "";
    li.classList.add(...classes, ...hiddenClasses, "z-10", "dropdownItem");
    li.appendChild(element);
    return li;
}
export { dropdown };
//# sourceMappingURL=dropdown.js.map