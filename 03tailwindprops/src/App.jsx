import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./assets/components/Card";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind</h1>
      <Card />
    </div>
  );
}

export default App;