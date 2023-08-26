function bubble(buttons: buttonInfo[], classes: classes) {
  const menu = document.createElement("ul");
  const expandToggle = toggle(classes.toggleButton);
  menu.appendChild(expandToggle);

  menu.classList.add(...classes.container);
  return menu;
}

async function animateX(
  toggleButton: HTMLButtonElement,
  lines: HTMLHRElement[]
) {
  toggleButton.ariaExpanded = "true";
  const lineAnimations = [
    lines[0].animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(5px) rotate(0)" },
        { transform: "translateY(5px) rotate(45deg)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
    lines[1].animate([{ opacity: 0 }], { duration: 300, fill: "forwards" }),
    lines[2].animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(-5px) rotate(0)" },
        { transform: "translateY(-5px) rotate(-45deg)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
  ];

  await Promise.all([
    lineAnimations[0].finished,
    lineAnimations[1].finished,
    lineAnimations[2].finished,
  ]);

  lineAnimations.forEach((animation) => {
    animation.commitStyles();
  });
}

async function animateHamburger(
  toggleButton: HTMLButtonElement,
  lines: HTMLHRElement[]
) {
  toggleButton.ariaExpanded = "false";

  const lineAnimations = [
    lines[0].animate(
      [
        { transform: "translateY(5px) rotate(45deg)" },
        { transform: "translateY(5px) rotate(0)" },
        { transform: "translateY(0) rotate(0)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
    lines[1].animate([{ opacity: 1 }], { duration: 300, fill: "forwards" }),
    lines[2].animate(
      [
        { transform: "translateY(-5px) rotate(-45deg)" },
        { transform: "translateY(-5px) rotate(0)" },
        { transform: "translateY(0) rotate(0)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
  ];

  await Promise.all([
    lineAnimations[0].finished,
    lineAnimations[1].finished,
    lineAnimations[2].finished,
  ]);

  lineAnimations.forEach((animation) => {
    animation.commitStyles();
  });
}

function line() {
  const line = document.createElement("hr");
  line.classList.add("border", "w-1/2");
  return line;
}

function toggle(classes: string[]) {
  const toggleContainer = document.createElement("li");
  const toggleButton = document.createElement("button");
  toggleButton.ariaExpanded = "false";
  const lines = [line(), line(), line()];
  toggleButton.append(...lines);

  toggleButton.classList.add(
    "bg-cyan-600",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-1",
    ...classes
  );
  toggleButton.addEventListener("click", () => {
    if (toggleButton.ariaExpanded === "false") {
      animateX(toggleButton, lines);
    } else {
      animateHamburger(toggleButton, lines);
    }
  });
  toggleContainer.appendChild(toggleButton);

  return toggleContainer;
}

export { bubble };
