function listItem(item, classes) {
    const li = document.createElement("li");
    const element = document.createElement(item.elementType);
    element.innerText = item.text;
    if (element instanceof HTMLAnchorElement)
        element.href = "";
    li.classList.add(...classes, "hidden", "opacity-0", "z-10");
    li.appendChild(element);
    return li;
}
function dropdown(title, toggleMethod, toggleWidget, animation, items, classes) {
    const container = document.createElement("ul");
    const dropdownMenu = document.createElement("ul");
    const renderedItems = items.map((item) => {
        const renderedItem = listItem(item, classes.itemClasses);
        dropdownMenu.appendChild(renderedItem);
        return renderedItem;
    });
    dropdownMenu.classList.add("absolute", "w-full", ...classes.dropdownClasses);
    container.appendChild(dropdownMenu);
    const titleItem = heading(title, toggleWidget, classes.headingClasses);
    container.prepend(titleItem);
    if (toggleMethod === "click") {
        titleItem.addEventListener("click", (e) => {
            e.preventDefault();
            renderedItems.forEach((item) => {
                item.classList.toggle("hidden");
                item.classList.toggle("opacity-0");
            });
        });
    }
    else {
        titleItem.addEventListener("click", (e) => {
            e.preventDefault();
        });
        container.addEventListener("mouseenter", () => {
            renderedItems.forEach((item) => {
                item.classList.remove("hidden", "opacity-0");
            });
        });
        container.addEventListener("mouseleave", () => {
            renderedItems.forEach((item) => {
                item.classList.add("hidden", "opacity-0");
            });
        });
    }
    container.classList.add(...classes.containerClasses, "relative");
    return container;
}
function heading(text, toggleWidget, classes) {
    const titleItem = document.createElement("li");
    const heading = document.createElement("a");
    heading.href = "";
    heading.innerText = text;
    titleItem.classList.add(...classes);
    titleItem.appendChild(heading);
    return titleItem;
}
export { dropdown };
//# sourceMappingURL=dropdown.js.map