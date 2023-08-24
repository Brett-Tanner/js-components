export const animations = {
    slideDown: [
        { opacity: 0, transform: "translateY(-10px)" },
        { opacity: 1, transform: "translateY(0px)" },
    ],
    slideRight: [
        { opacity: 0, transform: "translateX(-30px)" },
        { opacity: 1, transform: "translateX(0px)" },
    ],
    expandDown: [
        { opacity: 0, transform: "scaleY(0.3)" },
        { opacity: 1, transform: "scaleY(1)" },
    ],
    expandRight: [
        { opacity: 0, transform: "scaleX(0.3)" },
        { opacity: 1, transform: "scaleX(1)" },
    ],
};
export function calcOffset(index, staggerTime, duration) {
    return (index * staggerTime) / duration;
}
//# sourceMappingURL=animations.js.map