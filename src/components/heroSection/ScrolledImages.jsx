import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
// eslint-disable-next-line react/prop-types
const ScrolledImages = ({ isUp, images }) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let [ref, { height }] = useMeasure();
  const yTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    let finalPostion = -height;
    const finalDestination = isUp
      ? finalPostion + screenHeight
      : -(finalPostion + screenHeight);
    controls = animate(yTranslation, [0, finalDestination], {
      ease: "linear",
      duration: 45,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [yTranslation, height, isUp, screenHeight]);
  return (
    <div>
      <motion.div
        style={{
          translateY: !isUp ? -height + screenHeight : 0,
          y: yTranslation,
        }}
        className={`flex flex-col gap-4 `}
        ref={ref}>
        {[...images, ...images, ...images].map((item, index) => {
          return (
            <img loading="lazy"  
              src={item}
              className="   rounded-[5px] lg:rounded-[10px]   "
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default ScrolledImages;
