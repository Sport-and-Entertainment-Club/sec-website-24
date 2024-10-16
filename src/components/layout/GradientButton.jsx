import { motion } from "framer-motion";

export default function GradientButton({ Text, OnClick, disabled }) {
  return (
    <motion.div
      disabled={disabled}
      className={`inline-block  ${
        Text === "Contact us"
          ? "md:my-[1px] mt-[15px] md:mt-[0px] cursor-pointer"
          : " max-w-[70px] md:max-w-[150px] w-full md:my-0 cursor-not-allowed"
      } p-[1px] md:rounded-[20px] text-center`}
      onClick={OnClick}
      initial={{
        background: "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)",
        borderRadius: "20px",
      }}
      whileHover={{
        background: "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)",
        transition: { duration: 0.3 },
      }}>
      <div className="bg-navbar-white rounded-[15.08px] md:rounded-[20px]">
        <motion.button
          disabled={disabled}
          className={`font-[600] text-[14px] lg:text-[16px] md:rounded-[20px] px-5 md:py-[15px] w-full  hidden md:block text-center ${
            Text === "Contact us" ? "cursor-pointer" : "cursor-not-allowed"
          } `}
          whileHover={{
            background: "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)",
            color: "#ffffff",
            WebkitBackgroundClip: "unset",
            WebkitTextFillColor: "unset",
            transition: { duration: 0.3 },
          }}
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)",
          }}>
          {Text}
        </motion.button>
        <motion.button
          disabled={disabled}
          className={`font-[600] ${
            Text === "Contact us"
              ? "text-[12.06px]  cursor-pointer "
              : "text-[5.88px] cursor-not-allowed"
          } rounded-[15.08px] px-[15.08px] py-[7px] w-full flex items-center justify-center md:hidden text-center`}
          style={{
            background: "linear-gradient(180deg, #0FDAFE 0%, #C654FB 100%)",
            color: "#ffffff",
            WebkitBackgroundClip: "unset",
            WebkitTextFillColor: "unset",
            transition: { duration: 0.3 },
          }}
          onClick={OnClick}>
          {Text}
        </motion.button>
      </div>
    </motion.div>
  );
}
