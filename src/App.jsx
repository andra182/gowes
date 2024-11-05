import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero/Hero";
import About from "./assets/components/About/About";
import Activity from "./assets/components/Activity/Activity";
import Service from "./assets/components/ServicePage/Service";
import Footer from "./assets/components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="Navbar fixed w-screen z-50">
        <Navbar />
      </div>
      <div className="Hero mb-20">
        <Hero />
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Activity mt-[60rem] z-0">
        <Activity />
      </div>
      <div className="Service mt-20 z-0">
        <Service />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
