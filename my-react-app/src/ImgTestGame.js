import { useState } from "react";

export default function ImgTestGame() {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const correctCode = "ABCDEF1234567890"; // Replace with your specific code

  const handleInputChange = (index, value) => {
    // Ensure only uppercase alphabets are entered
    if (/^[A-Z]$/.test(value) || value === "") {
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
    // Add download functionality here
    alert("Download button clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <div>
        <img src="my-react-app\public\cyber-image-encoded.png" alt="Encoded" />{" "}
      </div>{" "}
      <button
        style={{
          backgroundColor: "lightgreen",
          padding: "10px",
          marginBottom: "20px",
        }}
        onClick={handleDownloadClick}
      >
        Download{" "}
      </button>{" "}
      <div style={{ marginTop: "20px" }}>
        {" "}
        {Array.from({ length: 16 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            style={{
              width: "30px",
              marginRight: "5px",
              textAlign: "center",
              fontSize: "20px",
              padding: "5px",
              border: "1px solid gray",
              borderRadius: "5px",
              backgroundColor: "black",
              color: "white",
            }}
            value={code[index] || ""}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyPress={handleKeyPress}
          />
        ))}{" "}
      </div>{" "}
      {isValid && <p style={{ color: "green" }}> Code is valid! </p>}{" "}
    </div>
  );
}
