import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/shared/Navbar";
import Events from "./sections/Events";
import GetInTouch from "./sections/GetInTouch";
import Goals from "./sections/GoalsAndVision";
import AboutUsPage from "./sections/AboutUs";
import Hero from "./components/heroSection";
import OurActivities from "./sections/OurActivities";
import OurTeam from "./sections/OurTeam";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <Router>
      <div className="z-0 relative text-title bg-white md:bg-bg-white text-title-desktop flex flex-col mx-auto md:min-h-screen xl:w-auto font-poppins">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <AboutUsPage />
                <Goals />
                <OurTeam />
                <Events />
                <OurActivities />
                <GetInTouch />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
