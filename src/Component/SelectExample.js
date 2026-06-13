import React, { useState } from "react";
import "./SelectExample.css";

function SelectExample() {
  
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedIndState, setSelectedIndState] = useState("");
  const [selectedPakState, setSelectedPakState] = useState("");
  const onSelectchange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const onIndStateSelect = (e) => {
    setSelectedIndState(e.target.value);
    console.log(e.target.value);
  };
  const onPakStateSelect = (e) => {
    setSelectedPakState(e.target.value);
    console.log(e.target.value);
  };
  
  return (
    <div className="main">
      <div className="country">
        <select
          name="countryname"
          value={selectedCountry}
          onChange={onSelectchange}
        >
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
      </div>
      {selectedCountry === "India" ? (
        <div className="india">
          <select
            name="indianstate"
            value={selectedIndState}
            id="hr-select"
            onChange={onIndStateSelect}
          >
            <option value="choose State">Choose State</option>
            <hr />
            <optgroup label="North">
              <option value="Haryana">Haryana</option>
              <option value="Goa">Goa</option>
              <option value="UP">UP</option>
              <option value="Delhi">Delhi</option>
            </optgroup>
            <hr />
            <optgroup label="South">
              <option value="Chennai">Chennai</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Pune">Pune</option>
            </optgroup>
            <hr />
            <optgroup label="East">
              <option value="Bihar">Bihar</option>
              <option value="Odisa">Odisa</option>
              <option value="West Bangal">West Bangal</option>
            </optgroup>
          </select>
        </div>
      ) : (
        <div className="pakistan">
          <select
            name="pakistanstate"
            value={selectedPakState}
            onChange={onPakStateSelect}
          >
            <option value="Sindh">Sindh</option>
            <option value="Balochistan">Balochistan</option>
            <option value="Province">Province</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default SelectExample;
