import React, { useState } from "react";
import styled from "styled-components";
import CreateSOS from "./CreateCollection";
import PKModal from "./PenaltyModal";
import CollectionView from "./SetCollectionView";
import PenaltyView from "./SetPenaltyView";

const SettingUpTransactionDecisions = () => {
  const [download, setDownload] = useState("Collection");
  const [emergency, setEmergency] = useState("Penalties");

  /** States for Modal */
  const [newCollection, setnewCollection] = useState(false);
  const [collectionView, setCollectionView] = useState(false);
  const [penaltyView, setPenaltyView] = useState(false);
  const [penalty, setnewPenalty] = useState(false);

  /** ====to do
   * 1. Handle Penalties
   */
  const PK = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="select_me with_blue outlined">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 9.5L12.5 15.5L18.5 9.5"
              stroke="#FF6969"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {isActive && (
          <div className="select_content">
            {/* Advert */}
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Create Penalities");
                setIsActive(false);
              }}
            >
              <p onClick={() => setnewPenalty(true)}>Create Penalities</p>
            </div>
            {/* Announcement */}
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("View Penalities");
                setIsActive(false);
              }}
            >
              <p onClick={() => setPenaltyView(true)}>View Penalities</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  /** ====to do
   * 2. Handle Collection
   */
  const Collection = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

    const [board, setboardMember] = useState(false);

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
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Create Collection");
                setIsActive(false);
              }}
            >
              <p onClick={() => setnewCollection(true)}>Create Collection</p>
            </div>
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("View Collection");
                setIsActive(false);
              }}
            >
              <p onClick={() => setCollectionView(true)}>View Collection</p>
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
          <h1></h1>
        </div>
        <div className="filter_download">
          <PK selected={emergency} setSelected={setEmergency} />
          <Collection selected={download} setSelected={setDownload} />
        </div>
      </div>

      <CreateSOS open={newCollection} onClose={() => setnewCollection(false)} />
      <PKModal open={penalty} onClose={() => setnewPenalty(false)} />
      <CollectionView
        open={collectionView}
        onClose={() => setCollectionView(false)}
      />
      <PenaltyView open={penaltyView} onClose={() => setPenaltyView(false)} />
      {/* <Reminder open={reminder} onClose={() => setReminder(false)} /> */}
    </OnboardingTag>
  );
};

export default SettingUpTransactionDecisions;

let OnboardingTag = styled.div`
  .download_filter {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 460px) {
    .filter_download {
      width: 100%;
    }
  }
  .outlined {
    .select-btn {
      border: 1px solid red !important;

      border-radius: 5px;
      background: transparent !important;
      color: red;
    }
  }
  @media (min-width: 768px) {
    .outlined {
      margin-right: 10px;
    }
  }
`;
