import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Events from "./sections/Events";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./components/heroSection";
import AboutUsPage from "./sections/AboutUs";
import OurActivities from "./sections/OurActivities";
function App() {
  return (
    <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen w-screen font-poppins">
      <Navbar />
      <Hero />
      <AboutUsPage />
      <Events />
      <OurActivities />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
