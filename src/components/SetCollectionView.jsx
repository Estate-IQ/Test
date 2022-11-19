import React, { useState } from "react";
import { SVGs } from "../assets/svg/SVGs";
import styled from "styled-components";
import CollectionTableList from "./CollectionList";
// import States from "../../../components/Location";
// import LGAs from "../../../components/States/State";

const CollectionView = () => {
  return (
    <ColletionTable>
      <h3 className="major">Collections</h3>
      <CollectionTableList />
    </ColletionTable>
  );
};

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <HandleBlur onClick={onClose} className="bills_on_me">
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <CollectionView />
        <img src={SVGs.close} alt="" onClick={onClose} />
      </ModalContainer>
    </HandleBlur>
  );
};
export default Modal;

let HandleBlur = styled.section``;
let ModalContainer = styled.div`
  max-width: 100% !important;
  overflow: hidden !important;

  background: #ffffff;
  .scrollable_table {
    max-width: 1200px !important;
  }
`;
let ColletionTable = styled.section`
  .change_ratio {
    display: block;
  }
  .major {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    padding-top: 25px;
    padding-left: 20px;
  }
  .cntr {
    margin-top: 10px;
  }
`;
