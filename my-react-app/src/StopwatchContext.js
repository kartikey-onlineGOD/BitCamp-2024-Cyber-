import React, { createContext, useContext, useEffect, useState } from "react";

const StopwatchContext = createContext();

export function useStopwatch() {
  return useContext(StopwatchContext);
}

export const StopwatchProvider = ({ children }) => {
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const resetAndStartStopwatch = () => {
    const now = Date.now();
    setStartTime(now);
    setElapsedTime(0);
    setTimerActive(true);
    console.log("Stopwatch Reset and Started at", now);
  };

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
      console.log("Interval started");
    }
    return () => {
      clearInterval(interval);
      console.log("Interval cleared");
    };
  }, [timerActive, startTime]);

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
    resetAndStartStopwatch,
  };

  return (
    <StopwatchContext.Provider value={value}>
      {" "}
      {children}{" "}
    </StopwatchContext.Provider>
  );
};
