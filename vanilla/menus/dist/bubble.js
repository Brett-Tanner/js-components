import * as animations from "./bubbleAnimations.js";
function bubble(buttonInfo, classes) {
    const menu = document.createElement("ul");
    const backdrop = classes.backdrop
        ? document.body.appendChild(createBackdrop(classes.backdrop))
        : document.body.appendChild(createBackdrop());
    const renderedItems = buttonInfo.map((info) => {
        return createButton(menu, info, classes.buttons);
    });
    menu.appendChild(toggle(renderedItems, backdrop, classes.toggleButton));
    menu.classList.add("fixed", "bottom-5", "right-5", "flex", "flex-col", "gap-3");
    if (classes.menu)
        menu.classList.add(...classes.menu);
    return menu;
}
const hiddenClasses = ["hidden", "opacity-0"];
function collapse(toggleButton, menuItems, backdrop, lines) {
    toggleButton.ariaExpanded = "false";
    animations.animateHamburger(lines);
    menuItems.forEach((item) => {
        animations.fadeOut(item, menuItems.indexOf(item), menuItems.length, hiddenClasses);
    });
    animations.backdropAnimation(backdrop, "collapse");
}
function createBackdrop(classes) {
    const backdrop = document.createElement("div");
    backdrop.classList.add("fixed", "bottom-[0]", "right-[0]", "rounded-full", "h-[1vw]", "w-[1vw]", "transition-all", "hidden");
    if (classes)
        backdrop.classList.add(...classes);
    return backdrop;
}
function createButton(menu, info, buttonClasses, textClasses) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const img = document.createElement("img");
    img.src = info.imageSrc;
    button.appendChild(img);
    button.classList.add("rounded-full", "flex", "justify-center", "items-center");
    if (buttonClasses)
        button.classList.add(...buttonClasses);
    if (info.buttonClasses)
        button.classList.add(...info.buttonClasses);
    const text = document.createElement("p");
    text.innerText = info.text;
    text.classList.add("p-1", "rounded");
    if (textClasses)
        text.classList.add(...textClasses);
    if (info.textClasses)
        text.classList.add(...info.textClasses);
    item.append(text, button);
    item.classList.add("flex", "justify-end", "items-center", "gap-3", "p-[1vh]", "origin-right", "hover:scale-110", "transition-all", ...hiddenClasses);
    item.addEventListener("click", () => {
        info.action();
    });
    menu.appendChild(item);
    return item;
}
function expand(toggleButton, menuItems, backdrop, lines) {
    toggleButton.ariaExpanded = "true";
    animations.animateX(lines);
    menuItems.forEach((item) => {
        item.classList.remove(...hiddenClasses);
        animations.fadeIn(item, menuItems.indexOf(item), menuItems.length);
        animations.backdropAnimation(backdrop, "expand");
    });
}
function line() {
    const line = document.createElement("hr");
    line.classList.add("border-[0.2vh]", "w-1/2", "origin-center");
    return line;
}
function toggle(menuItems, backdrop, classes) {
    const toggleContainer = document.createElement("li");
    const toggleButton = document.createElement("button");
    toggleButton.ariaExpanded = "false";
    const lines = [line(), line(), line()];
    toggleButton.append(...lines);
    toggleButton.classList.add("rounded-full", "flex", "flex-col", "justify-center", "items-center", "gap-[1vh]", ...classes);
    toggleButton.addEventListener("click", () => {
        if (toggleButton.ariaExpanded === "false") {
            expand(toggleButton, menuItems, backdrop, lines);
        }
        else {
            collapse(toggleButton, menuItems, backdrop, lines);
        }
    });
    toggleContainer.appendChild(toggleButton);
    toggleContainer.classList.add("flex", "justify-end");
    return toggleContainer;
}
export { bubble };
//# sourceMappingURL=bubble.js.map