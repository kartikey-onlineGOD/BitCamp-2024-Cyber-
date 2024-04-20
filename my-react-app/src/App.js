import React from "react";
import "./App.css";
import { StopwatchProvider } from "./StopwatchContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeroPage from "./HeroPage";
import ImgTestGame from "./ImgTestGame";
import LogsCu from "./LogsCu";

function App() {
  return (
    <Router>
      <StopwatchProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HeroPage />} />{" "}
            <Route path="/ImgTestGame" element={<ImgTestGame />} />{" "}
            <Route path="/LogsCU" element={<LogsCu />} />{" "}
          </Routes>{" "}
        </div>{" "}
      </StopwatchProvider>{" "}
    </Router>
  );
}

export default App;
