import ContactUs from "./ContactUs";
import ScrolledImages from "./ScrolledImages";
import Slider from "./Slider";
import { images, images2 } from "../../constants/imagesScroller";
import Swal from "sweetalert2";

const Hero = () => {
  const handleJoinClick = () => {
    Swal.fire({
      title: "Oops! 🚫  Registrations are closed",

      text: "You missed it this time, but don't worry, there's always next time!\n You're always welcome at SEC events, so next time make sure to be there!",
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "I understand",
      width: window.innerWidth > 1024 ? 540 : 400,
      backdrop: `
    rgba(0, 0, 0, 0.4)
    left top
    no-repeat
  `,
      didOpen: () => {
        document.querySelector(".swal2-container").style.backdropFilter =
          "blur(2px)";
        document.querySelector(".swal2-container").style.backgroundColor =
          "rgba(0, 0, 0, 0.4)";
      },
    });
  };
  return (
    <div
      id="Home"
      className="z-0  mx-auto  flex flex-col md:flex-row relative bg-white space-y-8 md:space-y-0 mt-20 md:mt-0">
      <div className=" hidden md:block absolute  top-0 left-0 bg-bg-white w-[77.6%] h-[75%] z-0">
        <div className="absolute -bottom-0 w-full h-28 bg-bg-white clip-triangle rotate-360 translate-y-28 "></div>
      </div>
      <div className=" basis-1/2 lg:pt-10 px-4 md:px-10 lg:pl-16 xl:px-20 xl:pl-28 relative z-10 min-h-full  flex justify-center items-center ">
        <div className="space-y-6 md:space-y-8 xl:space-y-10 mb-0 md:mb-20">
          <h1 className="font-montserrat text-4xl lg:text-5xl xl:text-[56px] font-[800] text-title leading-[38.4px] md:leading-[45px] lg:leading-[60px] ">
            CAUSE
            <span className=" text-blue-main "> WE GOT </span>
            <br className="block md:hidden " />
            SKILLS
          </h1>
          <p className=" text-[12px] md:text-[16px] lg:text-lg leading-[17px] md:leading-[20px] lg:leading-[30px] tracking-wide md:tracking-[0.07rem] font-poppins">
            We are a group of students passionate about sports, exploring new
            hobbies, and enjoying entertainment. At SEC, we create the perfect
            community for you to connect, have fun, and recharge! Whether you`re
            looking to network, discover new interests, or simply enjoy
            yourself, you`ll find it all at SEC !
          </p>
          <div className="mt-6 md:mt-0 w-full flex justify-center md:justify-start">
            <button
              onClick={handleJoinClick}
              className="font-montserrat text-white font-medium px-[29px] py-[7px] md:py-2 md:px-10 bg-blue-400 rounded-xl text-base lg:text-xl">
              Join us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex basis-1/2 overflow-hidden  h-screen  flex-row justify-end  gap-4  pr-4  z-10  ">
        <ScrolledImages isUp={true} images={images} />
        <ScrolledImages usUp={false} images={images2} />
      </div>
      <div className="mx-auto flex flex-col justify-center items-center  md:absolute md:bottom-3 md:left-6  ">
        <Slider />
        <ContactUs />
      </div>
    </div>
  );
};

export default Hero;
