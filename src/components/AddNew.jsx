import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: "",
      password: "",
      C_password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      residentType: "",
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
    const { email, estateName, firstName, password, state, residentType } =
      this.state;
    // alert(`Your registration detail: \n
    // Email: ${email} \n
    // Username: ${firstName} \n
    // Username:  ${state} \n
    // Password: ${password}\n
    // `);

    console.log(residentType);
    Swal.fire({
      title: `A mail has been sent to <h4>${email}</h4> for verification `,
      icon: "success",
      showConfirmButton: true,
      showCloseButton: true,
    });

    // useNavigate("/profile", { replace: true });

    // .then(function () {
    //   window.location = "/Test/profile";
    // });
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.handleSubmit}
          // method="post"
          // action="/profile"
          className="new_estates_form swing-in-bottom-fwd"
        >
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            estateEmail={this.state.estateEmail}
            residentType={this.state.residentType}
            estate_ads={this.state.estate_ads}
            estateName={this.state.estateName}
          />
        </form>
      </React.Fragment>
    );
  }
}

function Step2(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <div className="create_est ">
        <div className="form_txt single_form">
          <h1>Add Resident</h1>
        </div>
        <SearchField
          handleSearch={props.handleSearch}
          residentType={props.residentType}
        />
        <input
          type="text"
          id="firstName"
          value={props.firstName}
          onChange={props.handleChange}
          name="firstName"
          placeholder="First Name"
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
          id="email"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleChange}
          required
        />
        <input
          type="number"
          id="mobile"
          name="mobile"
          placeholder="Mobile"
          value={props.mobile}
          onChange={props.handleChange}
        />
      </div>
      <button
        onClick={returnSuccessMessage}
        className="btn btn-success btn-block"
      >
        Send Invite
      </button>
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
        <img
          src="https://www.svgrepo.com/show/311932/close.svg"
          alt=""
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default Modal;

const SearchField = (props) => {
  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    props.handleSearch(searchTerm);

    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="">
      <div className="custom_search">
        <div className="search-inner" onClick={(e) => setIsActive(!isActive)}>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onChange}
            placeholder="Resident Type (e.g Vendor, Security, Resident Member)"
          />
          {/* <button onClick={() => onSearch(value)}> Search </button> */}
        </div>
        {isActive && (
          <div className="search_result" id="Drop">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item)}
                  className="drop_items"
                  key={item}
                >
                  {item}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

// let data = useFetch("https://jsonplaceholder.typicode.com/posts");

// fetch(data)
//   .then((response) => {
//     return response.json();
//   })
//   .then((d) => {
//     this.setState({ clouds: d });
//     console.log("state", this.state.clouds);
//   })
//   .catch((error) => console.log(error));
let data = ["Resident Member", "Vendors", "Security"];
