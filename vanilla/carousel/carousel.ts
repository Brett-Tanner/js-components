function carousel(imgSources: string[]) {
  const container = document.createElement("div");
  imgSources.forEach((src) => {
    container.appendChild(createImage(src));
  });

  return container;
}

function createImage(src: string) {
  const img = document.createElement("img");
  img.src = src;

  return img;
}

export { carousel };
