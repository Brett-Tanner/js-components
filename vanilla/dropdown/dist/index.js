import { dropdown } from "./dropdown.js";
const nav = document.createElement("nav");
nav.appendChild(dropdown("One of Each", "click", "hamburger", "", [
    { text: "Link", elementType: "a" },
    { text: "Button", elementType: "button" },
    { text: "Just text", elementType: "p" },
], {
    containerClasses: ["grow"],
    dropdownClasses: ["p-3"],
    headingClasses: [
        "text-center",
        "text-3xl",
        "text-gray-100",
        "hover:text-white",
    ],
    itemClasses: [
        "text-gray-100",
        "hover:text-white",
        "bg-cyan-800",
        "hover:bg-cyan-700",
    ],
}));
nav.appendChild(dropdown("All Links", "hover", "hamburger", "", [
    { text: "Link", elementType: "a" },
    { text: "Button", elementType: "a" },
    { text: "Just text", elementType: "a" },
], {
    containerClasses: ["grow"],
    dropdownClasses: ["p-3"],
    headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
    itemClasses: [
        "text-pink-800",
        "hover:text-pink-300",
        "bg-amber-300",
        "hover:bg-amber-200",
    ],
}));
nav.appendChild(dropdown("All Buttons", "click", "hamburger", "", [
    { text: "Button 1", elementType: "button" },
    { text: "Button 2", elementType: "button" },
    { text: "Button 3", elementType: "button" },
], {
    containerClasses: ["grow"],
    dropdownClasses: ["p-3"],
    headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
    itemClasses: ["text-gray-200"],
}));
nav.appendChild(dropdown("All text", "hover", "hamburger", "", [
    { text: "Link", elementType: "p" },
    { text: "Button", elementType: "p" },
    { text: "Just text", elementType: "p" },
], {
    containerClasses: ["grow"],
    dropdownClasses: ["p-3"],
    headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
    itemClasses: ["text-gray-200"],
}));
nav.classList.add("flex", "justify-around", "p-3", "bg-cyan-800");
document.body.appendChild(nav);
//# sourceMappingURL=index.js.map