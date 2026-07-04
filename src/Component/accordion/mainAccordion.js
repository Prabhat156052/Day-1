import React, { useState } from "react";
import Accordion from "./Accordion";
import { accordionData } from "./Utils/accordionData";
import "./Accordion.css";

export default function MainAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="main-accordion">
      <h1 className="accordion-title">Frequently Asked Questions</h1>

      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}