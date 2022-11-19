import React, { useState } from "react";

import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/S-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import AllTask from "../../../components/Tasks/AllTask";
import Advert from "./Advert";
import Reminder from "./Reminder";
import Announcement from "../../SuperAdmin/Tasks/Announce/Announce";

const Estate = () => {
  const [selected, setSelected] = useState("New Task");
  const [openModal, setOpenModal] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [announce, setAnnouncement] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);

  const [isActive, setIsActive] = useState(false);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  //   // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");

  // TESTING STATES FOR M:DAL
  const SelectDrop = () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="select_me with_blue">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
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
          </div>
        )}
      </div>
    );
  };
  return (
    <section className="change_ratio">
      <GNavbar task="active_tab" />
      <Mobile />
      <section className="selected_tab">
        {/* ============
        WITH SEARCHBOX
        =============== */}
        <div className="navbar_container">
          <div className="dashboard_container input_avatar">
            <input
              type="text"
              placeholder="Search Estate..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <div className="violet">
              <img src={SVGs.notification} alt="Bell" className="note_bell" />
              <div className="user_mode">
                <div>
                  <h3>Oladokun Moses</h3>
                  <p>Super Admin</p>
                </div>
                <img src={Images.img2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard - container */}
        <div className="dashboard_container">
          <div className="estates_tab">
            <div className="creating_task">
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  Active Task (30)
                </button>
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Pending task (25)
                </button>
                <button
                  className={`tab ${checkActive(3, "active")}`}
                  onClick={() => handleClick(3)}
                >
                  Completed task (25)
                </button>
              </div>
              {/* <NewTask /> */}
              <SelectDrop selected={selected} setSelected={setSelected} />
            </div>

            {/* RESULT FROM TAB */}
            <div className="panels flex_2">
              <div className={`panel ${checkActive(1, "active")}`}>
                <AllTask />
              </div>

              <div className={`panel ${checkActive(2, "active")}`}></div>
              <div className={`panel ${checkActive(3, "active")}`}></div>
              <div className={`panel ${checkActive(4, "active")}`}></div>
            </div>
          </div>
        </div>
        <Advert open={openModal} onClose={() => setOpenModal(false)} />
        <Reminder open={reminder} onClose={() => setReminder(false)} />
        <Announcement open={announce} onClose={() => setAnnouncement(false)} />
      </section>
    </section>
  );
};

export default Estate;
