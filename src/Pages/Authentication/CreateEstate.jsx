import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SVGs } from "../../assets/svg/SVGs";
import States from "../../components/Location";
// import LGAs from "../../../components/States/State";
import { Images } from "../../assets/images/Images";
import styled from "styled-components";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      estateId: "",
      state: "",
      estateName: "",
      address: "",
      estateEmail: "",
      lga: "",
      agree: true,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // handleSearch(event) {
  //   this.setState({ inputValue: event.target.value });
  //   // 3
  // }

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
    const {
      email,
      firstName,
      password,
      state,
      address,
      estateEmail,
      lga,
      mobile,
      lastName,
      estateId,
      estateName,
    } = this.state;

    console.log(
      `${email}, ${firstName}, ${password}, ${state}, ${address},${estateEmail}, ${lga}, ${mobile}, ${lastName}, ${estateId}, ${estateName}`
    );

    Swal.fire({
      // title: `Hi <h1>${firstName}! </h1>You just created an estate with the email <h4> ${email} </h4> and your password is <h4>${password}</h4>   Kindly check your email to Get Started</div>`,
      title: `Hi <h1>${firstName} ! </h1>You have successfully created <h4> ${estateName} </h4> on EstateIQ. A welcome message has been sent to <h4> ${email} </h4> for verification</div>`,
      icon: "success",
      showConfirmButton: false,
      showCloseButton: true,
    });
    // .then(function () {
    //   window.location = "/estate-iq/superadmin-overview";
    // });

    fetch("", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then(() => {
      console.log("Form Submitted Successfully");
    });
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
        <div className="form_frame">
          <div className="renovated">
            <div className="plus_img">
              <img src={Images.logo} alt="Estate-IQ" />
              <form
                onSubmit={this.handleSubmit}
                // method="post"
                // action="/profile"
                className=" fade-in-bck"
              >
                <p>Step {this.state.currentStep} of 2</p>

                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  password={this.state.password}
                  mobile={this.state.mobile}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  handleSearch={this.handleSearch}
                  state={this.state.state}
                  estateId={this.state.estateId}
                  address={this.state.address}
                  estateName={this.state.estateName}
                  estateEmail={this.state.estateEmail}
                  lga={this.state.lga}
                  agree={this.state.false}
                />
                <div className="control_btn">
                  {this.previousButton()}
                  {this.nextButton()}
                </div>
              </form>
            </div>
          </div>
          <div className="create_img">
            <img src={Images.LoginPreview} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const FormVanilla = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 15px;
  }
  .important-btn {
    width: 100%;
    margin-top: 25px;
  }
`;

// ======
// STEP 1
// =====
function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <>
      <FormVanilla>
        <div className="fade-in-bck">
          <div className="form_txt">
            {/* <p>Step 1 of 2</p> */}
            <h1>Create Estate</h1>
            <h4>Admin Info</h4>
          </div>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={props.firstName}
            onChange={props.handleChange}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            value={props.lastName}
            onChange={props.handleChange}
            name="lastName"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={props.email}
            onChange={props.handleChange}
          />
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Mobile"
            value={props.mobile}
            onChange={props.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleChange}
          />
          <input
            name="Cpassword"
            type="password"
            value={props.Cpassword}
            onChange={props.handleChange}
            placeholder="Confirm Password"
          />
        </div>
      </FormVanilla>
    </>
  );
}

/**Function that generate Estate ID */
const HandleRamdomId = () => {
  document.getElementById("estateId").value = generateID(6);
};
function generateID(length) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}
// =======
// STEP 2
// =======
function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <>
      <FormVanilla>
        <div className="fade-in-bck">
          <div className="form_txt">
            {/* <p>Step 1 of 2</p> */}
            <h1>Create Estate</h1>
            <h4>Estate Info</h4>
          </div>
          <input
            type="text"
            placeholder="Estate Name"
            id="estateName"
            onKeyUp={HandleRamdomId}
            value={props.estateName}
            onChange={props.handleChange}
            name="estateName"
          />
          <input
            type="text"
            placeholder="Estate Address"
            id="address"
            value={props.address}
            onChange={props.handleChange}
            name="address"
          />
          <input
            type="email"
            placeholder="Estate Email"
            id="estateEmail"
            name="estateEmail"
            value={props.estateEmail}
            onChange={props.handleChange}
          />
          {/* <div className="double">
            <States
              inputValue={this.state.inputValue} // 4
              // handleSearch={this.handleSearch}
            />
            <States />
          </div> */}
          <input
            type="text"
            id="estateId"
            name="estateId"
            readOnly
            placeholder="Estate ID"
            value={props.estateId}
            onChange={props.handleChange}
          />
          <States handleSearch={props.handleSearch} state={props.state} />
          {/* <input
            name="state"
            type="text"
            placeholder="State"
            value={props.state}
            onChange={props.handleChange}
          /> */}
          <input
            name="lga"
            type="text"
            value={props.lga}
            onChange={props.handleChange}
            placeholder="L.G.A"
          />
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
            <span>
              I accept EstateIQ{" "}
              <a href="https://stackoverflow.com/questions/53013437/expected-assignment-or-function-call-no-unused-expressions-reactjs">
                Terms{" "}
              </a>{" "}
              and Conditions{" "}
            </span>
          </div>
          <button className="important-btn">Create Estate</button>
        </div>
      </FormVanilla>
    </>
  );
}

export default MasterForm;

/** Alert functions for handling event after submission
 * =====todo
 *   // alert(`Your registration detail: \n
    // Email: ${email} \n
    // Username: ${firstName} \n
    // state:  ${state} \n
    // Password: ${password}\n
    // `);
    // Swal.fire({
    //   title: `<h1>${firstName},</h1>You just created an estate with the email <h4> ${email} </h4> and your password is ${state} ${password}</div>`,
    //   icon: "success",
    //   showConfirmButton: true,
    //   showCloseButton: true,
    // });

    // useNavigate("/profile", { replace: true });

    // .then(function () {
    //   window.location = "/Test/profile";
    // });
 */
