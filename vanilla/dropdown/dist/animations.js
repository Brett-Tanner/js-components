const animations = {
    slideDown: [
        { opacity: 0, transform: "translateY(-10px)" },
        { opacity: 0, transform: "translateY(-10px)" },
        { opacity: 1, transform: "translateY(0px)" },
    ],
    slideRight: [
        { opacity: 0, transform: "translateX(-30px)" },
        { opacity: 0, transform: "translateX(-30px)" },
        { opacity: 1, transform: "translateX(0px)" },
    ],
    expandDown: [
        { opacity: 0, transform: "scaleY(0.3)" },
        { opacity: 0, transform: "scaleY(0.3)" },
        { opacity: 1, transform: "scaleY(1)" },
    ],
    expandRight: [
        { opacity: 1, transform: "scaleX(0)" },
        { opacity: 1, transform: "scaleX(0)" },
        { opacity: 1, transform: "scaleX(1)" },
    ],
};
function addOffset(keyframes, index, staggerTime, duration) {
    keyframes[1].offset = (index * staggerTime) / duration;
}
function animateForward(animationInfo, dropdownMenu, dropdownItems, hiddenClasses) {
    dropdownItems.forEach((item) => {
        item.classList.remove(...hiddenClasses);
    });
    if (animationInfo.individual) {
        dropdownItems.forEach((item) => {
            const keyframes = animations[animationInfo.name];
            addOffset(keyframes, dropdownItems.indexOf(item), animationInfo.duration / dropdownItems.length, animationInfo.duration);
            item.animate(keyframes, {
                duration: animationInfo.duration,
                iterations: 1,
                easing: animationInfo.easing,
            });
        });
    }
    else {
        dropdownMenu.animate(animations[animationInfo.name], {
            duration: animationInfo.duration,
            iterations: 1,
            easing: animationInfo.easing,
        });
    }
}
function animateReverse(animationInfo, dropdownMenu, dropdownItems, hiddenClasses) {
    if (animationInfo.individual) {
        dropdownItems.forEach((item) => {
            const keyframes = animations[animationInfo.name];
            addOffset(keyframes, dropdownItems.indexOf(item), animationInfo.duration / dropdownItems.length, animationInfo.duration);
            const animation = item.animate(keyframes, {
                duration: animationInfo.duration,
                iterations: 1,
            });
            animation.reverse();
            animation.addEventListener("finish", () => {
                item.classList.add(...hiddenClasses);
            });
        });
    }
    else {
        const animation = dropdownMenu.animate(animations[animationInfo.name], {
            duration: animationInfo.duration,
            iterations: 1,
        });
        animation.reverse();
        dropdownItems.forEach((item) => {
            animation.addEventListener("finish", () => {
                item.classList.add(...hiddenClasses);
            });
        });
    }
}
export { animateForward, animateReverse };
//# sourceMappingURL=animations.js.map