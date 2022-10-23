import React from "react";
import { useState } from "react";
import Modal from "./Advert";
import Modal from "./Advert";

const SelectDrop = ({ selected, setSelected }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

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
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
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
              // setIsActive(false);
              setOpenModal(true);
            }}
          >
            <a href="#" onClick={() => setOpenModal(true)}>
              Excel Sheet
            </a>
          </div>
          {/* ))} */}

          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
};

export default SelectDrop;
