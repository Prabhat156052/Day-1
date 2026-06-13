import "./Accordion.css";
import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive((prevState) => !prevState);
  }
  return (
    <div className="main-acc">
      <div className="header-acc" onClick={handleClick}>
        <div>{title} </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive ? <p>{content}</p> : ""}
      
    </div>
  );
}

export default Accordion;
