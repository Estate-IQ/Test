import React, { useState } from "react";
import JSON from "./Data.json";
import Pagination from "https://cdn.skypack.dev/rc-pagination@3.1.15";
import Modal from "./AddNew";
import SVGs from "../../../assets/svg/SVGs";
import Images from "../../../assets/images/Images";
import GNavbar from "../../../components/Navbar/DesktopTab";
import Mobile from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
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
  const [perPage, setPerPage] = useState(8);
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
                {/*========
                ALL ESTATES
                ==========*/}
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
      </section>
    </section>
  );
};

export default Estate;
