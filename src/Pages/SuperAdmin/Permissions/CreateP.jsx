import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../../../assets/svg/SVGs";
import CardRadio from "../../../components/ToggleCard";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      type: "",
      packageName: "",
      paymentOption: "",
      bankName: "",
      acctNumber: "",
      cost: "",
    };
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { packageName } = this.state;
    // alert(`Your registration detail: \n
    // Email: ${email} \n
    // Username: ${firstName} \n
    // Username:  ${state} \n
    // Password: ${password}\n
    // `);
    Swal.fire({
      title: `Your Package Name is <h4> ${packageName}`,
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
          className="new_estates_form fade-in-bck"
        >
          <p>Step {this.state.currentStep} of 2</p>

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstName={this.state.type}
            lastName={this.state.packageName}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            estate_email={this.state.bankName}
            emailId={this.state.acctNumber}
            estate_ads={this.state.cost}
          />
          <div className="control_btn">
            {this.previousButton()}
            {this.nextButton()}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt">
          <h1 className="packageNmae">Create Package</h1>
          {/* <h4>Admin Info</h4> */}
        </div>
        <input
          type="text"
          id="type"
          value={props.type}
          onChange={props.handleChange}
          name="type"
          placeholder="Permission Type"
        />
        <input
          type="text"
          placeholder="Package Name"
          id="packageName"
          value={props.packageName}
          onChange={props.handleChange}
          name="packageName"
        />
        <div className="switch-field">
          <CardRadio
            title=" Prefered Payment Option"
            leftLabel="Credit/Debit Card"
            rightLabel="Bank Transfer"
          />
        </div>
      </div>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt">
          <h1>Add Account</h1>
          <h4>payment Info</h4>
        </div>
        <input
          type="text"
          id="bankName"
          name="bankName"
          placeholder="Bank Name"
          value={props.bankName}
          onChange={props.handleChange}
        />
        <input
          type="number"
          id="acctNumber"
          name="acctNumber"
          placeholder="Account Number"
          value={props.acctNumber}
          onChange={props.handleChange}
        />
        <input
          type="text"
          id="cost"
          name="cost"
          placeholder="Account Name"
          value={props.cost}
          onChange={props.handleChange}
        />
      </div>
      <button
        // onClick={returnSuccessMessage}
        className="btn btn-success btn-block"
      >
        Create Package
      </button>
    </div>
  );
}

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
        <MasterForm />
        <img src={SVGs.close} alt="" onClick={onClose} />
      </div>
    </div>
  );
};
export default Modal;
