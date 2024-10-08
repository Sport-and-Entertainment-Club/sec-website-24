import ContactUs from "./ContactUs";
import ScrolledImages from "./ScrolledImages";
import Slider from "./Slider";
import { images, images2 } from "../../constants/imagesScroller";
const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row relative bg-white space-y-8 md:space-y-0">
      <div className=" hidden md:block absolute  top-0 left-0 bg-bg-white w-[77.6%] h-[75%] z-0">
        <div className="absolute -bottom-0 w-full h-28 bg-bg-white clip-triangle rotate-360 translate-y-28 "></div>
      </div>
      <div className="    basis-1/2 pt-20 px-4 md:px-10 md:pl-16 xl:px-20 xl:pl-28 relative z-10 min-h-full  flex justify-center items-center ">
        <div className="space-y-6 xl:space-y-10 mb-0 md:mb-20">
          <h1 className=" text-4xl md:text-5xl xl:text-[56px] font-[800] text-title leading-[50px] md:leading-[70px] ">
            CAUSE
            <span className=" text-blue-main "> WE GOT </span>
            SKILLS
          </h1>
          <p className=" text-sm md:text-lg leading-6 md:leading-[30px] tracking-wide md:tracking-[0.07rem]">
            We are a group of students passionate about sports, exploring new
            hobbies, and enjoying entertainment. At SEC, we create the perfect
            community for you to connect, have fun, and recharge! Whether you`re
            looking to network, discover new interests, or simply enjoy
            yourself, you`ll find it all at SEC !
          </p>
          <div className=" w-full flex justify-center md:justify-start">
            <button className=" font-montserrat text-white font-medium px-8 py-1 md:py-2 md:px-10 bg-blue-400 rounded-xl text-base md:text-3xl">
              Join us
            </button>
          </div>
        </div>
        
      </div>
      <div className="hidden md:flex basis-1/2 overflow-hidden  h-screen  flex-row justify-end  gap-4  pr-4  z-10  ">
        <ScrolledImages isUp={true} images={images} />
        <ScrolledImages usUp={false} images={images2} />
      </div>
      <div className="flex flex-col   md:absolute md:bottom-3 md:left-6  ">
        <Slider />
        <ContactUs />
      </div>
    </div>
  );
};

export default Hero;
