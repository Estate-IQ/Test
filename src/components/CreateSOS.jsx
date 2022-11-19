import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { SVGs } from "../assets/svg/SVGs";

const handleSubmit = (event) => {
  event.preventDefault();
  const { title, description, fileName } = event;

  Swal.fire({
    title: `<div>You created profile for <h4> ${title}</h4> </div>`,
    icon: "success",
    showConfirmButton: true,
    showCloseButton: true,
  });

  // .then(function () {
  //   window.location = "/superadmin-tasks";
  // });
};

const CreateSOS = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("Profile Type");
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <form
      onSubmit={handleSubmit}
      // method="post"
      // action="/profile"
      className="new_estates_form fade-in-bck"
    >
      <div className="form-group">
        {/* <label htmlFor="title">Email address</label> */}

        <div className="create_est ">
          <div className="form_txt">
            <div className="capture_close">
              <h1>SOS Profile</h1>
            </div>
          </div>

          <input type="text" id="name" name="name" placeholder="Profile Type" />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Emergency Service Name"
          />

          {/* Create Account Type */}
          <CreateEmergencyContact
            selected={selected}
            setSelected={setSelected}
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            id="phone"
            name="phone"
            placeholder="Mobile"
          />
          <input
            type="email"
            value={inputValue}
            onChange={handleInputChange}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <button>Create Profile</button>
      </div>
    </form>
  );
};

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <ModalWrapper onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <CreateSOS />
        <img src={SVGs.close} alt="" onClick={onClose} />
      </div>
    </ModalWrapper>
  );
};
export default Modal;

const CreateEmergencyContact = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me filter_drop">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly />
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 9L12.5 15L18.5 9"
            stroke="#545454"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          {/* <h5>Duration</h5> */}
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
let ModalWrapper = styled.div`
  .modalContainer {
    max-width: 600px;
    .new_estates_form {
      max-width: 600px;
    }
  }
`;
