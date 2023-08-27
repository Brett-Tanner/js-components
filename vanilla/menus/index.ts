import { bubble } from "./bubble.js";
import { drawer } from "./drawer.js";
import { offcanvas } from "./offcanvas.js";
import { rudder } from "./rudder.js";

const placeholder = document.createElement("article");
placeholder.innerText =
  "Hello! Yes, it is I, the bumble placeholder. Pleased to make your acquaintance sir/madam! My purpose in life is to demonstrate the opacity, or lack thereof, of the menu which shall expand upon your kind person taking such action as is necessary. Am I happy with my purpose in life? Why of course, who could ask for more than to be a meaningless block of text suspended in the middle of nowhere, waiting to be covered by something more important. Sarcasm? Never heard of it.";
placeholder.classList.add("text-3xl", "text-bold");

const addBubbleMenu = () => {
  document.body.innerHTML = "";
  document.body.appendChild(placeholder);
  document.body.classList.add(
    "w-screen",
    "h-screen",
    "flex",
    "justify-center",
    "items-center",
    "overflow-hidden"
  );
  document.body.appendChild(
    bubble(
      [
        {
          action: addDrawerMenu,
          imageSrc: "./images/arrow-down-right.svg",
          buttonClasses: ["bg-emerald-500"],
          text: "Switch to Drawer Menu",
          textClasses: ["bg-emerald-500", "text-zinc-50"],
        },
        {
          action: addOffcanvasMenu,
          imageSrc: "./images/arrow-left-square.svg",
          buttonClasses: ["bg-yellow-400"],
          text: "Switch to Offcanvas Menu",
          textClasses: ["bg-yellow-400"],
        },
        {
          action: addRudderMenu,
          imageSrc: "./images/arrow-clockwise.svg",
          buttonClasses: ["bg-orange-500"],
          text: "Switch to Rudder Menu",
          textClasses: ["bg-orange-500", "text-zinc-50"],
        },
      ],
      {
        backdrop: ["bg-cyan-400/70", "backdrop-blur"],
        buttons: ["bg-cyan-500", "h-[5dvh]", "w-[5dvh]"],
        toggleButton: ["h-[7dvh]", "w-[7dvh]", "bg-cyan-600"],
      }
    )
  );
};

const addDrawerMenu = function () {
  document.body.innerHTML = "drawer";
  document.body.appendChild(placeholder);
  document.body.classList.add(
    "w-screen",
    "h-screen",
    "flex",
    "justify-center",
    "items-center"
  );
  document.body.appendChild(drawer());
};
const addOffcanvasMenu = function () {
  document.body.innerHTML = "offcanvas";
  document.body.appendChild(placeholder);
  document.body.classList.add(
    "w-screen",
    "h-screen",
    "flex",
    "justify-center",
    "items-center"
  );
  document.body.appendChild(offcanvas());
};
const addRudderMenu = function () {
  document.body.innerHTML = "rudder";
  document.body.appendChild(placeholder);
  document.body.classList.add(
    "w-screen",
    "h-screen",
    "flex",
    "justify-center",
    "items-center"
  );
  document.body.appendChild(rudder());
};

addBubbleMenu();
