import React, { useState } from "react";
import Modal from "./CreateP";
import TopNav from "../../../components/Navbar/SuperAdminNav";
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
        <TopNav />

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
