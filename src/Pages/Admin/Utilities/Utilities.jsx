import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import AddNewUtilities from "./NewUtility";
import GNavbar from "../../../components/Navbar/A-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import TopNav from "../../../components/Navbar/AdminNav";
import { SVGs } from "../../../assets/svg/SVGs";

function AdminUtility() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");
  const [resident, setResident] = useState("Add New");
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal

  const [selected, setSelected] = useState("Filter");
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  /** ======to do
   * 1. Handle all form event with handleChange function
   * 2. No need for Filter as all blog display at one.Navigate using the pagination
   */

  const handleOnchange = (val) => setvalue(val);
  // const [ API, setData ] = useState(API)
  const eventsPerPage = 8;
  const pagesVisited = pageNumber * eventsPerPage;

  const filterEvents = (catItem) => {
    const result = API.filter((curDate) => {
      return curDate.category === catItem;
    });
    setEvents(result);
  };

  const displayEvents = events
    .filter((event) => {
      if (searchTerm === "") {
        return event;
      } else if (
        event.utility.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const { id, utility, acct_number, amount, bank } = event;

      return (
        <div className="utils" key={id}>
          <div className="util-payment">
            <div className="name_tag">
              <h4>{utility}</h4>
              <button>{utility}</button>
            </div>

            <div className="util-acct">
              <p>
                Price: <b>{amount}</b>
              </p>
              <div className="price">
                <p>
                  {bank}: <b>{acct_number}</b>
                </p>
              </div>
            </div>
            <div className="btn">
              <span className="edit-btn">Edit</span>
              <span className="del-btn">Delete</span>
            </div>
          </div>
        </div>
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };

  return (
    <>
      <section className="change_ratio">
        <GNavbar utility="active_tab" />
        <Mobile />
        <AddNewUtilities open={openModal} onClose={() => setOpenModal(false)} />
        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <h6></h6>
                <div className="event-input">
                  <div class="search_set">
                    <img
                      src="https://www.svgrepo.com/show/13682/search.svg"
                      alt=""
                    />
                    <input
                      className="eventt"
                      type="text"
                      name="name"
                      placeholder="Search"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    className="important-btn"
                    onClick={() => setOpenModal(true)}
                  >
                    Add Utility
                  </button>
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableFrame>
                  <div className="team-members">
                    <div className="Utility_table">{displayEvents}</div>
                  </div>
                </TableFrame>
              </div>
            </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminUtility;

const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  .event-input {
    max-width: 675px;
  }
  @media (max-width: 420px) {
    .search_set,
    button {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    .search_set {
      width: 220px;
    }
    .outlined {
      width: 180px !important;
    }
    .event-input {
      display: flex;
      justify-content: space-between;
      //   width: 57%;
      .select_me {
        margin: 0 10px;
        width: 135px;
      }
      button {
        margin-top: 0;
        height: 45px;
        margin-left: 10px;
      }
      .event-select {
        width: 20%;
      }
    }
  }
  @media (max-width: 540px) {
    .event-input {
      .event-select {
        display: none;
      }
    }
  }
  .tabs {
    margin: 0;
    margin-bottom: 30px;
    .tab {
      margin: 0;
      height: 45px;
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      min-width: 100px;
      padding: 5px 20px;
      text-align: center;
      margin-right: 15px;
      border-bottom: 3px solid #c0c0c0;
      button {
        margin: 0;
        padding: 0 !important;
        padding: 10px;
        //styleName: Web/Small Copy;

        font-size: 16px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .active {
      background: transparent;
      border-bottom: 3px solid #2d4bf3;
      button {
        color: #2d4bf3;
      }
    }
  }
  .normal_tab.add_tape {
    border-bottom: 2px solid yellow;
  }
`;
const TableFrame = styled.div`
  .team-members {
    margin-top: 40px;
  }

  .Utility_table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 10px;
  }
  .btn {
    display: flex;
  }
  .utils {
    margin-bottom: 10px;

    padding: 16px;
    width: 100%;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    .name_tag {
      h4 {
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
      button {
        margin: 0;
        font-weight: 400;
        padding: 2px 8px;

        font-size: 14px;
        margin-top: 10px;
        background: #f2f6ff;
        border: 1px solid #2d4bf3;
        border-radius: 5px;
      }
    }
  }

  .reason {
    width: 128px;
    height: 24px;
    background: #f2f6ff;
    border: 1px solid #2d4bf3;
    border-radius: 5px;
    padding: 4px 8px;
  }
  .price {
    margin-top: 10px;
  }
  .util-acct {
    margin-top: 10px;
  }

  .del-btn {
    color: #ff6969;
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-left: 15px;
    cursor: pointer;
  }
  .edit-btn {
    color: #2d4bf3;
    // display: flex;

    cursor: pointer;

    font-weight: 500;
    font-size: 16px;
    display: inline-block;
    line-height: 16px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 540px) {
    .utils {
      width: 48%;
    }
  }
  @media (min-width: 1024px) {
    .utils {
      width: 33%;
    }
  }
  @media (min-width: 1200px) {
    .utils {
      width: 24%;
    }
  }
`;

// DATA
const API = [
  {
    id: 1,
    utility: "Security",
    acct_number: "7863788609",
    amount: "$872.61",
    bank: "First Bank",
  },
  {
    id: 2,
    utility: "Security",
    acct_number: "1268716820",
    amount: "$694.69",
    bank: "Union Bank",
  },
  {
    id: 3,
    utility: "Gas Supply",
    acct_number: "4588069217",
    amount: "$324.34",
    bank: "Access Bank",
  },
  {
    id: 4,
    utility: "Gas Supply",
    acct_number: "1877323578",
    amount: "$252.99",
    bank: "Fidelity",
  },
  {
    id: 5,
    utility: "Power & Electricity",
    acct_number: "7659359215",
    amount: "$487.68",
    bank: "GTB",
  },
  {
    id: 6,
    utility: "Gym",
    acct_number: "8842826820",
    amount: "$851.14",
    bank: "Access Bank",
  },
  {
    id: 7,
    utility: "Gym",
    acct_number: "7792239357",
    amount: "$120.51",
    bank: "Access Bank",
  },
  {
    id: 8,
    utility: "Gas Supply",
    acct_number: "7493635862",
    amount: "$601.81",
    bank: "GTB",
  },
  {
    id: 9,
    utility: "Gas Supply",
    acct_number: "2681859247",
    amount: "$740.59",
    bank: "Union Bank",
  },
  {
    id: 10,
    utility: "Gas Supply",
    acct_number: "5416928220",
    amount: "$857.18",
    bank: "Access Bank",
  },
  {
    id: 11,
    utility: "Power & Electricity",
    acct_number: "3178208909",
    amount: "$502.65",
    bank: "First Bank",
  },
  {
    id: 12,
    utility: "Power & Electricity",
    acct_number: "4667524014",
    amount: "$305.80",
    bank: "Union Bank",
  },
  {
    id: 13,
    utility: "Sevice Charge",
    acct_number: "8084051660",
    amount: "$360.30",
    bank: "Union Bank",
  },
  {
    id: 14,
    utility: "Gas Supply",
    acct_number: "7939738321",
    amount: "$970.15",
    bank: "Access Bank",
  },
  {
    id: 15,
    utility: "Security",
    acct_number: "9366197523",
    amount: "$331.96",
    bank: "Access Bank",
  },
  {
    id: 16,
    utility: "Sevice Charge",
    acct_number: "8870583112",
    amount: "$290.10",
    bank: "GTB",
  },
  {
    id: 17,
    utility: "Sevice Charge",
    acct_number: "1740723090",
    amount: "$897.99",
    bank: "First Bank",
  },
  {
    id: 18,
    utility: "Gas Supply",
    acct_number: "1736487108",
    amount: "$284.99",
    bank: "Union Bank",
  },
  {
    id: 19,
    utility: "Gym",
    acct_number: "2571051172",
    amount: "$287.70",
    bank: "Access Bank",
  },
  {
    id: 20,
    utility: "Power & Electricity",
    acct_number: "6548022874",
    amount: "$961.63",
    bank: "Access Bank",
  },
  {
    id: 21,
    utility: "Security",
    acct_number: "3505799130",
    amount: "$516.89",
    bank: "Access Bank",
  },
  {
    id: 22,
    utility: "Gym",
    acct_number: "6793565982",
    amount: "$141.73",
    bank: "GTB",
  },
  {
    id: 23,
    utility: "Gym",
    acct_number: "3452530108",
    amount: "$269.36",
    bank: "Fidelity",
  },
  {
    id: 24,
    utility: "Security",
    acct_number: "2390006590",
    amount: "$919.93",
    bank: "GTB",
  },
  {
    id: 25,
    utility: "Gas Supply",
    acct_number: "5130632621",
    amount: "$811.44",
    bank: "Access Bank",
  },
  {
    id: 26,
    utility: "Sevice Charge",
    acct_number: "6487242071",
    amount: "$925.48",
    bank: "Fidelity",
  },
  {
    id: 27,
    utility: "Power & Electricity",
    acct_number: "9335013889",
    amount: "$743.38",
    bank: "Fidelity",
  },
  {
    id: 28,
    utility: "Security",
    acct_number: "6361980766",
    amount: "$697.39",
    bank: "Access Bank",
  },
  {
    id: 29,
    utility: "Sevice Charge",
    acct_number: "4182942795",
    amount: "$975.03",
    bank: "Union Bank",
  },
  {
    id: 30,
    utility: "Power & Electricity",
    acct_number: "9433974298",
    amount: "$103.10",
    bank: "Fidelity",
  },
];
