import React, { useState } from "react";

export default function SclEngr() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "zypherionqixel@gmail.com" && password === "20042004") {
      console.log("Login successful");
      setError(""); // Clear any previous errors
    } else {
      setError("Invalid credentials. Please try again."); // Set error message
    }
  };

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "20px",
        fontFamily: "monospace",
        textAlign: "left",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "black", // Set background to black
        color: "#39FF14", // Set font color to neon green
      }}
    >
      As you navigate through this page, engage your investigative skills to
      uncover hidden credentials cleverly embedded within its content. This
      challenge invites you to think critically and observe subtle details that
      could lead to discovering access to a special section.
      <br />
      <br />
      <br />
      Embark on this intriguing journey into the digital realm and explore how
      seemingly ordinary elements can reveal hidden secrets. Delve into text,
      images, and metadata to decode the layers of information. Each element on
      this page might hold a clue—be it in a pixel, a word, or an unexpected
      hyperlink. Your mission is to piece together these clues to unlock a
      deeper understanding of digital forensics. This interactive experience not
      only tests your analytical abilities but also enhances your understanding
      of how data can be obscured and retrieved in the digital age. Get ready to
      prove your prowess and uncover what secrets lie beneath the surface!
      <br />
      <br />
      This challenge is not just a test of your ability to notice the unnoticed;
      it is an opportunity to learn and master the art of digital investigation.
      Discover what you can unveil!
      <div
        style={{
          width: "500px",
          margin: "100px auto",
          padding: "20px",
          fontFamily: "monospace",
          textAlign: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor: "black", // Set background to black
          color: "#39FF14", // Set font color to neon green
        }}
      >
        <h2>Login</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                backgroundColor: "transparent", // Ensures input background matches
                borderColor: "#39FF14", // Neon green border for inputs
                color: "#39FF14", // Neon green text for inputs
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "5px",
                backgroundColor: "transparent", // Ensures input background matches
                borderColor: "#39FF14", // Neon green border for inputs
                color: "#39FF14", // Neon green text for inputs
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "519.4px",
              padding: "10px",
              backgroundColor: "#39FF14",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}