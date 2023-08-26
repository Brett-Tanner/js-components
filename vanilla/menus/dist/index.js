import { bubble } from "./bubble.js";
import { drawer } from "./drawer.js";
import { offcanvas } from "./offcanvas.js";
import { rudder } from "./rudder.js";
const addBubbleMenus = () => {
    document.body.innerHTML = "";
    const commonButtonClasses = [""];
    const commonContainerClasses = ["fixed"];
    const commonToggleButtonClasses = ["h-[8dvh]", "w-[8dvh]", "rounded-full"];
    const bottomRight = bubble([{ action: "", classes: [""], imageSrc: "", text: "" }], {
        buttons: [...commonButtonClasses],
        container: [...commonContainerClasses, "bottom-3", "right-3"],
        toggleButton: [...commonToggleButtonClasses],
    });
    const bottomLeft = bubble([{ action: "", classes: [""], imageSrc: "", text: "" }], {
        buttons: [...commonButtonClasses],
        container: [...commonContainerClasses, "bottom-3", "left-3"],
        toggleButton: [...commonToggleButtonClasses],
    });
    const topLeft = bubble([{ action: "", classes: [""], imageSrc: "", text: "" }], {
        buttons: [...commonButtonClasses],
        container: [...commonContainerClasses, "top-3", "left-3"],
        toggleButton: [...commonToggleButtonClasses],
    });
    const topRight = bubble([{ action: "", classes: [""], imageSrc: "", text: "" }], {
        buttons: [...commonButtonClasses],
        container: [...commonContainerClasses, "top-3", "right-3"],
        toggleButton: [...commonToggleButtonClasses],
    });
    document.body.append(bottomRight, bottomLeft, topLeft, topRight);
};
const drawerMenu = drawer();
const offcanvasMenu = offcanvas();
const rudderMenu = rudder();
const menuFunctions = {
    bubble: addBubbleMenus,
    drawer: drawerMenu,
    offcanvas: offcanvasMenu,
    rudder: rudderMenu,
};
addBubbleMenus();
//# sourceMappingURL=index.js.map