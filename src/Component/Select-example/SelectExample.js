import React, { useState } from "react";
import "./SelectExample.css";

function SelectExample() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedIndState, setSelectedIndState] = useState("");
  const [selectedPakState, setSelectedPakState] = useState("");

  const onSelectchange = (e) => {
    const country = e.target.value;

    setSelectedCountry(country);

    // Reset state selection when country changes
    setSelectedIndState("");
    setSelectedPakState("");
  };

  const onIndStateSelect = (e) => {
    setSelectedIndState(e.target.value);
  };

  const onPakStateSelect = (e) => {
    setSelectedPakState(e.target.value);
  };

  return (
    <div className="main">
      <div className="card">
        <h2 className="title">Country & State Selector</h2>

        {/* Country Dropdown */}
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

        {/* State Dropdown */}
        {selectedCountry === "India" ? (
          <div className="india">
            <select
              name="indianstate"
              value={selectedIndState}
              onChange={onIndStateSelect}
            >
              <option value="">Choose State</option>

              <optgroup label="North India">
                <option value="Haryana">Haryana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
              </optgroup>

              <optgroup label="South India">
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Telangana">Telangana</option>
              </optgroup>

              <optgroup label="East India">
                <option value="Bihar">Bihar</option>
                <option value="Odisha">Odisha</option>
                <option value="West Bengal">West Bengal</option>
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
              <option value="">Choose Province</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Khyber Pakhtunkhwa">
                Khyber Pakhtunkhwa
              </option>
            </select>
          </div>
        )}

        {/* Selected Values */}
        <div className="result">
          <h3>Selected Details</h3>

          <p>
            <strong>Country:</strong> {selectedCountry}
          </p>

          <p>
            <strong>State / Province:</strong>{" "}
            {selectedCountry === "India"
              ? selectedIndState || "Not Selected"
              : selectedPakState || "Not Selected"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectExample;