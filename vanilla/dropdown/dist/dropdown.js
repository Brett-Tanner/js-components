import { animations, calcOffset } from "./animations.js";
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
        addHoverListeners(container, dropdownMenu, renderedItems, animationInfo);
    }
    else {
        addClickListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo);
    }
    container.prepend(titleItem);
    container.classList.add(...classes.containerClasses, "relative");
    return container;
}
function addHoverListeners(container, dropdownMenu, renderedItems, animationInfo) {
    if (animationInfo.individual) {
        container.addEventListener("mouseenter", () => {
            document.querySelectorAll(".dropdownItem").forEach((item) => {
                item.classList.add(...hiddenClasses);
            });
            renderedItems.forEach((item) => {
                item.classList.remove(...hiddenClasses);
                const keyframes = animations[animationInfo.name];
                keyframes[0].offset = calcOffset(renderedItems.indexOf(item), animationInfo.duration / renderedItems.length, animationInfo.duration);
                item.animate(keyframes, {
                    duration: animationInfo.duration,
                    iterations: 1,
                    easing: animationInfo.easing,
                });
            });
        });
        container.addEventListener("mouseleave", () => {
            renderedItems.forEach((item) => {
                const keyframes = animations[animationInfo.name];
                keyframes[0].offset = calcOffset(renderedItems.indexOf(item), animationInfo.duration / renderedItems.length, animationInfo.duration);
                const animation = item.animate(keyframes, {
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
    else {
        container.addEventListener("mouseenter", () => {
            dropdownMenu.animate(animations[animationInfo.name], {
                duration: animationInfo.duration,
                iterations: 1,
                easing: animationInfo.easing,
            });
            renderedItems.forEach((item) => {
                item.classList.remove(...hiddenClasses);
            });
        });
        container.addEventListener("mouseleave", () => {
            const animation = dropdownMenu.animate(animations[animationInfo.name], {
                duration: animationInfo.duration,
                iterations: 1,
            });
            animation.reverse();
            renderedItems.forEach((item) => {
                animation.addEventListener("finish", () => {
                    item.classList.add(...hiddenClasses);
                });
            });
        });
    }
}
function addClickListeners(container, dropdownMenu, titleItem, renderedItems, animationInfo) {
    if (animationInfo.individual) {
        titleItem.addEventListener("click", (e) => {
            e.preventDefault();
            renderedItems.forEach((item) => {
                if (item.classList.contains("hidden")) {
                    item.classList.remove(...hiddenClasses);
                    const keyframes = animations[animationInfo.name];
                    keyframes[0].offset = calcOffset(renderedItems.indexOf(item), animationInfo.duration / renderedItems.length, animationInfo.duration);
                    item.animate(keyframes, {
                        duration: animationInfo.duration,
                        iterations: 1,
                        easing: animationInfo.easing,
                    });
                }
                else {
                    const keyframes = animations[animationInfo.name];
                    keyframes[0].offset = calcOffset(renderedItems.indexOf(item), animationInfo.duration / renderedItems.length, animationInfo.duration);
                    const animation = item.animate(keyframes, {
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
    else {
        titleItem.addEventListener("click", (e) => {
            e.preventDefault();
            if (renderedItems[0].classList.contains("hidden")) {
                dropdownMenu.animate(animations[animationInfo.name], {
                    duration: animationInfo.duration,
                    iterations: 1,
                    easing: animationInfo.easing,
                });
                renderedItems.forEach((item) => {
                    item.classList.remove(...hiddenClasses);
                });
            }
            else {
                const animation = dropdownMenu.animate(animations[animationInfo.name], {
                    duration: animationInfo.duration,
                    iterations: 1,
                });
                animation.reverse();
                animation.addEventListener("finish", () => {
                    renderedItems.forEach((item) => {
                        item.classList.add(...hiddenClasses);
                    });
                });
            }
        });
        document.addEventListener("click", (e) => {
            if ((e.target instanceof HTMLLIElement ||
                e.target instanceof HTMLUListElement) &&
                !container.contains(e.target)) {
                reverseAnimation(dropdownMenu, animationInfo);
            }
        });
    }
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