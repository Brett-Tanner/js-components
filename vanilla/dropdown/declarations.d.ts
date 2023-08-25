interface animationInfo {
  name: string;
  individual: boolean;
  duration: number;
  easing: string;
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
}

interface itemInfo {
  text: string;
  elementType: "a" | "button" | "p";
}
