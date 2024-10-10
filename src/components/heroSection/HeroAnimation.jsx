import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const imagesArray = [
  "/images/slider/slider-1.svg",
  "/images/slider/slider-2.svg",
  "/images/slider/slider-3.svg",
];
const shiftArrayLeft = (array) => {
  const newArray = [...array];
  const shiftedElement = newArray.shift();
  newArray.push(shiftedElement);
  return newArray;
};

const HeroAnimation = () => {
  const [images, setImages] = useState(imagesArray); // Current images
  const [nextImages, setnextImages] = useState(shiftArrayLeft(imagesArray)); // Next images
  const inControls = useAnimation();
  const outControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setnextImages((prevImages) => shiftArrayLeft(prevImages));
      setImages((prevImages) => shiftArrayLeft(prevImages));

      inControls.start({
        opacity: [0.4, 1],
        transition: [
          { duration: 0.6, ease: "easeIn" },
          { duration: 0.6, ease: "easeOut" },
        ],
      });

      outControls.start({
        opacity: [1, 0.4],
        transition: [
          { duration: 0.6, ease: "easeOut" },
          { duration: 0.6, ease: "easeIn" },
        ],
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [inControls, outControls]);

  return (
    <div className="w-[100vw] relative items-center flex flex-col z-0 sw:h-[24vw] h-[30vh] sm:h-[50vh] ">
      <div className="absolute top-0 flex gap-3 sw:gap-8 z-1 ">
        {images.map((img, index) => (
          <motion.div
            key={`current-${index}`}
            initial={{ opacity: 1 }}
            animate={inControls}
            className={`rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 1
                ? "mt-[10px]"
                : index % 2 === 0
                ? "mt-[50px]"
                : "mt-[54px]"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="absolute top-0 flex gap-3 sw:gap-8 -z-20 ">
        {nextImages.map((img, index) => (
          <motion.div
            key={`next-${index}`}
            initial={{ opacity: 0.4 }}
            animate={outControls}
            className={`rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 1
                ? "mt-[10px]"
                : index % 2 === 0
                ? "mt-[50px]"
                : "mt-[54px]"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroAnimation;
