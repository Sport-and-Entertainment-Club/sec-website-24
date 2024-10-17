import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/shared/Navbar";
import Events from "./sections/Events";
import GetInTouch from "./sections/GetInTouch";

import Goals from "./sections/GoalsAndVision";

import AboutUsPage from "./sections/AboutUs";
import Hero from "./components/heroSection";

import OurActivities from "./sections/OurActivities";
import OurTeam from "./sections/OurTeam";
import Team from "./components/team";
function App() {
  return (
    <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen w-screen md:w-auto font-poppins ">
      <Navbar />
      <Hero />
      <AboutUsPage />
      <Goals />
      <OurTeam />
      <Team />
      <Events />
      <OurActivities />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
