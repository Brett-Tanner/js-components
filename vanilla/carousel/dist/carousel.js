function carousel(imgSources) {
    const container = document.createElement("div");
    imgSources.forEach((src) => {
        container.appendChild(createImage(src));
    });
    return container;
}
function createImage(src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
}
export { carousel };
//# sourceMappingURL=carousel.js.map