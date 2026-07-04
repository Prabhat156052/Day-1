import React from "react";
import "./Accordion.css";

function Accordion({ title, content, isActive, onToggle }) {
  return (
    <div className="accordion">
      <button className="accordion-header" onClick={onToggle}>
        <span>{title}</span>
        <span className="icon">{isActive ? "−" : "+"}</span>
      </button>

      <div className={`accordion-content ${isActive ? "active" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;