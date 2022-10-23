import React, { useState } from "react";
import SVGs from "../assets/svg/SVGs";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [itemList, setitemList] = useState([
    {
      name: "Fola",
      id: "1",
      value: "fola",
    },
    {
      name: "Jonathan",
      id: "2",
      value: "John",
    },
  ]);
  const [selectedIndex, setselectedIndex] = useState(null);
  return (
    <>
      <div className="main_drop">
        <div
          className="main_drop_btn"
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        >
          {/* items */}
          {selectedIndex !== null ? itemList[selectedIndex].name : "user"}
          <img src={SVGs.chevron_down} alt="" />
        </div>
        {isActive ? (
          <div className="selections">
            {itemList.map((item, index) => (
              <div
                key={item.value}
                className="selected"
                onClick={(e) => {
                  setselectedIndex(index);
                  setIsActive(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Dropdown;
