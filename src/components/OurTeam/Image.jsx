import React, { useEffect } from "react";

const Image = ({ color, role, image, name, active, width, margin }) => {
  useEffect(() => {}, []);
  return (
    <div
      className={` transition-all duration-500 md:scale-90 lg:scale-100 z-20 relative h-80 sm:h-[360px] flex rounded-xl 
 
`}
      style={{
        backgroundColor: color,
        width: width,
      }}>
      <div
        className={`absolute bottom-0 left-0 w-[${width}]  rounded-b-xl`}
        style={{
          background: "linear-gradient(rgba(30,15,45,0) 0%, #1E0F2D 100%)",
          width: width,
        }}></div>
      <img src={image} alt={name} className="object-cover rounded-xl h-full" />
      {active === "1" ? (
        <div
          className={`        transform transition duration-500 ${
            active === "1" ? "rotate-0" : "-rotate-90"
          }
 absolute text-white left-2 bottom-4 flex flex-col md:gap-2 `}>
          <h1
            style={{
              transition: "transform 0.5s ease-in-out, left 0.5s ease-in-out",
            }}
            className="text-xl md:text-3xl font-extrabold">
            {role}
          </h1>
          <p className="text-lg">{name}</p>
        </div>
      ) : (
        <>
          <div className="absolute left-0 bottom-8 w-16 h-16 bg-purple"></div>
          <div
            className={`absolute h-80 sm:-bottom-8 sm:left-[90px] md:-bottom-6 md:left-[96px] md2:-bottom-2 md2:left-50 lg:-bottom-10 lg:left-[96px] -bottom-12 left-[100%] w-full text-white ${
              active === "1" ? "rotate-0" : "-rotate-90"
            }`}
            style={{
              transform: `rotate(${active === "1" ? "0deg" : "-90deg"})`,
              transition: "transform 0.5s ease-in-out, left 0.5s ease-in-out",
            }}>
            <p
              className="text-sm md:text-lg font-extrabold text-nowrap"
              style={{
                transition: "transform 0.5s ease-in-out",
              }}>
              {role}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Image;
