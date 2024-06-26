import React, { useState, useEffect } from "react";
import "./HeroPage.css";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "./StopwatchContext";

const LogsCu = () => {
  const instructions = [
    "Welcome to the Cyber Security Incident Response Team",
    "You are now part of a dedicated cyber security incident response team at a major corporation that has experienced a significant cyber attack. Your mission is to analyze corrupted server logs to identify the intruder’s IP address and gather critical evidence of the intrusion.",
    "Objective: Your primary objective is to sift through the corrupted logs, clean up the data, and pinpoint the IP address of the intruder. Additionally, you must gather evidence that demonstrates the nature of the intrusion and how it was executed.",
    "Tasks: Data Recovery: Start by restoring the integrity of the corrupted log files. Remove non-printable characters and decode any obscured entries. The logs contain both normal activity and manipulated entries by the intruder.",
    "Log Analysis: Analyze the cleaned logs to identify any anomalies. Focus on entries with unusual activity based on timestamps and IP addresses. Distinguish between legitimate and suspicious activities.",
    "Evidence Compilation: Locate entries that directly point to the intrusion, such as unauthorized access attempts, critical system breaches, or data exports. Document these entries as they contain the details necessary to trace back to the intruder.",
    "Intruder Identification: From your analysis, determine which IP addresses are linked to malicious activities. Your goal is to identify the primary IP address of the intruder and gather any relevant information associated with this IP.",
    "Rules: Maintain the integrity of the original data where possible. Focus on extracting and clarifying information without altering its essence.",
    "Accurately document your findings to build a case against the intruder.",
    "Start Your Investigation: Begin with the file named 'corrupted_logs.txt'. Approach each entry methodically, and remember that identifying the correct IP address and associated malicious activities is crucial for progressing to the next stage of the game.",
  ];

  const [displayedText, setDisplayedText] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const [ipEntries, setIpEntries] = useState({
    credentialLeak: "",
    criticalWarnings: "",
    phishingAttempt: "",
    dataEncryption: "",
  });

  const events = {
    credentialLeak: "Credential Leak Suspected",
    phishingAttempt: "Phishing Attempt",
    dataEncryption: "Data Encryption Started",
    criticalWarnings: "Multiple Critical Log Warnings",
  };

  const correctAnswers = {
    dataEncryption: "10.10.34.59",
    credentialLeak: "10.10.34.58",
    phishingAttempt: "10.10.34.57",
    criticalWarnings: "10.10.34.56",
  };

  const navigate = useNavigate();
  const { formattedTime } = useStopwatch();

  useEffect(() => {
    if (textIndex < instructions.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => [...prev, instructions[textIndex]]);
        setTextIndex(textIndex + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const downloadFile = () => {
    const fileContents = `2023-04-21 02:05:00 INFO Data export initiated IP 10.10.34.56
2023-04-20 23:30:00 WARN Unauthorized access attempt IP 10.10.34.56
2023-04-23 00:10:00 CRITICAL Credential leak suspected IP 10.10.34.58
2023-04-23 01:00:00 INFO Data encryption started IP 10.10.34.59
2023-04-22 09:15:00 INFO Scheduled scan completed IP 192.168.1.102
\x07\x08\x0cLealyuhs PW hjjlzzlk pualyuhs khah
2023-04-24 12:00:00 INFO User guest login IP 192.168.1.105
MjAyMy0wNC0yMyAwMTowMDowMCBJTkZPIERhdGEgZW5jcnlwdGlvbiBzdGFydGVkIElQIDEwLjEwLjM0LjU5
2023-04-23 03:30:00 INFO Maintenance mode enabled IP 192.168.1.100
2023-04-21 02:00:00 CRITICAL System breach detected IP 10.10.34.56
\x07\x08\x0cJshwduynts pjd hmfslji
MjAyMy0wNC0yMyAwMDoxMDowMCBDUklUSUNBTCBDcmVkZW50aWFsIGxlYWsgc3VzcGVjdGVkIElQIDEwLjEwLjM0LjU4
MjAyMy0wNC0yMiAyMTo0NTowMCBXQVJOIFVudXN1YWwgbmV0d29yayB0cmFmZmljIGRldGVjdGVkIElQIDE5Mi4xNjguMS4xMDM=
2023-04-20 08:00:00 INFO User admin login IP 192.168.1.100
MjAyMy0wNC0yMiAwOToxNTowMCBJTkZPIFNjaGVkdWxlZCBzY2FuIGNvbXBsZXRlZCBJUCAxOTIuMTY4LjEuMTAy
2023-04-24 18:30:00 WARN Firewall breach detected IP 10.10.34.60
2023-04-23 00:05:00 WARN Possible phishing attempt IP 10.10.34.57
2023-04-20 19:00:00 INFO User admin access granted IP 192.168.1.100
2023-04-25 02:20:00 CRITICAL Kernel panic observed IP 192.168.1.101
2023-04-25 02:25:00 INFO System reboot initiated IP 192.168.1.101
MjAyMy0wNC0yMyAwMDowNTowMCBXQVJOIFBvc3NpYmxlIHBoaXNoaW5nIGF0dGVtcHQgSVAgMTAuMTAuMzQuNTc=
2023-04-22 21:45:00 WARN Unusual network traffic detected IP 192.168.1.103
\x15\x17\x1aXqdxwkrulchg dffhvv wr dgplq sdqho`;
    const element = document.createElement("a");
    const fileBlob = new Blob([fileContents], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = "corrupted_logs.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleInputChange = (event, key) => {
    setIpEntries({ ...ipEntries, [key]: event.target.value });
  };

  const validateInputs = () => {
    let validationResults = true;
    for (const key in correctAnswers) {
      if (ipEntries[key] !== correctAnswers[key]) {
        validationResults = false;
        break;
      }
    }

    if (validationResults) {
      alert("All entries are correct! Redirecting...");
      setTimeout(() => {
        navigate("/SclEngr"); // Adjust the route as per your routing setup
      }, 3000); // Wait for 3 seconds before navigating
    } else {
      alert("Some entries are incorrect, please review.");
    }
  };

  return (
    <div className="hero-container" style={{ color: "green" }}>
      <h1> Stopwatch Time: {formattedTime} </h1>{" "}
      {/* Green text color applied */}{" "}
      <div className="hero-header"> Logs Console </div>{" "}
      <div className="hero-content">
        {" "}
        {displayedText.map((line, index) => (
          <p key={index} className="terminal-text">
            {" "}
            {line}{" "}
          </p>
        ))}{" "}
      </div>{" "}
      <button
        onClick={downloadFile}
        className="download-button"
        style={{
          backgroundColor: "green",
          borderColor: "darkgreen",
          color: "white",
        }} // Inline styles for the button
      >
        Download Logs{" "}
      </button>{" "}
      <div>
        {" "}
        {Object.entries(events).map(([key, label]) => (
          <div key={key} style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px", color: "green" }}>
              {" "}
              {/* Green label */} {label}:
            </label>{" "}
            <input
              type="text"
              value={ipEntries[key]}
              onChange={(event) => handleInputChange(event, key)}
              placeholder="Enter IP Address"
              style={{ borderColor: "green" }} // Green border for the input
            />{" "}
          </div>
        ))}{" "}
        <button
          onClick={validateInputs}
          className="input-button"
          style={{
            marginTop: "10px",
            backgroundColor: "green",
            borderColor: "darkgreen",
            color: "white",
          }} // Inline styles for the check button
        >
          Check Answers{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default LogsCu;
