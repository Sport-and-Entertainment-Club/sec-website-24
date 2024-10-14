import React from 'react';

const Image = ({ color, role, image, name, active }) => {
  return (
    <div
      className="relative h-80 sm:h-[360px] w-full  rounded-xl"
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-[35%] rounded-b-xl"
        style={{
          background: 'linear-gradient(rgba(30,15,45,0) 0%, #1E0F2D 100%)'
        }}
      ></div>
      <img
        src={image}
        alt={name}
        className="object-cover rounded-xl w-full h-full"
      />

      {active === "1" ? (
        <div className="absolute text-white left-2 bottom-4 flex  flex-col gap-2">
          <h1 className="text-3xl font-extrabold">{role}</h1>
          <p className="text-xl">{name}</p>
        </div>

      ) : (
        <>
          <div className=' absolute left-0  bottom-8 w-16 h-16 bg-purple'>

          </div>
          <div className="absolute h-80  place-content-start justify-start place-self-start bottom-4 lg:-bottom-6 left-12 lg:left-[96px] md:left-[80px] md:-bottom-2 sm:left-[45px] sm:bottom-6  w-full  text-white -rotate-90   ">

            <p className="text-lg font-extrabold text-nowrap ">{role}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Image;
