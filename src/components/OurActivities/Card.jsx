import React from "react";

function Card({
  icon,
  index,
  hoveredCardIndex,
  title,
  bg,
  descriptiontoshow,
  descriptionwhilehover,
  isHovered,
  shouldHideIcon,
  onHover,
  onLeave,
}) {
  return (
    <div
      className={`${bg} z-0 p-3 md:p-4 lg:p-7 rounded-[8.17px] transition-all duration-700 ease-in-out mx-[10px]
        absolute max-w-[170px] md:max-w-full md:w-[calc(37%-1rem)] lg:w-[calc(49%-1rem)] xl:w-[calc(46%-1rem)] 2xl:w-[calc(43%-1rem)] xl:max-w-[300px] 2xl:max-w-[320px]
        ${index % 2 === 0 ? "right-1/2" : "left-1/2"}
        ${
          isHovered
            ? "h-[200px] md:h-[450px] "
            : shouldHideIcon
            ? "h-[80px] md:h-[150px]"
            : "h-[139.78px] md:h-[300px]"
        }
        ${index < 2 ? "top-0" : "bottom-0"}
        ${isHovered && index >= 2 ? "-translate-y-[0px]" : ""}
        ${shouldHideIcon && index < 2 ? "translate-y-[0px]" : ""}
        overflow-hidden`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}>
      <div className="flex flex-col items-center h-full">
        <h3 className="w-full text-purple font-[800] text-[14.26px] md:text-xl lg:text-2xl mb-2 font-montserrat text-start">
          {title}
        </h3>
        <p className=" leading-[14.42px] text-start lg:text-sm 2xl:text-lg text-[10px] transition-all duration-700">
          {descriptiontoshow}
          {isHovered && (
            <span className={` mt-2 transition-all duration-300 ease-in-out`}>
              {descriptionwhilehover}
            </span>
          )}
        </p>
        {!shouldHideIcon && (
          <img
            src={icon}
            alt={title}
            className={`w-[121.38px] md:w-48 md:h-48 mt-auto transition-all duration-300 ease-in-out ${
              isHovered ? "scale-110" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
