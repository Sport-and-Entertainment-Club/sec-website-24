import React from "react";
import logo from "../../public/assets/images//logo.svg"
import img from "../../public/assets/images/sec.png"

function AboutUsPage() {
  return (
    <div className="">
<div className="relative bg-purple font-montserrat text-white h-[50vh] w-[100vw] flex items-center justify-center">
  <img src={img} className="absolute inset-0 w-full h-full " alt="Background" />
  
  <div className="absolute inset-0 bg-text opacity-70"></div>
  
  <div className="z-10 text-center px-4">
    <h1 className="font-montserrat font-bold text-[16px] md:text-[48px]">
      Join our community for fun, learning, and lasting connections!
    </h1>
    <button className="z-30  w-[19vw] h-[7vh] mt-6 bg-pink text-white font-montserrat font-bold text-[15px] py-2 px-4  rounded-lg text-lg md:text-[32px] md:w-[17vw] md:h-[9vh]">
      Join us
    </button>
  </div>
</div>
        <div className="flex flex-col py-[30px] px-[20px] sm:flex-row flex-center items-center justify-center">
          <div className="mr-[4vw] mb-6 hidden md:block">
            <img
              src= {logo}
              alt="SEC Logo"
              className=" mt-[100px] w-[40vw] h-[40vh]"
            />
          </div>
          <div className="text-[#1E0F2D]   w-[70vw] flex flex-center flex-col  ">
          <h2 className="text-[32px] text-center md:text-start md:text-[64px] font-montserrat font-bold text-text mb-4">
            About us
          </h2>
          <div className="mb-6 p-[5px] mr-[20px]">
          <p className="text-[#1E0F2D] text-justify text-[12px] text-center  md:text-[20px] w-full text-center ">
            SEC, or the <strong>Sports & Entertainment Club</strong>, is a
            university club based at the <strong>École Supérieure
            d'Informatique (ESI)</strong> in Algiers, founded in 2021. Our
            mission is to promote fun, sports, and entertainment for students
            while integrating technology into our activities, allowing members
            to enhance their skills and engage in innovative experiences.
            We aim to create a vibrant community where everyone can connect and
            explore their passions outside of academics. It's the perfect place
            to network, meet like-minded people, and have fun.
          </p>
          </div>
          </div>
          <div className="md:hidden w-[100%] flex items-center justify-center mr-14  mb-6 block">
            <img
              src= {logo}
              alt="SEC Logo"
              className="md:hidden  w-[30vw] h-[30vh]"
            />
          </div>
        </div>
      </div> 
  );
}

export default AboutUsPage;
