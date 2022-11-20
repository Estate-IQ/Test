import React, { useState } from "react";
import JSON from "./Data.json";
// // import Pagination from "rc-pagination";
import Modal from "./AddNew";
import { SVGs } from "../../../assets/svg/SVGs";
import { Images } from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/S-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import TopNav from "../../../components/Navbar/TopNav";

const Estate = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  // ======STATES FOR PAGINATION
  const datatableUsers = JSON;
  const [perPage, setPerPage] = useState(9);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);
  const [notify, setNotification] = useState("notification");

  const handleNotification = () => {
    notify === "notification"
      ? setNotification("notification active")
      : setNotification("notification");
  };
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

  return (
    <section className="change_ratio">
      <GNavbar estate="active_tab" />
      <Mobile />
      <section className="selected_tab">
        {/* ============
        WITH SEARCHBOX
        =============== */}
        <div className="navbar_container">
          <div className="dashboard_container input_avatar">
            <input
              type="text"
              placeholder="Search Estate..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <div className="violet">
              <img
                src={SVGs.notification}
                alt="Bell"
                onClick={handleNotification}
                className="note_bell"
              />
              <Notification className={notify} id="swing-in-top-fwd">
                <div className="n_badge">
                  <h2>Notification</h2>
                  <div className="all_notification">
                    {API.map((item) => {
                      return (
                        <div
                          className="each_noti"
                          id={
                            item.types === "Message"
                              ? "messagesBg"
                              : "Alert"
                              ? "alertBg"
                              : "messagesBg"
                          }
                          key={item.id}
                        >
                          <p>{item.types}</p>
                          <h4>
                            {item.estate}
                            <span>{item.msg_id}</span>
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Notification>
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
          <div className="estates_tab">
            <div className="adding_new">
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  All Estates (30)
                </button>
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Active Estates (25)
                </button>
                <button
                  className={`tab ${checkActive(3, "active")}`}
                  onClick={() => handleClick(3)}
                >
                  Inactive Estate (5)
                </button>
                <button
                  className={`tab ${checkActive(4, "active")}`}
                  onClick={() => handleClick(4)}
                >
                  Estate Approval Pending (5)
                </button>
              </div>
              <button
                className="important-btn"
                onClick={() => setOpenModal(true)}
              >
                Add New Estate
              </button>
            </div>

            {/* RESULT FROM TAB */}
            <div className="panels flex_2">
              <div className={`panel ${checkActive(1, "active")}`}>
                <div className="threecards_grid estate_cards">
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
                        <div className="per_estate" key={data.id}>
                          <Link to="/profile">
                            <button className="outlined-btn">
                              Deluxe Package
                            </button>
                            <div className="name_id">
                              <h2>{data.estate_name}</h2>
                              <p>{data.unique_id}</p>
                            </div>
                            <h3>{data.number} Residents</h3>
                            <div className="location_before">
                              <p>
                                Plot 33, Abubakar Tafawa Balewa Way Central
                                Business District, Cadastral Zone, Abuja,
                              </p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className={`panel ${checkActive(2, "active")}`}>
                {/*==========
                ACTIVE ESTATES
                ============*/}
                <div className="threecards_grid estate_cards">
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
                        <div className="per_estate" key={data.id}>
                          <button className="outlined-btn">
                            Deluxe Package
                          </button>
                          <div className="name_id">
                            <h2>{data.estate_name}</h2>
                            <p>EIQ403432</p>
                          </div>
                          <h3>2000 Residents</h3>
                          <div className="location_before">
                            <p>
                              Plot 33, Abubakar Tafawa Balewa Way Central
                              Business District, Cadastral Zone, Abuja,
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={`panel ${checkActive(3, "active")}`}></div>
              <div className={`panel ${checkActive(4, "active")}`}></div>
            </div>
          </div>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        {/* <Pagination
          className="pagination-data"
          // showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
          onChange={PaginationChange}
          total={datatableUsers.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
        /> */}
      </section>
    </section>
  );
};

export default Estate;

let API = [
  {
    id: 1,
    types: "Alert",
    estate: "Dolphin Estate",
    msg_id: "KIP403435",
  },
  {
    id: 2,
    types: "Message",
    estate: "Dolphin Estate",
    msg_id: "KIP403435",
  },
  {
    id: 3,
    types: "Advert",
    estate: "Golden Gate Estate",
    msg_id: "EIQ403432",
  },
  {
    id: 4,
    types: "Reminder",
    estate: "Golden Gate Estate",
    msg_id: "MIW405432",
  },
  {
    id: 5,
    types: "Alert",
    estate: "Banana Island",
    msg_id: "EIQ403432",
  },
];
let Notification = styled.div`
  position: relative;
  display: none;
  .n_badge {
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #f3f3f3;
    right: 0;
    top: 56px;
    width: 360px;

    border-radius: 8px;
    .all_notification {
      height: 360px;
      overflow: auto;
      padding: 10px 15px;
      .each_noti {
        padding: 10px 5px;
        border-bottom: 1px solid rgba(33, 33, 33, 0.15);
        padding-left: 60px;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
        p {
          margin: 0;
        }
        h4 {
          font-size: 18px;
          font-weight: 700;
          line-height: 21px;
          letter-spacing: -0.03em;
          text-align: left;

          span {
            color: #2d4bf3;
            font-size: 16px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: -0.06em;
            text-align: left;
            margin-left: 8px;
            &:before {
              content: "";
              display: inline-block;
              width: 7px;
              height: 7px;
              border-radius: 50%;
              margin-right: 5px;
              background: #2d4bf3;
            }
          }
        }
      }
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      text-align: center !important;
      letter-spacing: 0em;
      padding: 12px;
      margin: 0 !important;
      background-color: #ffffff;
      box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.05),
        0px 2px 8px rgba(0, 0, 0, 0.05);
      border-radius: 8px 8px 0px 0px;
      text-align: left;
    }
    &:after {
      content: "";
      display: inline-block;
      width: 20px;
      background: #ffffff;
      height: 20px;
      border-radius: 3px;
      transform: rotate(45deg);
      top: -10px;
      position: absolute;
      right: 25px;
    }
  }
`;
