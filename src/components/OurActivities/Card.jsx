import React from "react";

function Card({
  icon,
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
      className={`${bg} p-4 rounded-lg transition-all duration-300 ease-in-out`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center text-lg">
          {isHovered ? descriptionwhilehover : descriptiontoshow}
        </p>
        {!shouldHideIcon && (
          <img
            src={icon}
            alt={title}
            className={` mb-4 transition-opacity duration-300 ease-in-out `}
          />
        )}
      </div>
    </div>
  );
}

export default Card;