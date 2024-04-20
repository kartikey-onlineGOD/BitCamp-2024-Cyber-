// StopwatchContext.js
import React, { createContext, useState, useEffect } from "react";

export const StopwatchContext = createContext();

export const StopwatchProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <StopwatchContext.Provider value={{ time, setTime, isActive, setIsActive }}>
      {" "}
      {children}{" "}
    </StopwatchContext.Provider>
  );
};
