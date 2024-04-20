import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./HeroPage";
import ImgTestGame from "./ImgTestGame";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroPage />} />{" "}
          <Route path="/ImgTestGame" element={<ImgTestGame />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
