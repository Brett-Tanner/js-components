import { animations } from "./animations.js";
const hiddenClasses = ["hidden", "opacity-0"];
function dropdown(titleInfo, hoverable, animationInfo, items, classes) {
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
        addHoverListeners(container, renderedItems, animationInfo);
    }
    else {
        addClickListeners(container, titleItem, renderedItems, animationInfo);
    }
    container.prepend(titleItem);
    container.classList.add(...classes.containerClasses, "relative");
    return container;
}
function addHoverListeners(container, renderedItems, animationInfo) {
    container.addEventListener("mouseenter", () => {
        document.querySelectorAll(".dropdownItem").forEach((item) => {
            item.classList.add(...hiddenClasses);
        });
        renderedItems.forEach((item) => {
            item.classList.remove(...hiddenClasses);
            item.animate(animations[animationInfo.name], 300);
        });
    });
    container.addEventListener("mouseleave", () => {
        renderedItems.forEach((item) => {
            const animation = item.animate(animations[animationInfo.name], {
                duration: animationInfo.duration,
                iterations: 1,
            });
            animation.reverse();
            animation.addEventListener("finish", () => {
                item.classList.add(...hiddenClasses);
            });
        });
    });
}
function addClickListeners(container, titleItem, renderedItems, animationInfo) {
    titleItem.addEventListener("click", (e) => {
        e.preventDefault();
        renderedItems.forEach((item) => {
            if (item.classList.contains("hidden")) {
                item.classList.remove(...hiddenClasses);
                item.animate(animations[animationInfo.name], 300);
            }
            else {
                const animation = item.animate(animations[animationInfo.name], {
                    duration: animationInfo.duration,
                    iterations: 1,
                });
                animation.reverse();
                animation.addEventListener("finish", () => {
                    item.classList.add(...hiddenClasses);
                });
            }
        });
    });
    document.addEventListener("click", (e) => {
        if (e.target instanceof HTMLLIElement && !container.contains(e.target)) {
            renderedItems.forEach((item) => {
                reverseAnimation(item, animationInfo);
            });
        }
    });
}
function heading(titleInfo, classes) {
    const titleItem = document.createElement("li");
    const heading = document.createElement("a");
    heading.href = titleInfo.href;
    heading.innerText = titleInfo.text;
    titleItem.classList.add(...classes);
    titleItem.appendChild(heading);
    return titleItem;
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
function reverseAnimation(item, animationInfo) {
    const animation = item.animate(animations[animationInfo.name], {
        duration: animationInfo.duration,
        iterations: 1,
    });
    animation.reverse();
    animation.addEventListener("finish", () => {
        item.classList.add(...hiddenClasses);
    });
}
export { dropdown };
//# sourceMappingURL=dropdown.js.map