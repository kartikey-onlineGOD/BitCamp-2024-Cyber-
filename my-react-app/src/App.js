import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeroPage from "./HeroPage";
import ImgTestGame from "./ImgTestGame";
import LogsCu from "./LogsCu";
import SclEngr from "./SclEngr";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroPage />} /> //{" "}
          <Route path="/ImgTestGame" element={<ImgTestGame />} /> //{" "}
          <Route path="/LogsCU" element={<LogsCu />} />{" "}
          <Route path="/SclEngr" element={<SclEngr />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
