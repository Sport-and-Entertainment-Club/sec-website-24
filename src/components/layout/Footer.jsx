import React from "react";

const Footer = () => {
  return (
    <div className="px-[0] w-full md:px-[4%] lg:px-[5%] flex flex-col bg-purple text-[7.67px] sm:text-[10px] md:text-[14px] lg:text-[16px] text-white pt-[30px] font-poppins font-[400]">
      <div className="md:grid md:grid-cols-[1fr,1.5fr] lg:grid-cols-[1.5fr,2.5fr]">
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="assets/images/layout/sec-logo-text.svg"
            className="w-[49%] sm:w-[40%] md:w-[80%] lg:w-[60%]"
          />
          <p className="text-[14px] pt-[20px] leading-[20.34px] md:leading-[32px] text-center max-w-[60%] md:max-w-[80%]">
            SEC - Sports & Entertainment Club, ESI Algiers. Promoting sports,
            entertainment, and tech-driven experiences <br />
            since 2021
          </p>
          <div className="flex justify-between w-[30%] md:w-[60%] xl:w-[40%] py-[20.14px] md:py-[53px] md:gap-8">
            <a href="https://www.instagram.com/sec.esi/">
              <img
                loading="lazy"
                src="assets/images/layout/instagram.svg"
                className="md:w-[40px] w-[23.5px]"
              />
            </a>
            <a href="https://www.facebook.com/sec.esi?mibextid=ZbWKwL">
              <img
                loading="lazy"
                src="assets/images/layout/fb.svg"
                className="md:w-[40px]  w-[23.5px]"
              />
            </a>
            <a href="https://www.linkedin.com/company/sport-entertainment-club-esi">
              <img
                loading="lazy"
                src="assets/images/layout/linkedin.svg"
                className="md:w-[40px]  w-[23.5px]"
              />
            </a>
          </div>
        </div>
        <div className="hidden px-[30px] lg:px-[30px] xl:px-[50px] md:grid grid-cols-3 justify-between pt-[65px]">
          <div className="flex flex-col">
            <p className=" py-[13px]  font-[600] xl:text-[22px] lg:text-[20px] text-[18px] font-montserrat ">
              About Us
            </p>
            <p className="py-[6px] xl:py-[8px] text-[14px] ">About</p>
            <p className="py-[6px] xl:py-[8px] text-[14px]">Goals and vision</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-[13px]  font-[600] xl:text-[22px] lg:text-[20px] text-[18px] font-montserrat ">
              Our Team
            </p>
            <p className="py-[6px] xl:py-[8px] text-[14px]">Team</p>
          </div>
          <div className="flex flex-col">
            <p className=" py-[13px]  font-[600] xl:text-[22px] lg:text-[20px] text-[18px] font-montserrat ">
              Events & Activities
            </p>
            <p className="py-[6px] xl:py-[8px] text-[14px]">Events</p>
            <p className="py-[6px] xl:py-[8px] text-[14px]">Activities</p>
          </div>
        </div>
      </div>
      <p className="text-center py-[14.39px] md:py-[15px]  border-t-bg-white border-t-[1px]">
        Copyright © 2024 Sports & Entertainment Club, ESI Algiers. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
