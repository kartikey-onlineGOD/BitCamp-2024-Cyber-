import { useState } from "react";
import "./ImgTestGame.css";

export default function ImgTestGame() {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const correctCode = "ASPDIYTELEEYUSEX"; // Replace with your specific code

  const handleInputChange = (index, value) => {
    if (/^[A-Z]$/.test(value) || value === "") {
      // Ensure only uppercase alphabets are entered
      const newCode =
        code.slice(0, index) + value.toUpperCase() + code.slice(index + 1);
      setCode(newCode);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (code === correctCode) {
        setIsValid(true);
      } else {
        setIsValid(false);
        alert("Incorrect code. Please try again.");
      }
    }
  };

  const handleDownloadClick = () => {
    const imageUrl = require("./cyber-image-encoded.png"); // Make sure this path is correct and accessible
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "cyber-image.png"; // Set the default filename for the download
    document.body.appendChild(link); // Append link to body
    link.click(); // Simulate click to trigger download
    document.body.removeChild(link); // Clean up and remove the link
  };

  return (
    <div className="img-test-game">
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
    </div>
  );
}
