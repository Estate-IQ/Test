import React, { useState } from "react";

/** ====to do
 * 1. Handle Admin Penalties Click view
 *
 */
const SetUpPK = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [penalty, setPenalty] = useState(false);
  return (
    <div className="select_me with_blue outlined">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5799 0.610625L0.399902 1.79729L6.9999 8.39062L13.5999 1.79063L12.4199 0.610625L6.9999 6.03062L1.5799 0.610625Z"
            fill="#2D4BF3"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          {/* Advert */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("Create Contact");
              setIsActive(false);
            }}
          >
            <p onClick={() => setPenalty(true)}>Create Penalties</p>
          </div>
          {/* Announcement */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("View SOS Contact");
              setIsActive(false);
            }}
          >
            <p>View Penalties</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SetUpPK;
