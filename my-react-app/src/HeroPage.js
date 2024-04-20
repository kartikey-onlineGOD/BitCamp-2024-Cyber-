import React from "react";
import "./HeroPage.css";

export default function HeroPage() {
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Confirmation email sent!");
      } else {
        setMessage(data.error || "An error occurred.");
      }
    } catch (error) {
      setMessage("Network error: Could not send email.");
    }

    setSubmitting(false);
  };

  return (
    <div className="hero-container">
      <header className="hero-header"> MOTH </header>{" "}
      <main className="hero-content">
        <div className="terminal-text">
          <p className="typed-out enter-email"> Enter email to start </p>{" "}
          <p className="typed-out click-button"> Click the button to start </p>{" "}
          <p className="typed-out receive-confirmation">
            {" "}
            You will receive a confirmation mail with the link to start{" "}
          </p>{" "}
        </div>{" "}
        <div className="email-form">
          <input
            type="email"
            placeholder="Your email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit-button"> Submit </button>{" "}
        </div>{" "}
      </main>{" "}
      <div className="help-icon"> ? </div>{" "}
    </div>
  );
}
