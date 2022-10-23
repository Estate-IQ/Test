import React from "react";
import { Link } from "react-router-dom";
import Images from "../assets/images/Images";

const Login = () => {
  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt">
              <h1>Create Estate</h1>
              <h4>Admin Info</h4>
              <p className="with_link">
                New user? <Link to="/"> Create account</Link>
              </p>
            </div>

            <input type="email" placeholder="Email" required />

            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <div className="reset-password">
              <Link to="/reset-password">Forget Password ?</Link>
            </div>

            <Link to="/">
              <button className="important-btn">Login</button>
            </Link>

            <div className="or_line">
              <p>Or</p>
            </div>
            {/* USE FACEBOOK OR GOOGLE */}
            <div className="google_facebook">
              <a href="">
                <div className="google_f google">Continue with Google</div>
              </a>
              <a href="">
                <div className="google_f facebook">Continue with Facebook</div>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="create_img">
        <img src={Images.LoginPreview} alt="" />
      </div>
    </div>
  );
};

export default Login;
