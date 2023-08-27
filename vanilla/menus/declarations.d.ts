interface buttonInfo {
  action: string | CallableFunction;
  buttonClasses?: string[];
  imageSrc: string;
  text: string;
  textClasses?: string[];
}

interface classes {
  backdrop?: string[];
  buttons?: string[];
  menu?: string[];
  text?: string[];
  toggleButton: string[];
}

type expandDirection = "up" | "down" | "left" | "right";
