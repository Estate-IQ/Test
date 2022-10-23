import React from "react";
import Images from "../../assets/images/Images";
import Location from "../Location/Location";
import States from "../States/State";
import LGAs from "../LGAs/Lgas";

const CreateEstate2 = () => {
  return (
    <div className="acct_info">
      <div className="create_bg">
        <div className="create_est">
          <img src={Images.logo} alt="Estate-IQ" />
          <form action="" className="scale-up-center">
            <div className="form_txt">
              <p>Step 2 of 2</p>
              <h1>Estate Information</h1>

              <h4>Estate Info</h4>
            </div>
            <input type="text" placeholder="Estate Name" />
            <input type="text" placeholder="Estate Address" />
            <input type="email" placeholder="Estate Email" required />
            <Location />
            <div className="double_input">
              <States />
              <LGAs />
            </div>
            <div class="cntr">
              <label for="cbx" class="label-cbx">
                <input id="cbx" type="checkbox" class="invisible" />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>
                I accept EstateIQ{" "}
                <a href="https://stackoverflow.com/questions/53013437/expected-assignment-or-function-call-no-unused-expressions-reactjs">
                  Terms{" "}
                </a>{" "}
                and Conditions{" "}
              </span>
            </div>
            <button className="important-btn">Create Estate</button>
          </form>
        </div>
      </div>
      <div className="create_img">
        <img src={Images.LoginPreview} alt="" />
      </div>
    </div>
  );
};

export default CreateEstate2;
