var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function bubble(buttons, classes) {
    const menu = document.createElement("ul");
    const expandToggle = toggle(classes.toggleButton);
    menu.appendChild(expandToggle);
    menu.classList.add(...classes.container);
    return menu;
}
function animateX(toggleButton, lines) {
    return __awaiter(this, void 0, void 0, function* () {
        toggleButton.ariaExpanded = "true";
        const lineAnimations = [
            lines[0].animate([
                { transform: "translateY(0) rotate(0)" },
                { transform: "translateY(5px) rotate(0)" },
                { transform: "translateY(5px) rotate(45deg)" },
            ], { duration: 300, fill: "forwards" }),
            lines[1].animate([{ opacity: 0 }], { duration: 300, fill: "forwards" }),
            lines[2].animate([
                { transform: "translateY(0) rotate(0)" },
                { transform: "translateY(-5px) rotate(0)" },
                { transform: "translateY(-5px) rotate(-45deg)" },
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
function animateHamburger(toggleButton, lines) {
    return __awaiter(this, void 0, void 0, function* () {
        toggleButton.ariaExpanded = "false";
        const lineAnimations = [
            lines[0].animate([
                { transform: "translateY(5px) rotate(45deg)" },
                { transform: "translateY(5px) rotate(0)" },
                { transform: "translateY(0) rotate(0)" },
            ], { duration: 300, fill: "forwards" }),
            lines[1].animate([{ opacity: 1 }], { duration: 300, fill: "forwards" }),
            lines[2].animate([
                { transform: "translateY(-5px) rotate(-45deg)" },
                { transform: "translateY(-5px) rotate(0)" },
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
function line() {
    const line = document.createElement("hr");
    line.classList.add("border", "w-1/2");
    return line;
}
function toggle(classes) {
    const toggleContainer = document.createElement("li");
    const toggleButton = document.createElement("button");
    toggleButton.ariaExpanded = "false";
    const lines = [line(), line(), line()];
    toggleButton.append(...lines);
    toggleButton.classList.add("bg-cyan-600", "flex", "flex-col", "justify-center", "items-center", "gap-1", ...classes);
    toggleButton.addEventListener("click", () => {
        if (toggleButton.ariaExpanded === "false") {
            animateX(toggleButton, lines);
        }
        else {
            animateHamburger(toggleButton, lines);
        }
    });
    toggleContainer.appendChild(toggleButton);
    return toggleContainer;
}
export { bubble };
//# sourceMappingURL=bubble.js.map