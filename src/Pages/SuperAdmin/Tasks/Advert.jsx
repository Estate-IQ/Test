import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import States from "../../../components/States/State";
import LGAs from "../../../components/States/State";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      estate_email: "",
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
    const { email, username, password } = this.state;
    Swal.fire({
      title: `<div className="control_dialog"><h1>${username}</h1> ,You just created an estate with the email ${email} and your password is ${password}</div>`,
      icon: "success",
      showConfirmButton: true,
      showCloseButton: true,
    }).then(function () {
      window.location = "/profile";
    });
    // alert(`Your registration detail: \n
    //          Email: ${email} \n
    //          Username: ${username} \n
    //          Password: ${password}`);

    // useNavigate("/profile", { replace: true });
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
          className="new_estates_form scale-up-center"
        >
          <p>Step {this.state.currentStep} of 2</p>
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
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
      {/* <label htmlFor="email">Email address</label> */}

      <div className="create_est ">
        <div className="form_txt">
          <h1>Create Estate</h1>
          <h4>Admin Info</h4>
        </div>
        <input
          type="text"
          id="username"
          value={props.first_name}
          onChange={props.handleChange}
          name="username"
          placeholder="First Name"
        />
        <input type="text" placeholder="Last Name" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleChange}
          required
        />
        <input type="number" placeholder="Mobile" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          value={props.password}
          onChange={props.handleChange}
          placeholder="Confirm Password"
        />
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
      {/* <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
      /> */}

      <div className="create_est ">
        <div className="form_txt">
          <h1>Create Estate</h1>
          <h4>Estate info</h4>
        </div>
        <input type="text" placeholder="Estate Name" />
        <input type="text" placeholder="Estate Address" />
        <input
          type="email"
          id="estate_email"
          name="estate_email"
          placeholder="Estate Email"
          value={props.email}
          onChange={props.handleChange}
          required
        />
        <input type="text" placeholder="Estate ID" />
        <div className="double_input">
          <States />
          <LGAs />
        </div>
      </div>
      <button
        onClick={returnSuccessMessage}
        className="btn btn-success btn-block"
      >
        Create Estate
      </button>
    </div>
  );
}

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <h2>Hello</h2>
//     </React.Fragment>
//   );
// }
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
      {/* ===========
      SUCESS MESSAGE
      ============== */}
      {/* <div
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
      </div> */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <MasterForm />
      </div>
    </div>
  );
};
export default Modal;
