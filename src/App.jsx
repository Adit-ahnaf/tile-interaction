// src/App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [outputString, setOutputString] = useState("");

  const replaceRepeatedLetters = (inputString) => {
    let result = "";
    let count = 1;

    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === inputString[i + 1]) {
        count++;
      } else {
        if (count >= 3) {
          result += "_".repeat(count);
        } else {
          result += inputString.slice(i - count + 1, i + 1);
        }
        count = 1;
      }
    }

    return result;
  };

  const handleClick = (letter) => {
    let optString = outputString + letter;

    // Replace consecutive letters logic
    optString = replaceRepeatedLetters(optString);

    setOutputString(optString);
  };

  return (
    <div className=" flex flex-col items-center mt-[20px] ">
      <div className=" grid grid-cols-6 gap-[10px] ">
        {Array.from({ length: 26 }, (_, i) => (
          <div
            key={i}
            className=" hover:shadow-lg flex justify-center items-center w-12 h-12 bg-orange-400 border border-gray-300 cursor-pointer select-none"
            onClick={() => handleClick(String.fromCharCode(65 + i))}
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
      <div className="mt-5 text-xl font-bold border border-slate-500  p-5 w-full ">
        {outputString}
      </div>
      <button className="mt-5 p-3 rounded-md  w-[100px] bg-gray-400 " onClick={()=> setOutputString("")}>reset</button>
    </div>
  );
};

export default App;
