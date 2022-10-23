import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/images/Images";
import SVGs from "../../assets/svg/SVGs";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 14px 20px;
    color: #2c333a !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
  }
  li:hover {
    padding: 14px 20px;
    background: #f2f6ff;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
      0px 2px 8px rgba(0, 0, 0, 0.05);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 88px;
    right: 0;
    height: 100vh;
    max-width: 400px;
    width: 100%;
    padding-bottom: 3.5rem;
    transition: transform 0.4s ease-in-out;
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

        <input type="text" placeholder="Search" />
      </div>

      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default RightNav;
