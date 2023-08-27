import * as animations from "./bubbleAnimations.js";

function bubble(buttonInfo: buttonInfo[], classes: classes) {
  const menu = document.createElement("ul");
  const backdrop = classes.backdrop
    ? menu.appendChild(createBackdrop(classes.backdrop))
    : menu.appendChild(createBackdrop());

  const renderedItems = buttonInfo.map((info) => {
    return createButton(menu, info, classes.buttons);
  });

  menu.appendChild(toggle(renderedItems, backdrop, classes.toggleButton));

  menu.classList.add(
    "fixed",
    "bottom-5",
    "right-5",
    "flex",
    "flex-col",
    "gap-3"
  );
  if (classes.menu) menu.classList.add(...classes.menu);
  return menu;
}

const hiddenClasses = ["hidden", "opacity-0"];

function collapse(
  toggleButton: HTMLButtonElement,
  menuItems: HTMLLIElement[],
  backdrop: HTMLDivElement,
  lines: HTMLHRElement[]
) {
  toggleButton.ariaExpanded = "false";
  animations.animateHamburger(lines);
  menuItems.forEach((item) => {
    animations.fadeOut(
      item,
      menuItems.indexOf(item),
      menuItems.length,
      hiddenClasses
    );
  });
  animations.backdropAnimation(backdrop, "collapse");
}

function createBackdrop(classes?: string[]) {
  const backdrop = document.createElement("div");
  backdrop.classList.add(
    "absolute",
    "bottom-[-5vh]",
    "right-[-5vh]",
    "rounded-full",
    "h-[1vw]",
    "w-[1vw]",
    "transition-all",
    "z-30",
    "hidden"
  );
  if (classes) backdrop.classList.add(...classes);

  return backdrop;
}

function createButton(
  menu: HTMLUListElement,
  info: buttonInfo,
  buttonClasses?: string[],
  textClasses?: string[]
) {
  const item = document.createElement("li");

  const button = document.createElement("button");
  button.classList.add("rounded-full");
  if (buttonClasses) button.classList.add(...buttonClasses);
  if (info.buttonClasses) button.classList.add(...info.buttonClasses);

  const text = document.createElement("p");
  text.innerText = info.text;
  if (textClasses) text.classList.add(...textClasses);
  if (info.textClasses) text.classList.add(...info.textClasses);

  item.append(text, button);
  item.classList.add(
    "relative",
    "flex",
    "justify-end",
    "items-center",
    "gap-3",
    "p-[1vh]",
    "origin-right",
    "z-50",
    ...hiddenClasses
  );
  menu.appendChild(item);

  return item;
}

async function expand(
  toggleButton: HTMLButtonElement,
  menuItems: HTMLLIElement[],
  backdrop: HTMLDivElement,
  lines: HTMLHRElement[]
) {
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
  line.classList.add("border", "w-1/2", "origin-center");
  return line;
}

function toggle(
  menuItems: HTMLLIElement[],
  backdrop: HTMLDivElement,
  classes: string[]
) {
  const toggleContainer = document.createElement("li");
  const toggleButton = document.createElement("button");
  toggleButton.ariaExpanded = "false";
  const lines = [line(), line(), line()];
  toggleButton.append(...lines);

  toggleButton.classList.add(
    "rounded-full",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-[1vh]",
    "z-40",
    ...classes
  );
  toggleButton.addEventListener("click", () => {
    if (toggleButton.ariaExpanded === "false") {
      expand(toggleButton, menuItems, backdrop, lines);
    } else {
      collapse(toggleButton, menuItems, backdrop, lines);
    }
  });
  toggleContainer.appendChild(toggleButton);
  toggleContainer.classList.add("flex", "justify-end");

  return toggleContainer;
}

export { bubble };
