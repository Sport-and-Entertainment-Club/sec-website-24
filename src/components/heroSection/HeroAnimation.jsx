import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const imagesArray = [
  "/images/slider/slider-1.svg",
  "/images/slider/slider-2.svg",
  "/images/slider/slider-3.svg",
  "/images/scroller/pic-1.svg",
  "/images/scroller/pic-2.svg",
  "/images/scroller/pic-3.svg",
  "/images/scroller/pic-4.svg",
  "/images/scroller/pic-5.svg",
  "/images/scroller/pic-6.svg",
  "/images/scroller/pic-7.svg",
  "/images/scroller/pic-8.svg",
  "/images/scroller/pic-9.svg",
  "/images/scroller/pic-10.svg",
  "/images/scroller/pic-11.svg",
  "/images/scroller/pic-12.svg",
  "/images/scroller/pic-13.svg",
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
        scale: [0.8, 1],
        transition: [
          { duration: 1, ease: "easeIn" },
          { duration: 1, ease: "easeOut" },
        ],
      });

      outControls.start({
        scale: [1, 0.8],
        transition: [
          { duration: 1, ease: "easeOut" },
          { duration: 1, ease: "easeIn" },
        ],
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [inControls, outControls]);

  return (
    <div className="  w-[100vw]  justify-center relative items-center flex flex-col z-0 sw:h-[24vw] h-[30vh] sm:h-[50vh] ">
      <div className=" sm:hidden w-full absolute  top-0 flex gap-3  z-1 items-center justify-center">
        {images.slice(0, 3).map((img, index) => (
          <motion.div
            key={`current-${index}`}
            initial={{ opacity: 1 }}
            animate={inControls}
            className={`rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 1 ? "mt-[10px]" : "mt-[54px]"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="w-full absolute top-0 flex gap-3  -z-20 items-center justify-center ">
        {nextImages.slice(0, 3).map((img, index) => (
          <motion.div
            key={`next-${index}`}
            initial={{ opacity: 0.4 }}
            animate={outControls}
            className={`sm:hidden rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 1 ? "mt-[10px]" : "mt-[54px]"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      {/* Animation for 600px - 768px screens */}
      <div className=" hidden  w-full absolute  top-0 sm:flex gap-3  z-1 items-center justify-center">
        {images.slice(0, 5).map((img, index) => (
          <motion.div
            key={`current-${index}`}
            initial={{ opacity: 1 }}
            animate={inControls}
            className={`rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 2
                ? "mt-[10px]"
                : (index === 0) | (index === 4)
                ? "mt-[20px]"
                : "mt-[54px]"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="w-full hidden  absolute top-0 sm:flex gap-3  -z-20 items-center justify-center ">
        {nextImages.slice(0, 5).map((img, index) => (
          <motion.div
            key={`next-${index}`}
            initial={{ opacity: 0.4 }}
            animate={outControls}
            className={`sm:hidden rounded-[6.12px] h-[175px] w-[134px] sw:h-[24vw] sw:w-[18vw] bg-cover bg-center ${
              index === 2
                ? "mt-[10px]"
                : (index === 0) | (index === 4)
                ? "mt-[20px]"
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
