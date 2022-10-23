import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Images from "../assets/images/Images";

const ChooseMode = () => {
  const [selectedPath, setSelectedPath] = useState();
  const handleRadioChange = (newPath) => setSelectedPath(newPath);
  const handleButtonClick = () => {
    window.href.location = selectedPath;
  };

  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt">
              <h1>Create an Account</h1>
              <p className="with_link">
                Existing user? <Link to="/login"> Log in</Link>
              </p>
            </div>
            <div className="svg_control">
              <div className="gratitude">
                <input
                  type="radio"
                  value="yes"
                  name="ChooseMode"
                  id="ManageEstate"
                />

                <label htmlFor="ManageEstate" className="dispatch_svg">
                  <div className="svg">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ManageEstate"
                    >
                      <rect
                        x="0.327148"
                        y="0.296875"
                        width="39.4128"
                        height="39.4128"
                        rx="8.95745"
                        fill="#92B0FC"
                      />
                      <path
                        d="M24.4167 22.8832H26.0916V24.76H24.4167V22.8832ZM24.4167 19.1296H26.0916V21.0064H24.4167V19.1296ZM24.4167 15.376H26.0916V17.2528H24.4167V15.376ZM21.6865 15.376L22.7417 16.1642V15.376H21.6865Z"
                        fill="white"
                      />
                      <path
                        d="M18.5557 11.6221V13.0391L20.2306 14.2871V13.4989H27.7679V26.6365H24.418V28.5133H29.4428V11.6221H18.5557Z"
                        fill="white"
                      />
                      <path
                        d="M17.0223 14.1558L22.7422 18.4255V28.5133H11.0176V18.6413L17.0223 14.1558ZM18.5548 26.6365H21.0673V19.2794L17.0223 16.3985L12.6925 19.4859V26.6365H15.2049V21.0061H18.5548V26.6365Z"
                        fill="white"
                      />
                      <path
                        opacity="0.3"
                        d="M18.5547 26.6369H21.0671V19.2798L17.0221 16.3989L12.6924 19.4863V26.6369H15.2048V21.0065H18.5547V26.6369Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div className="choose_txt">
                    <h4>Manage Estate</h4>
                    <p>
                      Sign up as estate admin and onboard residence of your
                      estate
                    </p>
                  </div>
                </label>
              </div>
              <div className="gratitude">
                <input
                  type="radio"
                  value="no"
                  name="ChooseMode"
                  id="JoinEstate"
                />
                <label
                  htmlFor="JoinEstate"
                  className="dispatch_svg"
                  onClick={() => setSelectedPath("/female")}
                >
                  <div className="svg">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="JoinEstate"
                    >
                      <rect
                        x="0.328125"
                        y="0.0131836"
                        width="39.4128"
                        height="39.4128"
                        rx="8.95745"
                        fill="#F2F6FF"
                      />
                      <path
                        d="M20.5191 11.6577L26.9533 16.4606V27.808H13.7646V16.7034L20.5191 11.6577ZM22.2431 25.6968H25.0692V17.4211L20.5191 14.1805L15.6487 17.6534V25.6968H18.4749V19.3634H22.2431V25.6968Z"
                        fill="#2D4BF3"
                      />
                      <path
                        opacity="0.3"
                        d="M22.2418 25.697H25.0679V17.4213L20.5178 14.1807L15.6475 17.6535V25.697H18.4736V19.3635H22.2418V25.697Z"
                        fill="#2D4BF3"
                      />
                    </svg>
                  </div>

                  <div className="choose_txt">
                    <h4>Join Estate</h4>
                    <p>
                      Sign up as a resident and onboard members of your
                      household.
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <Link to="/join-estate">
              <button className="important-btn" onClick={handleButtonClick}>
                Create Account
              </button>
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

export default ChooseMode;
