import React, { useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/S-Navigator";
import SuperAdminActivityTable from "../../../components/SuperAdminActivityTable";
import Mobile from "../../../components/Navbar/Navbar";

const Profile = () => {
  // SEARCH INPUT
  // const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <section className="change_ratio">
        <GNavbar estate="active_tab" />
        <Mobile />
        <section className="selected_tab">
          {/* ========
        WITH SEARCHBOX
        =========== */}
          <div className="navbar_container">
            <div className="dashboard_container input_avatar">
              <h6>Hello</h6>
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
            <BreadCrumb
              previous="Estate Info"
              prevlink="/profile"
              current="Activity Log"
            />
            <div className="group_profile">
              {/* 1 */}
              <div className="Cap_estate_name">
                <div className="group_profile_header">
                  <img src={Images.blog2} alt="" />
                  <div className="estate_name">
                    <h1>Golden Gate Estate</h1>
                    <p className="estate_id">E1Q402</p>
                    <div className="packages_name">
                      <button>Deluxe Package</button>
                      <h4>10 days Left</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SuperAdminActivityTable />
          </div>
        </section>
      </section>
    </>
  );
};

export default Profile;
