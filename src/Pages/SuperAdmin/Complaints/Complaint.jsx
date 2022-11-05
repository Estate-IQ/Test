import React, { useState } from "react";
import JSON from "./Data.json";
import Pagination from "rc-pagination";
import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/DesktopTab";
import Mobile from "../../../components/Navbar/Navbar";

import AllComp from "./AllComp";
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

const Estate = () => {
  const [selected, setSelected] = useState("Hello");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);

  const [isActive, setIsActive] = useState(false);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  //   // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");

  // ======STATES FOR PAGINATION
  const datatableUsers = JSON;
  const [perPage, setPerPage] = useState(9);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(datatableUsers.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    // Normally you should get the data from the server
    return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };

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
            {options.map((option, index) => (
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

  return (
    <section className="change_ratio">
      <GNavbar complain="active_tab" />
      <Mobile />
      <section className="selected_tab">
        {/* ============
        WITH SEARCHBOX
        =============== */}
        <div className="navbar_container">
          <div className="dashboard_container input_avatar">
            <input
              type="text"
              placeholder="Search Complaint"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <div className="violet">
              <img src={SVGs.notification} alt="Bell" className="note_bell" />
              <div className="user_mode">
                <div>
                  <h3>Oladokun Adebayo</h3>
                  <p>Super Admin</p>
                </div>
                <img src={Images.img2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard - container */}
        <div className="dashboard_container">
          <div className="estates_tab">
            <div className="creating_task">
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  All Complaints (30)
                </button>
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Resolved (25)
                </button>
                <button
                  className={`tab ${checkActive(3, "active")}`}
                  onClick={() => handleClick(3)}
                >
                  Pending (25)
                </button>
              </div>
              {/* <NewTask /> */}
              {/* <SelectDrop selected={selected} setSelected={setSelected} /> */}
            </div>

            {/* RESULT FROM TAB */}
            <div className="panels flex_2">
              <div className={`panel ${checkActive(1, "active")}`}>
                {/* <AllComp /> */}
                <ParentFlex>
                  {getData(current, size)
                    .filter((val) => {
                      if (searchInput == "") {
                        return val;
                      } else if (
                        val.estate_name
                          .toLowerCase()
                          .includes(searchInput.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((data, index) => {
                      return (
                        <Complaint className="perComponent">
                          <div className="top_level">
                            <div>
                              <h2>Golden Gate Estate</h2>
                              <p className="estateid">EIQ402</p>
                            </div>
                            <Action
                              selected={selected}
                              setSelected={setSelected}
                            />
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
                            This dummy text is supposed to include complainets
                            from respective admins, either escalated or direct,
                            and the super admin has the prerogagative to mark
                            them as resolved as soon as he attends to them
                          </p>

                          <span>Jan 20, 2023</span>
                        </Complaint>
                      );
                    })}
                </ParentFlex>
                <Pagination
                  className="pagination-data"
                  // showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
                  onChange={PaginationChange}
                  total={datatableUsers.length}
                  current={current}
                  pageSize={size}
                  showSizeChanger={false}
                  itemRender={PrevNextArrow}
                  onShowSizeChange={PerPageChange}
                />
              </div>

              <div className={`panel ${checkActive(2, "active")}`}></div>
              <div className={`panel ${checkActive(3, "active")}`}></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Estate;
