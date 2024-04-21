import React, { useState } from "react";

export default function Caesar() {
  const correctAnswer = "Least Significant Bit"; // Assuming this is the correct decryption of the cipher text
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
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
      <h1> Caesar Encryption </h1>{" "}
      <h2> nvsprlvsrlVokcdCsqxspsmkxdLsdutlutl </h2>{" "}
      <h3>
        Fun Fact: The first documented use of encryption dates back to ancient
        Egypt around 1900 BCE!The scribes used non - standard hieroglyphs in an
        inscription to obscure the meaning of a message, essentially creating an
        early form of what we would today recognize as a substitution
        cipher.This shows that the concept of keeping information secure by
        encoding messages has been important to human societies for millennia!
      </h3>{" "}
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        style={{
          width: "520px",
          padding: "8px",
          marginTop: "5px",

          backgroundColor: "transparent", // Ensures input background matches
          borderColor: "#39FF14", // Neon green border for inputs
          color: "#39FF14",
        }}
        placeholder="Type your answer here"
      />
      <button
        onClick={handleSubmit}
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
        Check Answer{" "}
      </button>{" "}
      {isCorrect !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          {" "}
          {isCorrect ? "Correct! Well done." : "Incorrect, try again."}{" "}
        </div>
      )}{" "}
    </div>
  );
}
