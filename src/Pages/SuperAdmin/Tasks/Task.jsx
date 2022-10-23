import React, { useState } from "react";
// import JSON from "./Data.json";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import NewTask from "./NewTask";
import SVGs from "../../../assets/svg/SVGs";
import Images from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/DesktopTab";
import Mobile from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
// import TopNav from "../../../components/Navbar/TopNav";

const Estate = () => {
  const [download, setDownload] = useState("New Task");
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  //   // SEARCH INPUT
  const [searchInput, setSearchInput] = useState("");
  //   // ======STATES FOR PAGINATION
  //   const datatableUsers = JSON;
  //   const [perPage, setPerPage] = useState(8);
  //   const [size, setSize] = useState(perPage);
  //   const [current, setCurrent] = useState(1);

  //   const PerPageChange = (value) => {
  //     setSize(value);
  //     const newPerPage = Math.ceil(datatableUsers.length / value);
  //     if (current > newPerPage) {
  //       setCurrent(newPerPage);
  //     }
  //   };

  //   const getData = (current, pageSize) => {
  //     // Normally you should get the data from the server
  //     return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
  //   };

  //   const PaginationChange = (page, pageSize) => {
  //     setCurrent(page);
  //     setSize(pageSize);
  //   };

  //   const PrevNextArrow = (current, type, originalElement) => {
  //     if (type === "prev") {
  //       return (
  //         <button>
  //           <i className="fa fa-angle-double-left"></i>
  //         </button>
  //       );
  //     }
  //     if (type === "next") {
  //       return (
  //         <button>
  //           <i className="fa fa-angle-double-right"></i>
  //         </button>
  //       );
  //     }
  //     return originalElement;
  //   };

  return (
    <section className="change_ratio">
      <GNavbar task="active_tab" />
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
          <div className="estates_tab">
            <div className="adding_new">
              <div className="tabs">
                <button
                  className={`tab ${checkActive(1, "active")}`}
                  onClick={() => handleClick(1)}
                >
                  Active Task (30)
                </button>
                <button
                  className={`tab ${checkActive(2, "active")}`}
                  onClick={() => handleClick(2)}
                >
                  Pending task (25)
                </button>
                <button
                  className={`tab ${checkActive(3, "active")}`}
                  onClick={() => handleClick(3)}
                >
                  Completed task (25)
                </button>
              </div>
              {/* <button
                className="important-btn"
                onClick={() => setOpenModal(true)}
              >
                Add New Estate
              </button> */}
              <NewTask selected={download} setSelected={setDownload} />
            </div>

            {/* RESULT FROM TAB */}
            <div className="panels flex_2">
              <div className={`panel ${checkActive(1, "active")}`}>
                <h2>Hi</h2>
              </div>

              <div className={`panel ${checkActive(2, "active")}`}>
                {/*==========
                ACTIVE ESTATES
                ============*/}
              </div>
              <div className={`panel ${checkActive(3, "active")}`}></div>
              <div className={`panel ${checkActive(4, "active")}`}></div>
            </div>
          </div>
        </div>
        {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
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
