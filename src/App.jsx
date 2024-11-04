import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Hero from "./assets/components/Hero/Hero";
import About from "./assets/components/About/About";
import Activity from "./assets/components/Activity/Activity";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="Navbar fixed w-screen">
        <Navbar />
      </div>
      <div className="Hero mb-20">
        <Hero />
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Activity">
        <Activity />
      </div>
    </div>
  );
}

export default App;
