import React from "react";
import { useState } from "react";
import SVGs from "../../assets/svg/SVGs";

const SelectDrop = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me with_blue">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 9L12.5 15L18.5 9"
            stroke="#545454"
            fill="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          <h5>Download Format</h5>
          {/* {options.map((option) => ( */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("PDF");
              setIsActive(false);
            }}
          >
            <a href="#" download>
              PDF
            </a>
          </div>
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("Excel Sheet");
              setIsActive(false);
            }}
          >
            <a href="#" download>
              Excel Sheet
            </a>
          </div>
          {/* ))} */}
        </div>
      )}
    </div>
  );
};

export default SelectDrop;
