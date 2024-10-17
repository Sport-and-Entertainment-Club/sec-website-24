import menuItems from "../../constants/menu";
import { useState } from "react";
import { motion } from "framer-motion";
const NavLinks = () => {
  const [selectedMenyItem, setselectedMenyItem] = useState(1);
  const handleClick = (index, href) => {
    setselectedMenyItem(index + 1);
    const section =
      document.getElementById(href) || document.getElementById("Contact");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className=" hidden md:block ">
      <nav className="text-base grid grid-cols-5 gap-x-4 xl:gap-x-8 ">
        {menuItems.map((item, index) => {
          return (
            <button
              key={index}
              className="flex justify-center items-center w-20"
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
        <motion.div
          layout
          className={` bg-purple-ocean h-[3px] relative top-2 `}
          style={{ gridColumnStart: selectedMenyItem }}></motion.div>
      </nav>
    </div>
  );
};

export default NavLinks;
