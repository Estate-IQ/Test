import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../assets/svg/SVGs";
import Frequency from "./Frequency";
import CollectionTarget from "./CollectionTarget";
import CollectionType from "./CollectionType";
import styled from "styled-components";
// import States from "../../../components/Location";
// import LGAs from "../../../components/States/State";

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      C_password: "",
      firstName: "",
      lastName: "",
      date: "",
      bank: "",
      collectionAmount: "",
      date: "",
      state: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate() {
    console.log("Final State: ", this.state.state);
  }
  handleSearch = (event) => {
    console.log(event);
    this.setState({
      state: event,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, bank, firstName, password, state } = this.state;
    // alert(`Your registration detail: \n
    // Email: ${email} \n
    // Username: ${firstName} \n
    // Username:  ${state} \n
    // Password: ${password}\n
    // `);
    Swal.fire({
      title: `You just created a new estate you named <h1>${bank}</h1>Email has been sent to  <h4> ${email} </h4></div>`,
      icon: "success",
      showConfirmButton: true,
      showCloseButton: true,
    });

    // useNavigate("/profile", { replace: true });

    // .then(function () {
    //   window.location = "/Test/profile";
    // });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="outlined-btn" type="button" onClick={this._prev}>
          &#60;
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <button className="important-btn" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.handleSubmit}
          // method="post"
          // action="/profile"
          className="new_estates_form swing-in-bottom-fwd"
        >
          {/* <p>Step {this.state.currentStep} of 2</p> */}
          {/* 
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            C_password={this.state.C_password}
            date={this.state.date}
          /> */}
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            date={this.state.date}
            collectionAmount={this.state.collectionAmount}
            accountNumber={this.state.accountNumber}
            bank={this.state.bank}
          />
        </form>
      </React.Fragment>
    );
  }
}

function Step2(props) {
  const [selected, setSelected] = useState("Penalty For");

  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt">
          <h3>Setup Penalties</h3>
          {/* <h4>Payment Info</h4> */}
        </div>

        <CollectionType selected={selected} setSelected={setSelected} />

        <input
          type="date"
          id="date"
          name="date"
          placeholder="Account Name"
          value={props.date}
          onChange={props.handleChange}
          required
        />
        <RevokeAccess>
          <h2>Revoke</h2>
          <div className="each_access">
            <div class="cntr">
              <label for="cbx" class="label-cbx">
                <input
                  id="cbx"
                  name="cbx"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Gate Pass</span>
            </div>
          </div>
          <div className="each_access">
            <div class="cntr">
              <label for="util" class="label-cbx">
                <input
                  id="util"
                  name="util"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Utility Portal</span>
            </div>
          </div>
          <div className="each_access">
            <div class="cntr">
              <label for="emergency" class="label-cbx">
                <input
                  id="emergency"
                  name="emergency"
                  type="checkbox"
                  class="invisible"
                  value={props.agree}
                  onChange={props.agree}
                />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
              <span>Emergency services</span>
            </div>
          </div>
        </RevokeAccess>
        {/* <States handleSearch={props.handleSearch} state={props.state} /> */}
      </div>
      <button
        onClick={returnSuccessMessage}
        className="btn btn-success btn-block"
      >
        Create Penalty
      </button>
    </div>
  );
}
function generateID(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const returnSuccessMessage = ({ open, onClose }) => {
  // if (!open) return null;
  return (
    <div onClick={onClose} className="bills_on_me">
      {/* ===========
      SUCESS MESSAGE
      ============== */}
      <div
        className="success_message slide-in-top"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p>
          Your have successfully added a new Estate.
          <span>You can check your Estate list to see them</span>
        </p>
        <Link to="/profile">
          <button onClick={onClose} className="important-btn">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};
const HandleRamdomId = () => {
  document.getElementById("collectionAmount").value = generateID(6);
};
const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <CreateCollection />
        <img src={SVGs.close} alt="" onClick={onClose} />
      </div>
    </div>
  );
};
export default Modal;

let RevokeAccess = styled.div`
  h2 {
    font-size: 20px;
    color: red;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .cntr {
    margin-top: 10px;
  }
`;
