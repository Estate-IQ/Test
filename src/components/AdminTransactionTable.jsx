import React, { useState } from "react";
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import FilterBy from "./FilterBy";

const AdminTransactionTable = () => {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("Filter");
  const eventsPerPage = 9;
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
        event.collection_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        collection_name,
        zone,
        collection,
        date,
        amount,
        collection_target,
      } = event;

      return (
        <tr className="transaction-row">
          <td className="checkmarking">
            {/* CUSTOM CHECKBOX */}
            <div class="cntr">
              <label for={id} class="label-cbx">
                <input id={id} type="checkbox" class="invisible" />
                <div class="checkbox">
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                  </svg>
                </div>
              </label>
            </div>
          </td>

          <td>{collection_name}</td>
          <td>
            <div className="data-zone">
              <div className="zone-name">{zone}</div>
            </div>
          </td>

          <td>{collection}</td>
          <td>{collection_target}</td>
          <td className="transaction-date">{date}</td>
          <td>{amount} </td>
        </tr>
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };
  return (
    <Container>
      <section className="dinko">
        <HandleSearchAndTab>
          <h6></h6>
          <div className="event-input">
            <div class="search_set">
              <img src="https://www.svgrepo.com/show/13682/search.svg" alt="" />
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

            <FilterBy selected={selected} setSelected={setSelected} />
            <button className="outlined-btn">Generate Invoice </button>
          </div>
        </HandleSearchAndTab>
      </section>
      <TableFrame className="scrollable_table">
        <div className="scroll">
          <table>
            <thead>
              <tr className="transaction-heading">
                <th className="checkmarking">
                  {/* CUSTOM CHECKBOX */}
                  <div class="cntr">
                    <label for="resume" class="label-cbx">
                      <input id="resume" type="checkbox" class="invisible" />
                      <div class="checkbox">
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                          <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                          <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
                      </div>
                    </label>
                  </div>
                </th>

                <th>Collection Name</th>
                <th>Zone/Block</th>
                <th>Collection ID</th>
                <th>Collection Target</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{displayEvents}</tbody>
          </table>
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
      </TableFrame>
    </Container>
  );
};

export default AdminTransactionTable;
const Container = styled.div`
  .dinko {
    margin-top: 45px;
  }
`;
const TableFrame = styled.div`
  .transaction-heading {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121%;

    /* Grey/1 */

    color: #111111;
  }
  .data-zone {
    display: flex;
    align-items: center;
  }
  .zone-name {
    margin-left: 10px;
  }
  .transaction-container {
    margin-top: 40px;
  }

  .transaction-date {
    font-weight: bold;
  }

  .transaction-row {
    width: 100px;
    height: 18px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #545454;
  }
  .cntr {
    margin-left: 15px;
  }
`;

const HandleSearchAndTab = styled.section`
  .container {
    margin-bottom: 20px;
  }
  .normal_tab {
    background: transparent;
  }
  button {
    padding: 10px 12px !important;
    height: auto !important;
    font-weight: 400;
    border: 1px solid #2d4bf3 !important;
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

const API = [
  {
    id: 1,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "7/28/2022",
    amount: "N120,000.00",
  },
  {
    id: 2,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "7/13/2022",
    amount: "N120,000.00",
  },
  {
    id: 3,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "4/23/2022",
    amount: "N120,000.00",
  },
  {
    id: 4,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "2/7/2022",
    amount: "N120,000.00",
  },
  {
    id: 5,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "6/6/2022",
    amount: "N120,000.00",
  },
  {
    id: 6,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "12/12/2021",
    amount: "N120,000.00",
  },
  {
    id: 7,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Residence",
    date: "2/20/2022",
    amount: "N120,000.00",
  },
  {
    id: 8,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "8/24/2022",
    amount: "N120,000.00",
  },
  {
    id: 9,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Residence",
    date: "7/5/2022",
    amount: "N120,000.00",
  },
  {
    id: 10,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "2/15/2022",
    amount: "N120,000.00",
  },
  {
    id: 11,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "1/19/2022",
    amount: "N120,000.00",
  },
  {
    id: 12,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Residence",
    date: "6/18/2022",
    amount: "N120,000.00",
  },
  {
    id: 13,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Residence",
    date: "5/1/2022",
    amount: "N120,000.00",
  },
  {
    id: 14,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "3/4/2022",
    amount: "N120,000.00",
  },
  {
    id: 15,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "2/7/2022",
    amount: "N120,000.00",
  },
  {
    id: 16,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Residence",
    date: "5/6/2022",
    amount: "N120,000.00",
  },
  {
    id: 17,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "8/16/2022",
    amount: "N120,000.00",
  },
  {
    id: 18,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Residence",
    date: "1/14/2022",
    amount: "N120,000.00",
  },
  {
    id: 19,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "11/23/2021",
    amount: "N120,000.00",
  },
  {
    id: 20,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "6/26/2022",
    amount: "N120,000.00",
  },
  {
    id: 21,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "8/7/2022",
    amount: "N120,000.00",
  },
  {
    id: 22,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "5/5/2022",
    amount: "N120,000.00",
  },
  {
    id: 23,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "10/6/2022",
    amount: "N120,000.00",
  },
  {
    id: 24,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "7/21/2022",
    amount: "N120,000.00",
  },
  {
    id: 25,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Residence",
    date: "8/18/2022",
    amount: "N120,000.00",
  },
  {
    id: 26,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "10/24/2022",
    amount: "N120,000.00",
  },
  {
    id: 27,
    collection_name: "Monthly Dues",
    zone: "Zone 2",
    collection: "#451289056",
    collection_target: "Residence",
    date: "7/7/2022",
    amount: "N120,000.00",
  },
  {
    id: 28,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "11/25/2021",
    amount: "N120,000.00",
  },
  {
    id: 29,
    collection_name: "Monthly Dues",
    zone: "Zone 1",
    collection: "#451289056",
    collection_target: "Vendor",
    date: "7/9/2022",
    amount: "N120,000.00",
  },
  {
    id: 30,
    collection_name: "Monthly Dues",
    zone: "Block 3A",
    collection: "#451289056",
    collection_target: "Residence",
    date: "5/7/2022",
    amount: "N120,000.00",
  },
];
