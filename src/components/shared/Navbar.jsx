import { useState } from "react";
import NavLinks from "./NavLinks";
import Hamburger from "hamburger-react";
import menuItems from "../../constants/menu";
import GradientButton from "../layout/GradientButton";
import { AnimatePresence, motion } from "framer-motion";
const contactUs = () => {
  const section = document.getElementById("Contact");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  // alert("Contact us");
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex fixed mt-4 w-full  justify-center  z-50 text-base ">
        <div className="  flex flex-row justify-between items-center px-5 gap-20 xl:gap-36  py-2 bg-white/90  rounded-lg">
          <div>
            <img src="./images/Logo.svg" alt="sec logo" />
          </div>
          <NavLinks />
          <GradientButton
            Text={"Contact us"}
            OnClick={contactUs}
            disabled={false}
          />
        </div>
      </div>

      <div className=" relative md:hidden ">
        <div className="flex text-base  flex-row justify-between items-center px-6 sm:px-10 py-2 sm:py-5 bg-[#F2F1FC] ">
          <div className="relative z-50">
            <img src="./images/Logo.svg" alt="sec logo" />
          </div>
          <div className="relative z-50">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#6D95FC"
              size={34}
              rounded={true}
            />
          </div>
        </div>
        {isOpen && <Menu setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Navbar;

// eslint-disable-next-line react/prop-types
const Menu = ({ setOpen }) => {
  const [selectedMenyItem, setselectedMenyItem] = useState(1);
  const handleClick = (index, href) => {
    setselectedMenyItem(index + 1);
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        exit={{ y: -200 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-0  flex flex-col justify-center items-center gap-8 py-20 pb-10 text-base  bg-[#F2F1FC] w-full z-20`}>
        {menuItems.map((item, index) => {
          return (
            <button
              key={index}
              className=""
              onClick={() => handleClick(index, item.href)}>
              <div href={item.href} className="">
                <p
                  className={`  ${
                    selectedMenyItem != index + 1
                      ? " text-blue-300 font-medium"
                      : "gradient-text font-bold"
                  } transition-all duration-150`}>
                  {item.title}
                </p>
              </div>
            </button>
          );
        })}
        <GradientButton
          Text={"Contact us"}
          OnClick={contactUs}
          disabled={false}
        />
      </motion.div>
    </AnimatePresence>
  );
};
