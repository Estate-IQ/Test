import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import AddPenalties from "../../components/CreateCollection";
import EditCollection from "../../components/EditCollection";
import AdminTransactionAction from "../../components/AdminTransactionAction";
import GNavbar from "../../components/Navbar/A-Navigator";
import Mobile from "../../components/Navbar/Navbar";
import TopNav from "../../components/Navbar/AdminNav";

import AdminTransactionTable from "../../components/AdminTransactionTable";
// import SetUpPK from "./SetUpPenalties";

function AdminTransaction() {
  const [events, setEvents] = useState(API.slice(0, 20));

  const [value, setvalue] = useState("");
  const [emergency, setEmergency] = useState("Penalties");
  const [penalty, setPenalty] = useState(false);
  const [edit, setEditCollection] = useState(false); // state for Modal
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal

  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

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
              <span
                className="edit-btn"
                onClick={() => setEditCollection(true)}
              >
                Edit
              </span>
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
        <GNavbar transaction="active_tab" />
        <Mobile />
        <EditCollection open={edit} onClose={() => setEditCollection(false)} />

        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <AdminTransactionAction />
              <AddPenalties open={penalty} onClose={() => setPenalty(false)} />
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableFrame>
                  <div className="team-members">
                    <h2>Collection</h2>
                    <div className="Utility_table">{displayEvents}</div>
                  </div>

                  {/* Table is coming from another Component */}
                  <AdminTransactionTable />
                </TableFrame>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminTransaction;

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
    h2 {
      font-size: 20px;
      margin-bottom: 15px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .Utility_table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
];
