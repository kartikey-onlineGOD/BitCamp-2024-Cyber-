import React, { createContext, useContext, useEffect, useState } from "react";

// Create a Context
const StopwatchContext = createContext();

export function useStopwatch() {
  return useContext(StopwatchContext);
}

export const StopwatchProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(() => {
    const storedStart = localStorage.getItem("stopwatchStart");
    return storedStart ? parseInt(storedStart, 10) : Date.now();
  });
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    localStorage.setItem("stopwatchStart", startTime);

    const interval = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  };

  const value = {
    elapsedTime,
    formattedTime: formatTime(elapsedTime),
  };

  return (
    <StopwatchContext.Provider value={value}>
      {" "}
      {children}{" "}
    </StopwatchContext.Provider>
  );
};
