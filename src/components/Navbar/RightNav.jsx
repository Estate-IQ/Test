import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";
import SVGs from "../../assets/svg/SVGs";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  li {
    padding: 14px 20px;
    color: #2c333a !important;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #e1e1e1;
    line-height: 22px;
    letter-spacing: 0em;
    margin: 0;
  }
  li:hover {
    padding: 14px 20px;
    background: #f2f6ff;
  }

  @media (max-width: 480px) {
    max-width: auto !important;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 78px;
    right: 0;
    height: 100vh;
    max-width: 400px;
    width: 100%;
    padding-bottom: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className="search_profile">
        <div className="violet">
          <div className="user_mode">
            <img src={Images.img1} alt="" />
            <div>
              <h3>Oladokun Moses</h3>
              <p>Super Admin</p>
            </div>
          </div>
        </div>

        {/* <input type="text" placeholder="Search" /> */}
      </div>
      <Link to="/">
        <li>Overview</li>
      </Link>
      <Link to="/superadmin-estate">
        <li>Estates</li>
      </Link>
      <Link to="">
        <li>Messages</li>
      </Link>
      <Link to="/superadmin-tasks">
        <li>Task</li>
      </Link>
      <Link to="/">
        <li>Permission</li>
      </Link>
      <Link to="/">
        <li>Complaints</li>
      </Link>
    </Ul>
  );
};

export default RightNav;
