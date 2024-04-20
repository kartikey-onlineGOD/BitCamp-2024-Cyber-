import React, { useContext, useEffect, useState } from "react";
import { StopwatchContext } from "./StopwatchContext";
import { useNavigate } from "react-router-dom";

export default function HeroPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const { time, setIsActive } = useContext(StopwatchContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsActive(true);
    placeButton();
    console.log("Component mounted. Stopwatch activated.");
  }, [setIsActive]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form with email:", email); // Log when form is submitted

    setSubmitting(true);
    setMessage("");

    try {
      console.log("Sending email to backend:", email); // Confirm email is being sent to backend
      console.log("API URL:", process.env.REACT_APP_API_URL);

      const response = await fetch("http://localhost:5000/process-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Your Subject Here",
          body: "Your email body here...",
          to_email: email,
          from_email: "info@kartikeypandey.online",
          password: "Welcome@12345",
        }),
      });

      const data = await response.json();
      console.log("Response from server:", data); // Log the response from the server
      if (response.ok) {
        setMessage("Confirmation email sent!");
      } else {
        setMessage(data.error || "An error occurred while sending the email.");
      }
    } catch (error) {
      setMessage(`Network error: ${error.toString()}`);
      console.log("Network error:", error); // Log network errors
    }

    setSubmitting(false);
  };

  const placeButton = () => {
    const maxY = window.innerHeight - 20;
    const maxX = window.innerWidth - 20;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    setButtonPosition({ x: randomX, y: randomY });
    console.log("Button placed at:", randomX, randomY); // Log button placement
  };

  return (
    <div className="hero-container">
      <header className="hero-header">
        MOTH{" "}
        <div className="stopwatch-display">
          {" "}
          Time: {time}
          seconds{" "}
        </div>{" "}
      </header>{" "}
      <main className="hero-content">
        <div className="terminal-text">
          <p className="typed-out enter-email"> Enter email to start </p>{" "}
          <p className="typed-out click-button"> Click the button to start </p>{" "}
          <p className="typed-out receive-confirmation">
            You will receive a confirmation mail with the link to start{" "}
          </p>{" "}
        </div>{" "}
        <div className="email-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              className="email-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email field updated:", e.target.value); // Log every change in the email input
              }}
              required
            />
            <button
              type="submit"
              className="submit-button"
              disabled={submitting}
            >
              Submit{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </main>{" "}
      <button
        style={{
          position: "absolute",
          left: `${buttonPosition.x}px`,
          top: `${buttonPosition.y}px`,
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          border: "none",
          opacity: 0.01, // Nearly invisible
          cursor: "default",
        }}
        onClick={() => navigate("./ImgTestGame")}
      ></button>{" "}
      <div className="help-icon"> ? </div>{" "}
    </div>
  );
}
