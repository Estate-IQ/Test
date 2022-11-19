import React from "react";
import { SVGs } from "../../assets/svg/SVGs";
import { Images } from "../../assets/images/Images";

const TopNav = () => {
  return (
    <div className="navbar_container">
      <div className="dashboard_container input_avatar">
        <h6></h6>
        <div className="violet">
          <div>
            <img src={SVGs.notification} alt="Bell" className="note_bell" />
            {/* <div>Notification</div> */}
          </div>
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
  );
};

export default TopNav;
