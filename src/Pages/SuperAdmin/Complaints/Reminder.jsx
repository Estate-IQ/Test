import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../../../assets/svg/SVGs";
import States from "../../../components/States/State";
import LGAs from "../../../components/States/State";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      title: "",
      date: "",
      time: "",
      description: "",
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
      title: `<div>A Remider has been created to <h4> ${title}</h4> </div>`,
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
          {/* <p>Step {this.state.currentStep} of 2</p> */}
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            title={this.state.title}
            description={this.state.description}
            date={this.state.date}
            time={this.state.time}
          />
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
            <h1>Reminder</h1>
          </div>
        </div>

        <input
          type="text"
          id="title"
          value={props.title}
          onChange={props.handleChange}
          name="title"
          placeholder="Remind Me to ..."
        />

        <textarea
          id="description"
          name="description"
          value={props.description}
          onChange={props.handleChange}
          placeholder="Description"
        ></textarea>
        <input
          type="date"
          id="date"
          value={props.date}
          onChange={props.handleChange}
          name="date"
        />
        <input
          type="time"
          id="time"
          value={props.time}
          onChange={props.handleChange}
          name="time"
        />
      </div>
      <button>Create Reminder</button>
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
