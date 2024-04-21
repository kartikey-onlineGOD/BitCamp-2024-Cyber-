import React from "react";

export default function End() {
  const handleChange = (event) => {
    console.log("Congrats");
  };

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "20px",
        fontFamily: "monospace",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "black", // Set background to black
        color: "#39FF14", // Set font color to neon green
      }}
    >
      <h1>
        ░▀█▀░█░█░█▀█░█▀█░█░█░░░█░█░█▀█░█░█ <br />
        ░░█░░█▀█░█▀█░█░█░█▀▄░░░░█░░█░█░█░█ <br />
        ░░▀░░▀░▀░▀░▀░▀░▀░▀░▀░░░░▀░░▀▀▀░▀▀▀
      </h1>

      <h3>Made by Kartikey Pandey and Parth Kshirsagar</h3>
      <button
        onClick={handleChange}
        style={{
          width: "519.4px",
          padding: "10px",
          margin: "20px",
          backgroundColor: "#39FF14",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back to Start
      </button>
    </div>
  );
}
