import React, { useState, useEffect } from "react";
import GradientButton from "./GradientButton";
import { motion } from "framer-motion";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactUs = () => {
    alert("Contact us");
  };
  const toggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen((prev) => !prev);
    }, 300);
  };

  const navbarLinks = [
    {
      title: "Home",
      link: "Home",
    },
    {
      title: "About",
      link: "About",
    },
    {
      title: "Team",
      link: "Team",
    },
    {
      title: "Events",
      link: "Events",
    },
    {
      title: "Activities",
      link: "Activities",
    },
  ];
  useEffect(() => {}, [activeLink]);
  return (
    <div
      className={`z-10 flex flex-col md:flex-row items-center md:rounded-[15px] px-[30px] py-[11px] text-purple md:w-[88vw] fixed top-0 w-screen md:top-7 md:left-1/2 md:-translate-x-1/2 ${
        isMenuOpen
          ? "bg-white md:bg-navbar-white"
          : "bg-[#F2F1FC] md:bg-navbar-white"
      }  text-[14px] xl:text-[16px] md:grid md:grid-cols-[18vw,40vw,22vw] lg:w-[80vw] lg:grid-cols-[15vw,35vw,22vw] xl:w-[70vw] xl:grid-cols-[17vw,29vw,19vw] md:items-center justify-center`}>
      <div className="w-full hidden md:flex justify-start ">
        <img src="/assets/images/layout/logo.png" />
      </div>

      <div className="hidden w-full md:flex justify-between items-center text-blue-300 font-poppins">
        {navbarLinks.map((n) => (
          <p
            key={n.title}
            className={`${
              activeLink === n.title
                ? "border-b-[2px] py-1.5 font-bold border-pink"
                : "font-[500]"
            } px-2`}
            style={{
              background:
                activeLink === n.title
                  ? "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)"
                  : "transparent",
              WebkitBackgroundClip: activeLink === n.title ? "text" : "initial",
              WebkitTextFillColor:
                activeLink === n.title ? "transparent" : "initial",
            }}>
            <a
              onClick={() => {
                setActiveLink(n.title);
              }}
              href={`#${n.link}`}>
              {n.title}
            </a>
          </p>
        ))}
      </div>
      <div className="hidden md:flex items-center justify-end">
        <GradientButton Text={"Contact us"} OnClick={contactUs} />
      </div>
      <div className="flex justify-between md:hidden w-full items-center ">
        <img src="/assets/images/layout/logo.png" />
        {/* Menu Button for Mobile */}
        <div>
          <img
            src={
              isMenuOpen
                ? "/assets/images/layout/x.png"
                : "/assets/images/layout/menu.png"
            }
            alt="Menu"
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="z-10 md:hidden flex flex-col items-center text-[16px] w-screen text-blue-300 bg-white pb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3 }}>
          {navbarLinks.map((n) => (
            <p
              key={n.title}
              className={`${
                activeLink === n.title
                  ? "border-b-[2px] py-1.5 font-bold border-pink"
                  : "font-[500]"
              } px-2  my-4`}
              style={{
                background:
                  activeLink === n.title
                    ? "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)"
                    : "transparent",
                WebkitBackgroundClip:
                  activeLink === n.title ? "text" : "initial",
                WebkitTextFillColor:
                  activeLink === n.title ? "transparent" : "initial",
              }}>
              <a href={`#${n.link}`}>{n.title}</a>
            </p>
          ))}
          <GradientButton Text={"Contact us"} OnClick={contactUs} />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
