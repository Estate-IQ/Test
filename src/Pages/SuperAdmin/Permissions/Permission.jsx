import React, { useState } from "react";
import Modal from "./CreateP";
import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/S-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import Packages from "../../../components/Packages";
import SuperUtility from "../../../components/SuperUtility";

const Permission = () => {
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
            <button
              className="important-btn"
              onClick={() => setOpenModal(true)}
            >
              Create Packages
            </button>
          </div>
          <Packages />

          <SuperUtility />
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </section>
    </section>
  );
};

export default Permission;
