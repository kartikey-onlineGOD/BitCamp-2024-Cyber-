import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStopwatch } from "./StopwatchContext";

export default function RE() {
    const correctAnswer = "apple"; // Assuming this is the correct decryption of the cipher text
    const [userInput, setUserInput] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const navigate = useNavigate();
    const { formattedTime } = useStopwatch();

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
            navigate("/ImgTestGame"); // Navigate on success
        } else {
            setIsCorrect(false);
        }
    };

    return ( <
        div style = {
            {
                margin: "20px auto",
                padding: "20px",
                fontFamily: "monospace",
                textAlign: "center",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                backgroundColor: "black", // Set background to black
                color: "#008000", // Set font color to neon green
            }
        } >
        <
        h1 > Stopwatch Time: { formattedTime } < /h1> <
        h1 > Reverse Engineering < /h1> <
        h2 > https: //github.com/Parth12358/ReverseEngineer</h2>
        <
        h3 >
        Search through the folders and files to find the suspicious files and piece the answer together.These files belong to an UNREAL Engine Project so all files except the malicious ones have a purpose in game development.To lower difficulty feel free to use commit history!
        <
        p > ░█░█░█▀█░█▀▄░█▀▀░█▀█░█░░
        <
        br / > ░█░█░█░█░█░█░█▀▀░█▀▀░█░░
        <
        br / > ░▀▀▀░▀░▀░▀▀▀░▀░▀░▀▀▀░▀▀▀
        <
        /p> <
        /h3> <
        input type = "text"
        value = { userInput }
        onChange = { handleChange }
        style = {
            {
                width: "520px",
                padding: "8px",
                marginTop: "5px",
                backgroundColor: "transparent",
                borderColor: "#008000", // Corrected double hash
                color: "#008000",
            }
        }
        placeholder = "Type your answer here" /
        >
        <
        button onClick = { handleSubmit }
        style = {
            {
                width: "519.4px",
                padding: "10px",
                margin: "20px",
                backgroundColor: "#008000",
                color: "black",
                border: "none",
                cursor: "pointer",
            }
        } >
        Check Answer <
        /button> {
            isCorrect !== null && ( <
                div style = {
                    { marginTop: "20px", fontSize: "18px" } } > { isCorrect ? "Correct! Well done." : "Incorrect, try again." } <
                /div>
            )
        } <
        /div>
    );
}