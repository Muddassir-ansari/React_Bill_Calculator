import React, { useState } from "react";
import "./Bill.css";
function Bill() {
  // UseState for Input Box
  const [unit, setUnit] = useState("");
  //   UseState for Display the result
  const [result, setResult] = useState("");
  //   Make function to get input value
  const inputValue = (event) => {
    // Check Validation if user give negative value
    if (event.target.value < 0) {
      alert("Please Type Positive Value!!");
    } else {
      setUnit(event.target.value);
    }
  };
  //   Calculate overall result
  const calculate = () => {
    // Make temp variable hold input value
    let temp = unit;
    // Check Validation if Empty input box
    if (temp === "") {
      alert("Input Field can not be blank!!");
      setResult("");
    }
    // Make variable "teb=Total Electrical Bill" that hold the value according to user input
    let teb;
    if (temp >= 0 && temp <= 50) {
      teb = temp * 3.5;
    } else if (temp > 50 && temp <= 100) {
      teb = 50 * 3.5 + (temp - 50) * 4;
    } else if (temp > 100 && temp <= 200) {
      teb = 50 * 3.5 + 100 * 4 + (temp - 150) * 5.2;
    } else if (temp > 200) {
      teb = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (temp - 250) * 6.5;
    }
    setResult(teb);
  };
  return (
    <div className="container">
      <h1>Bill Calculator</h1>
      <span>Units</span>
      {/* Unit Input Box */}
      <input
        className="Input"
        type={"number"}
        onChange={inputValue}
        placeholder={"Type Units..."}
      />
      <br></br>
      <button onClick={calculate}>Calculate</button>
      <div className="result">
        {/* Display the Result */}
        <h1>₹: {result} </h1>
      </div>
    </div>
  );
}

export default Bill;
