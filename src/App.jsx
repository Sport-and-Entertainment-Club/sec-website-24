import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Events from "./sections/Events";
import GetInTouch from "./sections/GetInTouch";import Hero from "./components/heroSection";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen w-screen font-poppins">
      <div className="h-[50vh]"></div>
      <Navbar />
      <Events />
      <GetInTouch />
      <Footer />
    <div className="text-title bg-bg-white  min-h-screen w-screen font-poppins ">
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
}

export default App;
