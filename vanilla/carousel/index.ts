import { carousel } from "./carousel.js";

const imgSources = [
  "./images/1668311667340.jpg",
  "./images/IMG_20230508_221843_906.jpg",
  "./images/1679836084678.jpg",
  "./images/IMG_20230508_221939_536.jpg",
  "./images/1685369025945.jpg",
  "./images/IMG_20230814_194916_751.jpg",
  "./images/1685369064283.jpg",
  "./images/IMG_20230814_195019_949.jpg",
  "./images/1685369070877.jpg",
  "./images/IMG_20230814_195043_291.jpg",
  "./images/IMG_20221218_202657.jpg",
  "./images/IMG_20230814_195058_194.jpg",
  "./images/IMG_20221230_125719.jpg",
  "./images/IMG_20230814_195111_854.jpg",
  "./images/IMG_20221230_135739.jpg",
  "./images/IMG_20230814_195112_052.jpg",
  "./images/IMG_20230508_221821_845.jpg",
  "./images/PXL_20230401_055719288.jpg",
  "./images/IMG_20230508_221831_919.jpg",
];

document.body.appendChild(carousel([...imgSources], {}));
