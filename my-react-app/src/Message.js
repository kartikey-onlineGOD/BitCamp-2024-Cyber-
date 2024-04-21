import React from "react";
import YouTube from "react-youtube";

export default function RickRoll() {
  // YouTube video options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Ensure autoplay is on
      controls: 1, // Show pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      loop: 1, // Loop the video
      playlist: "dQw4w9WgXcQ", // Required for looping
      mute: 0, // Mute the video to allow autoplay in most browsers
    },
  };

  const handleVideoReady = (event) => {
    // Start playing the video as soon as it's ready
    event.target.playVideo();

    // Set a timeout to redirect after 30 seconds
    setTimeout(() => {
      // Redirect to another page
      window.location.href = "http://localhost:3000/"; // Adjust the path as necessary
    }, 30000); // 30000 milliseconds = 30 seconds
  };

  return (
    <div
      style={{
        margin: "20px auto",
        padding: "20px",
        fontFamily: "monospace",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "black",
        color: "#39FF14",
      }}
    >
      <h1> Phishing Awareness Test </h1>{" "}
      <p> Watch the video below to enhance your awareness! </p>{" "}
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={handleVideoReady} />{" "}
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        Remember, always be cautious with links.{" "}
      </div>{" "}
    </div>
  );
}
