import img from "../../public/assets/images/sec.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const JoinUs = () => {
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
      className="relative py-[50px] bg-purple font-montserrat text-white h-[22vh] md:h-[44vh] w-full flex items-center justify-center z-0 inset-0"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className=" absolute inset-0 bg-text opacity-70"></div>
      <div className="z-10 text-center px-4 ">
        <h1 className=" font-montserrat font-bold text-[16px] leading-[26px] md:text-[32px] lg:text-[48px] md:leading-[58.51px] md:w-[80%] lg:w-[90%] xl:w-[75%] mx-auto">
          Join our community for fun, learning, and lasting connections!
        </h1>
        <button
          onClick={handleJoinClick}
          className=" z-30 w-[32vw] max-w-[300.52px] md:mt-[50px] bg-pink text-white font-montserrat font-bold text-[15px] py-2 md:py-5 px-7 md:px-4 rounded-[9.26px] md:rounded-[20px] text-lg md:text-[32px] md:w-[20vw] md:max-w-[222px]">
          <Link> Join us</Link>
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
