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
  onLeave
}) {
  return (
    <div
      className={`${bg} z-0 p-4 rounded-lg transition-all duration-700 ease-in-out
        absolute w-[calc(50%-1rem)] 
        ${index % 2 === 0 ? 'left-0' : 'right-0'}
        ${isHovered ? 'h-[400px] ' : shouldHideIcon ? 'h-[200px]' : 'h-[300px]'}
        ${index < 2 ? 'top-0' : 'bottom-0'}
        ${isHovered && index >= 2 ? '-translate-y-[0px]' : ''}
        ${shouldHideIcon && index < 2 ? 'translate-y-[0px]' : ''}
        overflow-hidden`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex flex-col items-center h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center md:text-lg text-sm transition-all duration-700">
          {descriptiontoshow}
          {isHovered &&
          <span className={` mt-2 transition-all duration-300 ease-in-out`}>
            {descriptionwhilehover}
          </span>}
        </p>
        {!shouldHideIcon && (
          <img
            src={icon}
            alt={title}
            className={` w-48 h-48 mt-auto transition-all duration-300 ease-in-out ${isHovered ? "scale-110" : ""}`}
          />
        )}
      </div>
    </div>
  );
}

export default Card;