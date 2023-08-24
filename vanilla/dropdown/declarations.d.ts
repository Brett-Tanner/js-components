interface animationInfo {
  name: string;
  individual: boolean;
}

interface animationList {
  [name: string]: Keyframe[];
}

interface dropdownComponentClasses {
  containerClasses: string[];
  dropdownClasses: string[];
  headingClasses: string[];
  itemClasses: string[];
}

interface titleInfo {
  text: string;
  href: string;
  toggleWidget: toggleWidget;
}

interface itemInfo {
  text: string;
  elementType: "a" | "button" | "p";
}

type toggleWidget = "hamburger" | "plus" | "triangle";
