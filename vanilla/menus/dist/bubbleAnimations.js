var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function animateHamburger(lines) {
    return __awaiter(this, void 0, void 0, function* () {
        const lineAnimations = [
            lines[0].animate([
                { transform: "translateY(1vh) rotate(45deg)" },
                { transform: "translateY(1vh) rotate(0)" },
                { transform: "translateY(0) rotate(0)" },
            ], { duration: 300, fill: "forwards" }),
            lines[1].animate([{ opacity: 1 }], { duration: 300, fill: "forwards" }),
            lines[2].animate([
                { transform: "translateY(-1vh) rotate(-45deg)" },
                { transform: "translateY(-1vh) rotate(0)" },
                { transform: "translateY(0) rotate(0)" },
            ], { duration: 300, fill: "forwards" }),
        ];
        yield Promise.all([
            lineAnimations[0].finished,
            lineAnimations[1].finished,
            lineAnimations[2].finished,
        ]);
        lineAnimations.forEach((animation) => {
            animation.commitStyles();
        });
    });
}
function animateX(lines) {
    return __awaiter(this, void 0, void 0, function* () {
        const lineAnimations = [
            lines[0].animate([
                { transform: "translateY(0) rotate(0)" },
                { transform: "translateY(1.3vh) rotate(0)" },
                { transform: "translateY(1.3vh) rotate(45deg)" },
            ], { duration: 300, fill: "forwards" }),
            lines[1].animate([{ opacity: 0 }], { duration: 300, fill: "forwards" }),
            lines[2].animate([
                { transform: "translateY(0) rotate(0)" },
                { transform: "translateY(-1.3vh) rotate(0)" },
                { transform: "translateY(-1.3vh) rotate(-45deg)" },
            ], { duration: 300, fill: "forwards" }),
        ];
        yield Promise.all([
            lineAnimations[0].finished,
            lineAnimations[1].finished,
            lineAnimations[2].finished,
        ]);
        lineAnimations.forEach((animation) => {
            animation.commitStyles();
        });
    });
}
function backdropAnimation(backdrop, direction) {
    const frames = [
        { transform: "scale(0)" },
        { transform: "scale(500)" },
    ];
    if (direction === "expand") {
        backdrop.classList.remove("hidden");
        backdrop.animate(frames, { duration: 500, fill: "forwards" });
    }
    else {
        const animation = backdrop.animate(frames, {
            duration: 500,
            fill: "forwards",
        });
        animation.reverse();
        animation.addEventListener("finish", () => {
            backdrop.classList.add("hidden");
        });
    }
}
function fadeIn(item, position, menuLength) {
    const frames = [
        { opacity: 0, transform: "scale(0.5)" },
        { opacity: 0, transform: "scale(0.5)" },
        { opacity: 1, transform: "scale(1)" },
    ];
    const offset = ((300 / menuLength) * (menuLength - position)) / 300;
    frames[1].offset = offset;
    item.animate(frames, {
        duration: 300,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in",
    });
}
function fadeOut(item, position, menuLength, hiddenClasses) {
    const frames = [
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
//# sourceMappingURL=bubbleAnimations.js.map