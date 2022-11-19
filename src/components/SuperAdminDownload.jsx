import React, { useState } from "react";

const D_Filter = () => {
  const [selected, setSelected] = useState("Fiter by:");
  const [download, setDownload] = useState("Download Report");
  return (
    <div className="download_filter">
      <div className="ff-right">
        <h6>hello</h6>
      </div>
      <div className="filter_download">
        <FilterBy selected={selected} setSelected={setSelected} />
        <DownloadReports selected={download} setSelected={setDownload} />
      </div>
    </div>
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

const DownloadReports = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me with_blue">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.58039 4.61062L1.40039 5.79729L8.00039 12.3906L14.6004 5.79063L13.4204 4.61062L8.00039 10.0306L2.58039 4.61062Z"
            fill="#F6F6F6"
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
