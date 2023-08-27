async function animateHamburger(lines: HTMLHRElement[]) {
  const lineAnimations = [
    lines[0].animate(
      [
        { transform: "translateY(1vh) rotate(45deg)" },
        { transform: "translateY(1vh) rotate(0)" },
        { transform: "translateY(0) rotate(0)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
    lines[1].animate([{ opacity: 1 }], { duration: 300, fill: "forwards" }),
    lines[2].animate(
      [
        { transform: "translateY(-1vh) rotate(-45deg)" },
        { transform: "translateY(-1vh) rotate(0)" },
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

async function animateX(lines: HTMLHRElement[]) {
  const lineAnimations = [
    lines[0].animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(1vh) rotate(0)" },
        { transform: "translateY(1vh) rotate(45deg)" },
      ],
      { duration: 300, fill: "forwards" }
    ),
    lines[1].animate([{ opacity: 0 }], { duration: 300, fill: "forwards" }),
    lines[2].animate(
      [
        { transform: "translateY(0) rotate(0)" },
        { transform: "translateY(-1vh) rotate(0)" },
        { transform: "translateY(-1vh) rotate(-45deg)" },
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

function backdropAnimation(
  backdrop: HTMLDivElement,
  direction: "expand" | "collapse"
) {
  const frames: Keyframe[] = [
    { transform: "scale(0)" },
    { transform: "scale(500)" },
  ];

  if (direction === "expand") {
    backdrop.classList.remove("hidden");
    backdrop.animate(frames, { duration: 300, fill: "forwards" });
  } else {
    const animation = backdrop.animate(frames, {
      duration: 300,
      fill: "forwards",
    });
    animation.reverse();
    animation.addEventListener("finish", () => {
      backdrop.classList.add("hidden");
    });
  }
}

function fadeIn(item: HTMLLIElement, position: number, menuLength: number) {
  const frames: Keyframe[] = [
    { opacity: 0, transform: "scale(0.5)" },
    { opacity: 0, transform: "scale(0.5)" },
    { opacity: 1, transform: "scale(1)" },
  ];
  // Needs to play in reverse order
  const offset = ((300 / menuLength) * (menuLength - position)) / 300;
  frames[1].offset = offset;

  item.animate(frames, {
    duration: 300,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in",
  });
}

function fadeOut(
  item: HTMLLIElement,
  position: number,
  menuLength: number,
  hiddenClasses: string[]
) {
  const frames: Keyframe[] = [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.5)" },
  ];
  const offset = ((300 / menuLength) * position) / 300;
  frames[1].offset = offset;

  const animation = item.animate(frames, {
    duration: 300,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in",
  });
  animation.addEventListener("finish", () => {
    animation.cancel();
    item.classList.add(...hiddenClasses);
  });
}

export { animateHamburger, animateX, backdropAnimation, fadeIn, fadeOut };
