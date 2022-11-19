import React, { useState } from "react";
import styled from "styled-components";
import CreateSOS from "../Pages/Admin/Dashboard/CreateSOS";
import SetEmergency from "./SetEmergency";

const D_Filter = () => {
  const [selected, setSelected] = useState("Fiter by:");
  const [download, setDownload] = useState("Onboarding");
  const [emergency, setEmergency] = useState("Emergency Contact");
  const [SOS, setSOS] = useState(false);
  const [ViewSOS, setViewSOS] = useState(false);
  /** ====to do
   * 1. Handle Emergency
   */
  const Emergency = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

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
              <p onClick={() => setSOS(true)}>Create Contact</p>
            </div>
            {/* Announcement */}
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("View SOS Contact");
                setIsActive(false);
              }}
            >
              <p onClick={() => setViewSOS(true)}>View SOS Contact</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <OnboardingTag>
      <div className="download_filter">
        <div className="ff-right">
          <h1>Banana Island Estate</h1>
          <p>788yhd</p>
        </div>
        <div className="filter_download">
          <FilterBy selected={selected} setSelected={setSelected} />
          <Emergency selected={emergency} setSelected={setEmergency} />
          {/* <Onboarding selected={download} setSelected={setDownload} /> */}
        </div>
      </div>

      <CreateSOS open={SOS} onClose={() => setSOS(false)} />
      <SetEmergency open={ViewSOS} onClose={() => setViewSOS(false)} />
    </OnboardingTag>
  );
};

export default D_Filter;

const FilterBy = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me filter_drop">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          {/* <h5>Duration</h5> */}
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

let OnboardingTag = styled.div`
  .outlined {
    .select-btn {
      border: 1px solid #1737e6;

      border-radius: 5px;
      background: transparent;
      color: #1737e6;
    }
  }
  @media (min-width: 768px) {
    .outlined {
      margin-right: 10px;
    }
  }
`;
