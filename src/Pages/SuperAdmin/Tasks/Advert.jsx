import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../../../assets/svg/SVGs";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      title: "",
      fileName: "",
      description: "",
      ad_email: "",
      ad_web: "",
      mobile: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, fileName } = this.state;
    Swal.fire({
      title: `<div>You just placed an advert that you called <h4> ${title}</h4> </div>`,
      icon: "success",
      showConfirmButton: true,
      showCloseButton: true,
    });

    // .then(function () {
    //   window.location = "/superadmin-tasks";
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
          <p>Step {this.state.currentStep} of 2</p>
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            title={this.state.title}
            description={this.state.description}
          />

          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            description={this.state.description}
          />
          {/* <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          /> */}
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
      {/* <label htmlFor="title">Email address</label> */}

      <div className="create_est ">
        <div className="form_txt">
          <div className="capture_close">
            <h1>Advert</h1>
          </div>
        </div>

        <input
          type="file"
          id="fileName"
          value={props.fileName}
          onChange={props.handleChange}
          name="fileName"
          placeholder="Title"
        />

        <input
          type="text"
          id="title"
          value={props.title}
          onChange={props.handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          id="description"
          name="description"
          value={props.description}
          onChange={props.handleChange}
          placeholder="Description"
        ></textarea>
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
          <h1>Advert</h1>
          <h4>Advert Info</h4>
        </div>

        <input
          type="email"
          id="ad_email"
          name="ad_email"
          placeholder="Email (Optional)"
          value={props.title}
          onChange={props.handleChange}
        />
        <input
          type="website"
          id="ad_web"
          name="ad_web"
          placeholder="Website (Optional)"
          value={props.title}
          onChange={props.handleChange}
        />
        <input
          type="number"
          id="mobile"
          name="mobile"
          placeholder="Mobile (Optional)"
          value={props.title}
          onChange={props.handleChange}
        />
      </div>
      <button>Create Estate</button>
    </div>
  );
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
