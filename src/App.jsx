import "./App.css";
import Hero from "./components/heroSection";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="text-title bg-bg-white  min-h-screen w-screen font-poppins ">
       <Navbar />
       <Hero />
    </div>
  );
}

export default App;
