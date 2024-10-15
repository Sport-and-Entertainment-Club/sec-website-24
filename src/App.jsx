import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Events from "./sections/Events";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./components/heroSection";

import OurActivities from "./sections/OurActivities";
import Registration from "./components/registration";
function App() {
  return (
    <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen  font-poppins">
      {/* <Navbar /> */}
      {/* <Hero />
      <Events />
      <OurActivities />
      <GetInTouch />
      <Footer />  */}
      <Registration />
    </div>
  );
}

export default App;
