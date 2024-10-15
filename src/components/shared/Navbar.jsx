import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="hidden lg:flex fixed mt-4 w-full  justify-center  z-50 ">
      <div className="  flex flex-row justify-between items-center px-5 gap-20 xl:gap-36  py-2 bg-white/90  rounded-lg">
        <div>
          <img loading="lazy"   src="./images/Logo.svg" alt="sec logo" />
        </div>
        <NavLinks />
        <div>
          <button className=" bg-gradient-to-r from-blue-ocean to-purple-ocean font-semibold  rounded-full p-[2px] group transition-all duration-150 ">
            <div className=" px-5 py-2 bg-white  rounded-full group-hover:bg-transparent">
              <p className=" gradient-text group-hover:text-white">
                contact us
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
