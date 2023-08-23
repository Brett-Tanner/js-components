interface dropdownComponentClasses {
  containerClasses: string[];
  dropdownClasses: string[];
  headingClasses: string[];
  itemClasses: string[];
}

interface itemInfo {
  text: string;
  elementType: "a" | "button" | "p";
}

type toggleMethod = "click" | "hover";

type toggleWidget = "hamburger" | "plus" | "triangle";
