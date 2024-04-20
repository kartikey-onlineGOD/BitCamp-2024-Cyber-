import React from "react";
import "./App.css";
import { StopwatchProvider } from "./StopwatchContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./HeroPage";
import ImgTestGame from "./ImgTestGame";
import LogsCu from "./LogsCu";
import SclEngr from "./SclEngr";
import Caesar from "./Caesar";

function App() {
  return (
    <Router>
      <StopwatchProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HeroPage />} />{" "}
            <Route path="/ImgTestGame" element={<ImgTestGame />} />{" "}
            <Route path="/LogsCU" element={<LogsCu />} />{" "}
            <Route path="/SclEngr" element={<SclEngr />} />{" "}
            <Route path="/Caesar" element={<Caesar />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </StopwatchProvider>{" "}
    </Router>
  );
}

export default App;
