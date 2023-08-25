import { dropdown } from "./dropdown.js";

const nav = document.createElement("nav");
const headingClasses = ["text-center", "text-3xl", "text-cyan-400"];
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
      headingClasses: [...headingClasses],
      itemClasses: [...itemClasses],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Links",
      href: "",
    },
    true,
    { name: "slideRight", individual: false, duration: 300, easing: "ease-in" },
    [
      { text: "Link", elementType: "a" },
      { text: "Button", elementType: "a" },
      { text: "Just text", elementType: "a" },
    ],
    {
      containerClasses: ["grow", "group"],
      dropdownClasses: ["p-3"],
      headingClasses: [
        ...headingClasses,
        "relative",
        "after:absolute",
        "after:ml-3",
        "after:content-['▼']",
        "group-hover:after:-rotate-90",
        "after:transition-all",
        "after:duration-300",
        "after:ease-in",
      ],
      itemClasses: [...itemClasses],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Buttons",
      href: "",
    },
    false,
    {
      name: "expandDown",
      individual: false,
      duration: 400,
      easing: "ease-out",
    },
    [
      { text: "Button 1", elementType: "button" },
      { text: "Button 2", elementType: "button" },
      { text: "Button 3", elementType: "button" },
    ],
    {
      containerClasses: ["grow", "group"],
      dropdownClasses: ["p-3", "origin-top"],
      headingClasses: [...headingClasses],
      itemClasses: [...itemClasses],
    }
  )
);

nav.appendChild(
  dropdown(
    {
      text: "All Text",
      href: "",
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
      containerClasses: ["grow", "group"],
      dropdownClasses: ["p-3"],
      headingClasses: [
        ...headingClasses,
        "relative",
        "before:absolute",
        "before:left-6",
        "before:content-['＋']",
        "group-hover:before:rotate-180",
        "group-hover:before:opacity-0",
        "before:transition-all",
        "before:duration-300",
        "before:ease-in",
      ],
      itemClasses: [...itemClasses, "origin-left"],
    }
  )
);

nav.classList.add("flex", "justify-around", "p-3", "bg-cyan-800");
document.body.appendChild(nav);
