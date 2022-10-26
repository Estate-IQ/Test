import React, { useState } from "react";
import { SVGs } from "../../assets/svg/SVGs";

const AllTask = () => {
  const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const [itemList, setitemList] = useState([
      {
        name: "Reactivate",
        id: "1",
        value: "reactivate",
      },
      {
        name: "Completed",
        id: "2",
        value: "completed",
      },
      {
        name: "Pending",
        id: "3",
        value: "pending",
      },
      {
        name: "Cancel",
        id: "2",
        value: "cancel",
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
            {selectedIndex !== null ? itemList[selectedIndex].name : "Action"}
            <img
              src="https://www.svgrepo.com/show/349653/chevron-down.svg"
              alt="b"
            />
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
  const PerTask = () => {
    return (
      <section className="perTask">
        <div className="caution_name">
          <img src={SVGs.caution} alt="caution" />
          <div className="c_tag">
            <span>Reminder</span>
            <p>
              Golden Gate Estate <span>333333</span>
            </p>
            <h4>Subscription Expired</h4>
            <h5>Jan 20, 2023</h5>
          </div>
        </div>

        <Dropdown />
      </section>
    );
  };
  return (
    <div>
      <PerTask />
      <PerTask />
    </div>
  );
};

export default AllTask;
