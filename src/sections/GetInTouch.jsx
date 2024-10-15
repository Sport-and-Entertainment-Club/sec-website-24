import { useState } from "react";
import GradientButton from "../components/layout/GradientButton";

const GetInTouch = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const submitEmail = () => {
    alert("Email submitted:", email);
  };

  return (
    <div className="bg-purple w-full flex flex-col items-center justify-center text-white pb-[34.2px] md:pb-[10px] pt-[15.66px] md:pt-[45px]">
      <p className="text-[14.71px] md:text-[40px] font-bold font-montserrat">
        Get in Touch
      </p>
      <p className="leading-[12.87px] md:leading-[35px] text-[7.67px] sm:text-[10px] md:text-[18px]  w-[60%] md:w-[55%] pt-[9.19px] md:pt-[25px] pb-[13.24px] md:pb-[36px]">
        Have any questions or interested in joining our community? Feel free to
        contact us, and we’ll be happy to assist you.
      </p>
      <div className="relative md:h-full bg-white rounded-[15.08px] md:rounded-[25px] grid grid-cols-2 md:grid-cols-[3fr,1fr] pl-[25.74px] md:pl-[70px] w-[70%] md:w-[65%] lg:w-[50%]">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your Email"
          value={email}
          className="text-[#1E0F2DAD] bg-transparent border-none outline-none text-[7.67px] sm:text-[10px] md:text-[16px]"
        />
        <div className="w-full flex items-center justify-end">
          <GradientButton Text={"Submit"} OnClick={submitEmail} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
