import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images/Images";

const CreateEstate = () => {
  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt">
              <p>Step 1 of 2</p>
              <h1>Create Estate</h1>
              <h4>Admin Info</h4>
            </div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" required />
            <input type="number" placeholder="Mobile" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <Link to="/estate-info">
              <button className="important-btn">Next</button>
            </Link>
          </form>
        </div>
      </div>
      <div className="create_img">
        <img src={Images.LoginPreview} alt="" />
      </div>
    </div>
  );
};

export default CreateEstate;
