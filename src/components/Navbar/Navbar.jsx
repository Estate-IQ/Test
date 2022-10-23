import React from "react";
import styled from "styled-components";
import { SVGs } from "../../assets/svg/SVGs";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  background: #2d4bf3;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05), 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid #f1f1f1;
  padding: 20px;
  height: 90px;
  z-index: 30;
  align-items: center;
  display: none;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
  img {
    margin-top: 5px;
    width: 136px !important;
    height: auto !important;
  }
`;

const Navbar = () => {
  return (
    <Nav className="dont_show_tab">
      <div className="logo">
        <img src={SVGs.brand_name} alt="" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
