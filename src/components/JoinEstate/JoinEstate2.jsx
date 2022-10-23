import React from "react";
import Images from "../../assets/images/Images";
import Location from "../Location/Location";
import States from "../States/State";
import Estates from "../EsateNames/Estates";
import LGAs from "../LGAs/Lgas";
import { Link } from "react-router-dom";

const Join2 = () => {
  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt">
              <p>Step 2 of 3</p>
              <h1>Join Estate</h1>

              <h4>Estate info</h4>
            </div>
            <Estates />

            <Location />

            <States />
            <LGAs />

            <Link to="/building-info">
              <button className="important-btn">Create Estate</button>
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

export default Join2;
