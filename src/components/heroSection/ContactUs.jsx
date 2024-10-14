import { RiFacebookBoxLine } from "react-icons/ri";
import { PiInstagramLogoBold } from "react-icons/pi";
import { PiLinkedinLogoBold } from "react-icons/pi";

const socialMedia = [
  {
    icon: (
      <PiInstagramLogoBold className=" text-purple text-2xl  md:text-4xl" />
    ),
    link: "https://www.instagram.com/sec.esi/?hl=fr",
  },
  {
    icon: (
      <RiFacebookBoxLine className=" text-purple text-[27px]  md:text-[42px]" />
    ),
    link: "https://www.facebook.com/sec.esi",
  },
  {
    icon: <PiLinkedinLogoBold className=" text-purple text-2xl  md:text-4xl" />,
    link: "https://www.linkedin.com/company/sport-entertainment-club-esi",
  },
];
const ContactUs = () => {
  return (
    <div className="w-full flex flex-row justify-start md:justify-center items-center gap-2  px-2 md:px-0">
      <p className=" font-poppins font-semibold text-xs md:text-lg ">
        Follow us
      </p>
      <div className=" w-10 md:w-20 h-[2px] bg-purple  "></div>
      <div className=" flex flex-row justify-center items-center gap-2  ">
        {socialMedia.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className=" cursor-pointer z-30">
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
