import { dropdown } from "./dropdown.js";

const nav = document.createElement("nav");

nav.appendChild(
  dropdown(
    {
      text: "One of Each",
      href: "",
      toggleWidget: "hamburger",
    },
    false,
    "",
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
      itemClasses: [
        "text-gray-100",
        "hover:text-white",
        "bg-cyan-800",
        "hover:bg-cyan-700",
      ],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Links",
      href: "https://www.google.com",
      toggleWidget: "hamburger",
    },
    true,
    "",
    [
      { text: "Link", elementType: "a" },
      { text: "Button", elementType: "a" },
      { text: "Just text", elementType: "a" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: [
        "text-pink-800",
        "hover:text-pink-300",
        "bg-amber-300",
        "hover:bg-amber-200",
      ],
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
    "",
    [
      { text: "Button 1", elementType: "button" },
      { text: "Button 2", elementType: "button" },
      { text: "Button 3", elementType: "button" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: ["text-gray-200"],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Text",
      href: "https://www.google.com",
      toggleWidget: "hamburger",
    },
    true,
    "",
    [
      { text: "Link", elementType: "p" },
      { text: "Button", elementType: "p" },
      { text: "Just text", elementType: "p" },
    ],
    {
      containerClasses: ["grow"],
      dropdownClasses: ["p-3"],
      headingClasses: ["text-center", "text-3xl", "text-cyan-400"],
      itemClasses: ["text-gray-200"],
    }
  )
);

nav.classList.add("flex", "justify-around", "p-3", "bg-cyan-800");
document.body.appendChild(nav);
