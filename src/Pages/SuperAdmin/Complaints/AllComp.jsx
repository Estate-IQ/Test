import React, { useState } from "react";
import styled from "styled-components";

const Complaint = styled.div`
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  .top_level {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 10px;
      margin-right: 10px;
    }
    .select_me {
      max-width: 150px;
      width: 100%;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #999999;
  }
  .name_position {
    margin-top: 15px;
    display: flex;

    img {
      width: 35px;
      height: 35px;
      margin-right: 10px;
      object-fit: cover;
      border-radius: 50%;
    }
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      margin-top: 7px;
      span {
        font-weight: 700;
        color: #2d4bf3;
        font-size: 14px;
        margin-left: 10px;
        line-height: 13px;
        letter-spacing: -0.06em;
      }
    }
  }
`;

const ParentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    .perComponent {
      width: 48.5%;
    }
  }
  @media (min-width: 1240px) {
    .perComponent {
      width: 32.5%;
    }
  }
`;

const Action = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Resolved", "Pending"];
  return (
    <div className="select_me">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        <input type="text" value={selected} readOnly />

        <img
          src="https://www.svgrepo.com/show/356209/chevron-down.svg"
          alt="v"
        />
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

const AllComp = () => {
  const [selected, setSelected] = useState("Action");
  const PerComplain = () => {
    return (
      <Complaint className="perComponent">
        <div className="top_level">
          <div>
            <h2>Golden Gate Estate</h2>
            <p className="estateid">EIQ402</p>
          </div>
          <Action selected={selected} setSelected={setSelected} />
        </div>

        <div className="name_position">
          <img
            src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80"
            alt="user"
          />
          <h3>
            Lincoln Workman <span>Admin</span>
          </h3>
        </div>

        <p>
          This dummy text is supposed to include complainets from respective
          admins, either escalated or direct, and the super admin has the
          prerogagative to mark them as resolved as soon as he attends to them
        </p>

        <span>Jan 20, 2023</span>
      </Complaint>
    );
  };
  return (
    <ParentFlex>
      <PerComplain />
      <PerComplain />
      <PerComplain />
      <PerComplain />
      <PerComplain />
    </ParentFlex>
  );
};

export default AllComp;
