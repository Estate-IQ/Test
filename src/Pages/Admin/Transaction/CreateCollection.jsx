import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../../../assets/svg/SVGs";
import Frequency from "../../../components/Frequency";
import CollectionTarget from "../../../components/CollectionTarget";
import States from "../../../components/Location";
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
      accountName: "",
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
          <p>Step {this.state.currentStep} of 2</p>

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            password={this.state.password}
            C_password={this.state.C_password}
            date={this.state.date}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            accountName={this.state.accountName}
            collectionAmount={this.state.collectionAmount}
            accountNumber={this.state.accountNumber}
            bank={this.state.bank}
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
  const [selected, setSelected] = useState("Select Collection Frequency");
  const [collectionTarget, setCollectionTarget] = useState("Collection Target");
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt">
          <h3>Define Collection</h3>
          <h4>Collection Info</h4>
        </div>
        <input
          type="text"
          id="firstName"
          value={props.firstName}
          onChange={props.handleChange}
          name="firstName"
          placeholder="Collection Name"
        />
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={props.lastName}
          onChange={props.handleChange}
          name="lastName"
        />
        <Frequency selected={selected} setSelected={setSelected} />
        <CollectionTarget
          selected={collectionTarget}
          setSelected={setCollectionTarget}
        />
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Due Date"
          value={props.date}
          onChange={props.handleChange}
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
      <div className="create_est ">
        <div className="form_txt">
          <h3>Define Collection</h3>
          <h4>Payment Info</h4>
        </div>
        <input
          type="text"
          id="bank"
          name="bank"
          onKeyUp={HandleRamdomId}
          placeholder="Bank"
          value={props.bank}
          onChange={props.handleChange}
        />
        <input
          type="number"
          id="accountNumber"
          name="accountNumber"
          placeholder="Account Number"
          value={props.accountNumber}
          onChange={props.handleChange}
        />
        <input
          type="text"
          id="accountName"
          name="accountName"
          placeholder="Account Name"
          value={props.accountName}
          onChange={props.handleChange}
          required
        />
        <input
          type="text"
          id="collectionAmount"
          name="collectionAmount"
          placeholder="Collection Amount"
          readOnly
          value={props.collectionAmount}
          onChange={props.handleChange}
        />

        {/* <States handleSearch={props.handleSearch} state={props.state} /> */}
      </div>
      <button
        onClick={returnSuccessMessage}
        className="btn btn-success btn-block"
      >
        Create Collection
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
