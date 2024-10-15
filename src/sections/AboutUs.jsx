import logo from "../../public/assets/images/Logo.svg";
import JoinUs from "../components/JoinUs";
function AboutUsPage() {
  return (
    <div className="w-full" id="About">
      <JoinUs />
      <h2 className="mt-[40px] md:mt-[70px] font-[800] text-[32px] text-center md:text-[64px] font-montserrat text-text md:mb-4 mb-[20px] xl:mb-[40px]">
        About us
      </h2>
      <div className="flex sm:gap-[20px] md:gap-[40px] flex-col-reverse md:flex-row md:py-[30px] px-[20px] md:px-[5%] lg:px-[10%] sm:flex-row flex-center items-center justify-center">
        <div className="mb-6">
          <img loading="lazy"  
            src={logo}
            alt="SEC Logo"
            className="w-[30vw] sm:w-[15vw] md:w-[40vw] md:h-[30vh]"
          />
        </div>
        <div className="text-[#1E0F2D] w-full sm:w-[60vw] md:w-[70vw] flex flex-center flex-col ">
          <div className="mb-6 p-[5px] mr-[20px]">
            <p className="text-[#1E0F2D] lg:max-w-[680px] xl:max-w-[700px] 2xl:max-w-[750px] text-[12px] text-start lg:text-[16px] xl:text-[20px] w-full tracking-wider leading-[19px] sm:leading-[24px] md:leading-[30px] xl:leading-[38px]">
              SEC, or the Sports & Entertainment Club, is a university club
              based at the École Supérieure d'Informatique (ESI) in Algiers,
              founded in 2021. Our mission is to promote fun, sports, and
              entertainment for students while integrating technology into our
              activities, allowing members to enhance their skills and engage in
              innovative experiences. We aim to create a vibrant community where
              everyone can connect and explore their passions outside of
              academics. It's the perfect place to network, meet like-minded
              people, and have fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
