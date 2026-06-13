import React from "react";
import Accordion from './Accordion'
import {accordionData} from './Utils/accordionData'
import './Accordion.css'
export default function MainAccordion() {
  return (
    <div className="main-accordion">
      {accordionData.map((data, index) => (
        <Accordion key={index} title={data.title} content={data.content} />
      ))}
    </div>
  );
}
