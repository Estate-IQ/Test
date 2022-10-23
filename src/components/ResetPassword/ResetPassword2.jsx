import React from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/images/Images";

const ResetPassword = () => {
  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt default_p">
              <p>Step 2 of 2</p>
              <h1>Update password</h1>
              <p>
                Please enter the 8-digit verification code sent to your email
                <b> Tosin_alo@ymail.com.</b> Your new password must be different
                from previous used passwords
              </p>
            </div>

            <input type="number" placeholder="8 digit Code" required />
            <input type="password" placeholder="New password" required />
            <input
              type="password"
              placeholder="Confirm new password"
              required
            />

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

export default ResetPassword;
