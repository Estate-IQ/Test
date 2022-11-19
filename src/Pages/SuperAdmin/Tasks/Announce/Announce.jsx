import React, { useState } from "react";
import Swal from "sweetalert2";
import { SVGs } from "../../../../assets/svg/SVGs";

const Modal = ({ open, onClose }) => {
  const handleSubmit = (e) => {
    Swal.fire({
      title: `<div>You've successfully created an announcement </div>`,
      icon: "success",
      showConfirmButton: true,
      showCloseButton: true,
    });
    e.preventDefault();
  };
  if (!open) return null;
  return (
    <div onClick={onClose} className="bills_on_me">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <form
          // method="post"
          // action="/profile"
          onSubmit={handleSubmit}
          className="new_estates_form fade-in-bck"
        >
          <div className="create_est ">
            <div className="form_txt">
              <div className="capture_close">
                <h1>Announcement</h1>
              </div>
            </div>

            <input
              type="text"
              id="title"
              //   value=""
              name="title"
              placeholder="Announce Title"
            />

            <textarea
              id="description"
              name="description"
              value=""
              placeholder="Description"
            ></textarea>
            <input type="date" id="date" name="date" />
            <input type="time" id="time" name="time" />
          </div>
          <button>Publish</button>
        </form>
        <img src={SVGs.close} alt="" onClick={onClose} />
      </div>
    </div>
  );
};
export default Modal;
