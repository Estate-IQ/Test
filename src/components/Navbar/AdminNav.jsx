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
              <h3>Olaitan Oludare</h3>
              <p>Admin</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
