import React, { useState } from "react";
// import JSON from "./Data.json";
// import Pagination from "rc-pagination";
// import Modal from "./AddNew";
import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/DesktopTab";
import Mobile from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Packages from "../../../components/Packages";
// import TopNav from "../../../components/Navbar/TopNav";

const Estate = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="change_ratio">
      <GNavbar permit="active_tab" />
      <Mobile />
      <section className="selected_tab">
        {/* ============
        WITH SEARCHBOX
        =============== */}
        <div className="navbar_container">
          <div className="dashboard_container input_avatar">
            <h6></h6>
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
          <div className="subscription">
            <div className="ff_side">
              <h1>Subscription</h1>
              <p>4 Packages</p>
            </div>
            <button className="important-btn">Create Packages</button>
          </div>
          <Packages />
        </div>
        {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
      </section>
    </section>
  );
};

export default Estate;
