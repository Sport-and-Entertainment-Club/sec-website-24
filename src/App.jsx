import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import GetInTouch from "./sections/GetInTouch";
import OurTeam from "./sections/OurTeam";
function App() {
  return (
    <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen w-screen font-poppins">
      <div className="h-[50vh]"></div>
      <Navbar />
      <OurTeam/>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
