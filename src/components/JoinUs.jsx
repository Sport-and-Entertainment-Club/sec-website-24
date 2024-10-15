import img from "../../public/assets/images/sec.png";

const JoinUs = () => {
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
          disabled
          className="opacity-70 cursor-not-allowed z-30 w-[32vw] max-w-[300.52px] md:mt-[50px] bg-pink text-white font-montserrat font-bold text-[15px] py-2 md:py-5 px-7 md:px-4 rounded-[9.26px] md:rounded-[20px] text-lg md:text-[32px] md:w-[20vw] md:max-w-[222px]">
          Join us
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
