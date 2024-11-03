import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="Navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
