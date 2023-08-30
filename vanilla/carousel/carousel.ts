let currentImageIndex = 0;

function carousel(imgSources: string[], classes: carouselStyles) {
  const container = document.createElement("div");
  const imgContainer = container.appendChild(
    image(imgSources[currentImageIndex], false)
  );
  container.appendChild(skipBar(imgSources, classes.nav));
  addArrows(container, imgContainer, imgSources);

  container.classList.add(
    "h-screen",
    "flex",
    "flex-wrap",
    "items-center",
    "p-3",
    "gap-3",
    "bg-gray-700"
  );
  if (classes.container) container.classList.add(...classes.container);
  return container;
}

function addArrows(
  container: HTMLDivElement,
  imgContainer: HTMLDivElement,
  imgSources: string[]
) {
  const leftArrow = createArrow("left");
  leftArrow.addEventListener("click", () => {
    move("left", imgContainer, imgSources);
  });
  const rightArrow = createArrow("right");
  rightArrow.addEventListener("click", () => {
    move("right", imgContainer, imgSources);
  });

  container.append(leftArrow, rightArrow);
}

function createArrow(direction: "left" | "right") {
  const arrow = document.createElement("button");

  if (direction === "left") {
    arrow.classList.add("-order-1");
    arrow.innerText = "◀";
  } else if (direction === "right") {
    arrow.classList.add("order-1");
    arrow.innerText = "▶";
  }
  arrow.classList.add("text-slate-400", "text-7xl", "self-stretch");

  return arrow;
}

function image(src: string, thumbnail: boolean) {
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = thumbnail ? src.replace(/images/g, "/images/thumbnails/") : src;
  img.classList.add("h-full", "w-auto");

  console.log(img);

  if (thumbnail) {
    img.width = 100;
    img.height = 100;
  } else {
    img.width = 1500;
    img.height = 1500;
    imgContainer.classList.add(
      "h-5/6",
      "grow",
      "basis-1/2",
      "flex",
      "justify-center",
      "items-center"
    );
  }
  imgContainer.appendChild(img);

  return imgContainer;
}

function move(
  direction: "left" | "right",
  imgContainer: HTMLDivElement,
  imgSources: string[]
) {
  if (direction === "right") {
    if (currentImageIndex + 1 > imgSources.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
  } else {
    if (currentImageIndex - 1 < 0) {
      currentImageIndex = imgSources.length - 1;
    } else {
      currentImageIndex--;
    }
  }
  const newImg = image(imgSources[currentImageIndex], false);
  imgContainer.innerHTML = "";
  imgContainer.appendChild(newImg);
}

function skipBar(imgSources: string[], classes: string[] | undefined) {
  const skipNav = document.createElement("nav");
  imgSources.forEach((src) => {
    skipNav.appendChild(image(src, true));
  });

  skipNav.classList.add(
    "flex",
    "basis-full",
    "order-2",
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
