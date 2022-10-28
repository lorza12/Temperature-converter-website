import React from "react";
import { useState } from "react";
import "./style.css";

function TemperatureConverter() {
  const [degrees, setDegrees] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  return (
    <main id="container">
        <section id="section">
        <section id="form">
        <div>
            <p className="p1">
            <label htmlFor="user-input">Degrees</label>
            </p>
            <input
            id="user-input"
            type="number"
            onChange={(d) => setDegrees(d.target.value)}/>
        </div>
        <div>
            <p className="p2">
            <label htmlFor="type">Type</label>
            </p>
          
          <select
            name="type"
            id="type"
            onChange={(t) => setType(t.target.value)}>
            <option value="f">Farenheit</option>
          </select>
        </div>
        <button id="submit" onClick={() => setResult((degrees * 9/5) + 32)}>
          Convert
        </button>
      </section>
      <section id="display">
        <p className="p3">Result</p>
        <p>{result}</p>
      </section>
        </section>
      
    </main>
  );
}
export default TemperatureConverter;
