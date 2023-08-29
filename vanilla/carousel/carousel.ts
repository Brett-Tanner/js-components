function carousel(imgSources: string[], classes: carouselStyles) {
  const container = document.createElement("div");
  imgSources.slice(0, 3).forEach((src) => {
    container.appendChild(image(src, false));
  });
  container.appendChild(skipBar(imgSources, classes.nav));
  addArrows(container);

  container.classList.add(
    "relative",
    "flex",
    "items-center",
    "h-screen",
    "bg-gray-700"
  );
  if (classes.container) container.classList.add(...classes.container);
  return container;
}

function addArrows(container: HTMLDivElement) {
  const leftArrow = createArrow("left");
  const rightArrow = createArrow("right");

  container.append(leftArrow, rightArrow);
}

function createArrow(direction: "left" | "right") {
  const arrow = document.createElement("div");

  const upLine = document.createElement("hr");
  upLine.classList.add("border-4", "w-10");
  if (direction === "left") {
    upLine.classList.add("-rotate-45", "origin-right");
  } else if (direction === "right") {
    upLine.classList.add("rotate-45", "origin-left");
  }

  const downLine = document.createElement("hr");
  downLine.classList.add("border-4", "w-10");
  if (direction === "left") {
    downLine.classList.add("rotate-45", "origin-left");
  } else if (direction === "right") {
    downLine.classList.add("-rotate-45", "origin-right");
  }

  arrow.append(downLine, upLine);
  if (direction === "left") {
    arrow.classList.add("order-1");
  } else if (direction === "right") {
    arrow.classList.add("order-4");
  }
  return arrow;
}

function image(src: string, thumbnail: boolean) {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = thumbnail ? src.replace(/images/g, "/images/thumbnails/") : src;
  img.classList.add("w-100");

  imgContainer.classList.add("w-1/2");
  if (thumbnail) imgContainer.classList.add("z-50");
  imgContainer.appendChild(img);

  return imgContainer;
}

function skipBar(imgSources: string[], classes: string[] | undefined) {
  const skipNav = document.createElement("nav");
  imgSources.forEach((src) => {
    skipNav.appendChild(image(src, true));
  });

  skipNav.classList.add(
    "absolute",
    "bottom-3",
    "right-3",
    "left-3",
    "flex",
    "items-center",
    "gap-1",
    "p-3",
    "rounded-lg",
    "bg-black"
  );
  if (classes) skipNav.classList.add(...classes);
  return skipNav;
}

export { carousel };
