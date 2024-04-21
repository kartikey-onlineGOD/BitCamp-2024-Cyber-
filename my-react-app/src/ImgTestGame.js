import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useStopwatch } from "./StopwatchContext"; // Import the context
import "./ImgTestGame.css";

export default function ImgTestGame() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const { formattedTime } = useStopwatch();
  const correctCode = "ASPDIYTELEEYUSEX"; // Replace with your specific code

  const handleInputChange = (index, value) => {
    if (/^[A-Z]$/.test(value) || value === "") {
      const newCode =
        code.slice(0, index) + value.toUpperCase() + code.slice(index + 1);
      setCode(newCode);
    }
  };

  const goToLogsPage = () => {
    navigate("/LogsCu"); // Route to navigate to the LogsCu page
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (code === correctCode) {
        setIsValid(true);
        generateRandomPosition();
      } else {
        setIsValid(false);
        alert("Incorrect code. Please try again.");
      }
    }
  };

  const generateRandomPosition = () => {
    const maxY = window.innerHeight - 50; // Adjust 50px for button size
    const maxX = window.innerWidth - 50; // Adjust 50px for button size
    setButtonPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  const handleDownloadClick = () => {
    const imageUrl = require("./cyber-image-encoded.png");
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "cyber-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="img-test-game">
      <h1> Stopwatch Time: {formattedTime} </h1>{" "}
      <img
        src={require("./cyber-image-encoded.png")}
        alt="Encoded cyber-themed"
      />
      <button className="download-button" onClick={handleDownloadClick}>
        Download{" "}
      </button>{" "}
      <div className="input-fields-container">
        {" "}
        {Array.from({ length: 16 }).map((_, index) => (
          <input
            key={index}
            className="input-field"
            type="text"
            maxLength={1}
            value={code[index] || ""}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyPress={handleKeyPress}
          />
        ))}{" "}
      </div>{" "}
      {isValid && <p className="valid-code-message"> Code is valid! </p>}{" "}
      {isValid && (
        <button
          onClick={goToLogsPage}
          style={{
            position: "absolute",
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            width: "10px",
            height: "10px",
            background: "white",
            opacity: 0.01,
          }}
        >
          {/* Button is hidden */}{" "}
        </button>
      )}{" "}
    </div>
  );
}
