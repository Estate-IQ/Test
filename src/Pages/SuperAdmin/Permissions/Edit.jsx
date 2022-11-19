import React, { useState } from "react";
import { SVGs } from "../../../assets/svg/SVGs";
import BreadCrumb from "../../../components/BreadCrumb";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/S-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import PermitedServices from "../../../components/SetPermission";
import styled from "styled-components";

/** ===Handle form Submission
 * PreventDefault(e)
 *
 */

const handleSubmit = (e) => {
  e.preventDefault(e);
};
const EditEachPackage = () => {
  const [selected, setSelected] = useState("Payment Method");
  const selectedPackage = (tags) => {
    console.log(tags);
  };
  return (
    <>
      <section className="change_ratio">
        <GNavbar permit="active_tab" />
        <Mobile />
        <section className="selected_tab">
          {/* ========
        WITH SEARCHBOX
        =========== */}
          <div className="navbar_container">
            <div className="dashboard_container input_avatar">
              <h6>Hello</h6>
              <div className="violet">
                <img src={SVGs.notification} alt="Bell" className="note_bell" />
                <div className="user_mode">
                  <div>
                    <h3>Oladokun Moses</h3>
                    <p>Super Admin</p>
                  </div>
                  <img src={Images.img2} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard - container */}
          <div className="dashboard_container">
            <form action="" onSubmit={handleSubmit}>
              <Update>
                <BreadCrumb
                  previous="Permission"
                  prevlink="/superadmin-permission"
                  current="Package Details"
                />

                <button className="important-btn">Update Package</button>
              </Update>

              <EditPackage>
                <div className="sax">
                  <label htmlFor="">
                    Package Cost
                    <input type="text" placeholder="Free" />
                  </label>
                  <label htmlFor="">
                    Preferred Payment Method
                    <Payment selected={selected} setSelected={setSelected} />
                  </label>
                </div>
                <div className="sax">
                  <label htmlFor="">
                    Bank name
                    <input type="text" placeholder="GTB" />
                  </label>
                  <label htmlFor="">
                    Account Name
                    <input type="text" placeholder="John Doe" />
                  </label>
                  <label htmlFor="">
                    Account Number
                    <input type="text" placeholder="0260822843" />
                  </label>
                </div>
              </EditPackage>

              <Permisions>
                {/* <h4>
                  Permisions <br /> <span>14 Access</span>
                </h4> */}

                <PermitedServices
                  selectedTags={selectedPackage}
                  tags={[
                    "Whatever Default Permission",
                    "More Permission",
                    "Send Direct Email to SuperAdmin",
                  ]}
                />
              </Permisions>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default EditEachPackage;

// PAYMENT METHOD
const Payment = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Credit Card", "Bank Account"];
  return (
    <div className="select_me filter_drop">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} />
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

const Permisions = styled.div`
  margin-top: 20px;
  position: relative;
  h4 {
    margin-bottom: 0;
    span {
      margin-top: 0;
    }
  }
  .tags-input {
    margin-top: 20px;
    position: absolute;
    right: 0;
    top: 0;
  }
  #tags {
    padding-top: 100px;
  }

  @media (min-width: 768px) {
    .tags-input {
      margin-top: 20px;
      width: 300px;
    }
  }
`;
const Update = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .current_bread {
    margin-left: 0;
    color: #;
  }
  button {
    height: 45px;
    padding-top: 6px;
    margin-top: 0px;
  }
`;

const EditPackage = styled.div`
  max-width: 780px;
  input {
    margin-bottom: 20px;
    margin-top: 5px;
  }
  label {
    padding: 5px;
  }
  .select-btn {
    height: 48px;

    margin-top: 5px;
    input {
      margin-top: 20px;
    }
  }
  @media (min-width: 768px) {
    .sax {
      display: flex;
      justify-content: space-between;
      label {
        width: 48%;
      }
    }
  }
`;
