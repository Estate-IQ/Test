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
              <p>Step 1 of 2</p>
              <h1>Reset password</h1>
              <p>
                Enter the email associated with your account and we’ll send an
                email with instructions to reset your password.
              </p>
            </div>

            <input type="email" placeholder="Email" required />

            <Link to="/update-password">
              <button className="important-btn">Reset Password</button>
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
