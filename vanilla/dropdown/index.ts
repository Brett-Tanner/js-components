import { dropdown } from "./dropdown.js";

const nav = document.createElement("nav");
const itemClasses = [
  "text-gray-100",
  "hover:text-white",
  "bg-cyan-800",
  "hover:bg-cyan-700",
  "p-3",
];

nav.appendChild(
  dropdown(
    {
      text: "One of Each",
      href: "",
      toggleWidget: "hamburger",
    },
    false,
    { name: "slideDown", individual: false, duration: 300, easing: "ease-out" },
    [
      { text: "Link", elementType: "a" },
      { text: "Button", elementType: "button" },
      { text: "Just text", elementType: "p" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: [
        "text-center",
        "text-3xl",
        "text-gray-100",
        "hover:text-white",
      ],
      itemClasses: [...itemClasses],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Links",
      href: "",
      toggleWidget: "hamburger",
    },
    true,
    { name: "slideRight", individual: false, duration: 300, easing: "ease-in" },
    [
      { text: "Link", elementType: "a" },
      { text: "Button", elementType: "a" },
      { text: "Just text", elementType: "a" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: [...itemClasses],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Buttons",
      href: "",
      toggleWidget: "hamburger",
    },
    false,
    { name: "expandDown", individual: true, duration: 300, easing: "ease-in" },
    [
      { text: "Button 1", elementType: "button" },
      { text: "Button 2", elementType: "button" },
      { text: "Button 3", elementType: "button" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: [...itemClasses, "origin-top"],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Text",
      href: "",
      toggleWidget: "hamburger",
    },
    true,
    {
      name: "expandRight",
      individual: true,
      duration: 300,
      easing: "ease-out",
    },
    [
      { text: "Link", elementType: "p" },
      { text: "Button", elementType: "p" },
      { text: "Just text", elementType: "p" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: [...itemClasses, "origin-left"],
    }
  )
);

nav.classList.add("flex", "justify-around", "p-3", "bg-cyan-800");
document.body.appendChild(nav);
