import React from "react";
import { useState } from "react";
import Advert from "./Advert";
import Reminder from "./Reminder";
import Announcement from "../../SuperAdmin/Tasks/Announce/Announce";

const SelectDrop = ({ selected, setSelected }) => {
  const [openModal, setOpenModal] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [announce, setAnnouncement] = useState(false);
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
          {/* Advert */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("Advert");
              setOpenModal(true);
            }}
          >
            <p onClick={() => setOpenModal(true)}>Advert</p>
          </div>
          {/* Announcement */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("Announcement");
              setIsActive(true);
            }}
          >
            <p onClick={() => setAnnouncement(true)}>Announcement</p>
          </div>
          {/* Reminder */}
          <div
            className="select_items"
            onClick={(e) => {
              setSelected("Reminder");
              setIsActive(true);
            }}
          >
            <p onClick={() => setReminder(true)}>Reminder</p>
          </div>
          <Advert open={openModal} onClose={() => setOpenModal(false)} />
          <Reminder open={reminder} onClose={() => setReminder(false)} />
          <Announcement
            open={announce}
            onClose={() => setAnnouncement(false)}
          />
        </div>
      )}
    </div>
  );
};

export default SelectDrop;
