import React, { useState } from "react";
// import JsonData from '../Mock-API.json'
import ReactPaginate from "react-paginate"; //  Using react-paginate from the react library
import styled from "styled-components";
import AddNewResidence from "../../components/AddNew";
import AddBoardMember from "../../components/AddBoardMember";
import GNavbar from "../../components/Navbar/A-Navigator";
import Mobile from "../../components/Navbar/AdminMobile";
import TopNav from "../../components/Navbar/AdminNav";
import { SVGs } from "../../assets/svg/SVGs";

function AdminResidence() {
  const [events, setEvents] = useState(API.slice(0, 20));
  const [value, setvalue] = useState("");
  const [resident, setResident] = useState("Add New");
  const [pageNumber, setPageNumber] = useState(0); // state representing the page we are on
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false); // state for Modal
  const [board, setBoardMember] = useState(false); // state for Modal
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
        event.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return event;
      }
    })
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => {
      const {
        id,
        first_name,
        last_name,
        mode,
        category,
        phone,
        email,
        address,
        estate_id,
      } = event;

      return (
        <tr key={id}>
          <td>
            <div className="img-avatar">
              <img
                src="https://images.unsplash.com/photo-1668479242485-187747d26011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <div className="user-name">
                {first_name} {last_name}
              </div>
              <p className="estate_id"> {estate_id}</p>
            </div>
          </td>

          <td>{address}</td>

          <td className="contact_data">
            <div className="contact">
              <a href="">
                <img src={SVGs.Call} alt="" />
              </a>
              <a href="mailto:abc@example.com?subject = Feedback&body = Message">
                <img src={SVGs.Email} alt="" />
              </a>
            </div>
          </td>
          <td className="resume_data">
            <Action selected={mode} setSelected={setSelected} />
          </td>
        </tr>
      );
    }); // display items from 1 -6

  const pageCount = Math.ceil(events.length / eventsPerPage); // Rounding up

  const changePage = ({ selected }) => {
    // selected the number for the page we want to move too
    setPageNumber(selected);
  };
  /** ====to do
   * 1. Upon Adding a New Resident
   */
  const Resident = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="select_me with_blue outlined">
        <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.58039 4.61062L1.40039 5.79729L8.00039 12.3906L14.6004 5.79063L13.4204 4.61062L8.00039 10.0306L2.58039 4.61062Z"
              fill="#F6F6F6"
            />
          </svg>
        </div>
        {isActive && (
          <div className="select_content">
            {/* Add Resident */}
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Add Residence");
                setIsActive(false);
              }}
            >
              <p onClick={() => setOpenModal(true)}>Add Residence</p>
            </div>
            {/* Add Board Member */}
            <div
              className="select_items"
              onClick={(e) => {
                setSelected("Board Member");
                setIsActive(false);
              }}
            >
              <p onClick={() => setBoardMember(true)}>Add Board Member</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <section className="change_ratio">
        <GNavbar residence="active_tab" />
        <Mobile />
        <AddNewResidence open={openModal} onClose={() => setOpenModal(false)} />
        <AddBoardMember open={board} onClose={() => setBoardMember(false)} />
        <div className="selected_tab">
          <TopNav />
          <div className="dashboard_container">
            <div className="event-container">
              <HandleSearchAndTab>
                <div className="tabs">
                  <span
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={() => handleClick(1)}
                  >
                    <button onClick={(e) => setEvents(API)}>All</button>
                  </span>

                  <span
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Vendors")}
                    >
                      Vendors
                    </button>
                  </span>
                  <span
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                  >
                    <button
                      className="btn"
                      onClick={() => filterEvents("Security")}
                    >
                      Security
                    </button>
                  </span>
                </div>
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

                  <FilterBy selected={selected} setSelected={setSelected} />

                  <Resident selected={resident} setSelected={setResident} />
                </div>
              </HandleSearchAndTab>
            </div>

            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <TableFrame className="scrollable_table">
                  <div className="scroll">
                    <table>
                      <thead>
                        <tr>
                          <th>Residence ID</th>
                          <th>Address</th>
                          <th>Contact</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{displayEvents}</tbody>
                    </table>
                  </div>
                </TableFrame>
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <TableFrame className="scrollable_table">
                  <table>
                    <thead>
                      <tr>
                        <th>Residence ID</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{displayEvents}</tbody>
                  </table>
                </TableFrame>
              </div>
              <div className={`panel ${checkActive(3, "active")}`}>
                <TableFrame className="scrollable_table">
                  <table>
                    <thead>
                      <tr>
                        <th>Residence ID</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{displayEvents}</tbody>
                  </table>
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

export default AdminResidence;

const Action = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Enabled", "Disabled"];

  const changeStatus = () => {};
  return (
    <div
      className="select_me"
      onClick={(e) => {
        if (e.target.classList.contains("select_items")) {
          // alert(e.target.textContent);
          e.target.parentElement.parentElement.querySelector(
            ".checked_value"
          ).value = e.target.textContent;

          // Remove default status
          e.target.parentElement.parentElement.querySelector(
            ".default_status"
          ).textContent = "";
        }
      }}
    >
      <div
        className="select-btn"
        id={selected === "Enabled" ? "greenBg" : "redBg"}
        onClick={(e) => setIsActive(!isActive)}
      >
        <input type="text" readOnly class="checked_value" />
        <span className="default_status">{selected}</span>

        <img
          src="https://www.svgrepo.com/show/356209/chevron-down.svg"
          alt=""
        />
      </div>
      {isActive && (
        <div className="select_content">
          {options.map((option) => (
            <div
              className="select_items"
              onClick={(e) => {
                // setSelected(option);
                setIsActive(false);
                e.target.parentElement.parentElement.querySelector(
                  ".select-btn"
                ).id = e.target.textContent === "Enabled" ? "greenBg" : "redBg";
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

const FilterBy = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Last 7days", "Last 14 days", "This month", "This year"];
  return (
    <div className="select_me filter_drop">
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 9L12.5 15L18.5 9"
            stroke="#545454"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {isActive && (
        <div className="select_content">
          {/* <h5>Duration</h5> */}
          {options.map((option) => (
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

const TableFrame = styled.div`
  // .scrollable_table {
  //   font-family: "Satoshi";
  //   margin-left: 40px;
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 121%;
  //   display: flex;
  //   align-items: center;
  //   /* Grey/2 */
  //   color: #545454;
  // }
  @media (max-width: 900px) {
    .scroll {
      min-width: 950px;
      width: 100%;
    }
  }

  .select_me {
    width: 150px;
    .select-btn {
      padding-left: 14px;
    }
  }

  .scrollable_table tr {
    margin-left: 20px;
  }

  .img-avatar img {
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 50%;
  }
  .img-avatar {
    display: flex;
    align-items: center;
  }
  .user-name {
    margin-left: 10px;
    width: 134px;
    height: 23px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;

    /* Grey/1 */
    color: #111111;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .team-members {
    // display: flex;
    // justify-content: space-between;
    margin-top: 40px;
  }

  .contact {
    margin: 5px;
    display: flex;
  }
  .contact a {
    margin: 8px;
    width: 30px;
    height: 30px;
  }
`;

// DATA
const API = [
  {
    id: 1,
    first_name: "Vannie",
    last_name: "Hawtin",
    address: "9041 Messerschmidt Pass",
    category: "Security",
    mode: "Disabled",
    phone: "(458) 4558139",
    email: "vhawtin0@phpbb.com",
    estate_id: 5272,
  },
  {
    id: 2,
    first_name: "Erl",
    last_name: "Hamper",
    address: "235 Ruskin Lane",
    category: "Security",
    mode: "Enabled",
    phone: "(604) 8295261",
    email: "ehamper1@amazon.com",
    estate_id: 4474,
  },
  {
    id: 3,
    first_name: "Millard",
    last_name: "Vanni",
    address: "354 Garrison Terrace",
    category: "Security",
    mode: "Enabled",
    phone: "(939) 5668611",
    email: "mvanni2@hud.gov",
    estate_id: 2122,
  },
  {
    id: 4,
    first_name: "Hamel",
    last_name: "Bankhurst",
    address: "67439 Swallow Terrace",
    category: "Security",
    mode: "Enabled",
    phone: "(580) 7558861",
    email: "hbankhurst3@infoseek.co.jp",
    estate_id: 5624,
  },
  {
    id: 5,
    first_name: "Donnie",
    last_name: "Grigs",
    address: "432 Scoville Crossing",
    category: "Vendors",
    mode: "Disabled",
    phone: "(532) 4786983",
    email: "dgrigs4@weibo.com",
    estate_id: 1227,
  },
  {
    id: 6,
    first_name: "Arnold",
    last_name: "Yannoni",
    address: "74317 Moland Center",
    category: "Vendors",
    mode: "Disabled",
    phone: "(235) 3865687",
    email: "ayannoni5@ihg.com",
    estate_id: 8113,
  },
  {
    id: 7,
    first_name: "Nonah",
    last_name: "Brayson",
    address: "391 Bunting Junction",
    category: "Security",
    mode: "Enabled",
    phone: "(826) 3043585",
    email: "nbrayson6@geocities.com",
    estate_id: 1864,
  },
  {
    id: 8,
    first_name: "Ailee",
    last_name: "Stroban",
    address: "0810 Lyons Crossing",
    category: "Security",
    mode: "Enabled",
    phone: "(305) 8376974",
    email: "astroban7@reddit.com",
    estate_id: 4768,
  },
  {
    id: 9,
    first_name: "Jackson",
    last_name: "Beekmann",
    address: "4198 Harbort Place",
    category: "Vendors",
    mode: "Disabled",
    phone: "(122) 9749055",
    email: "jbeekmann8@nymag.com",
    estate_id: 2663,
  },
  {
    id: 10,
    first_name: "Reeta",
    last_name: "Corten",
    address: "8 Parkside Junction",
    category: "Security",
    mode: "Disabled",
    phone: "(449) 5735169",
    email: "rcorten9@usa.gov",
    estate_id: 8091,
  },
  {
    id: 11,
    first_name: "Bobette",
    last_name: "Dibdall",
    address: "191 Tennyson Park",
    category: "Vendors",
    mode: "Disabled",
    phone: "(205) 8012934",
    email: "bdibdalla@china.com.cn",
    estate_id: 3951,
  },
  {
    id: 12,
    first_name: "Meade",
    last_name: "Mc Ilwrick",
    address: "854 Reinke Pass",
    category: "Vendors",
    mode: "Disabled",
    phone: "(460) 2427398",
    email: "mmcilwrickb@xinhuanet.com",
    estate_id: 7511,
  },
  {
    id: 13,
    first_name: "Gwendolin",
    last_name: "Tharme",
    address: "8360 Oriole Road",
    category: "Security",
    mode: "Enabled",
    phone: "(425) 7792655",
    email: "gtharmec@ucla.edu",
    estate_id: 2462,
  },
  {
    id: 14,
    first_name: "Candra",
    last_name: "De Metz",
    address: "63213 Moulton Place",
    category: "Security",
    mode: "Disabled",
    phone: "(852) 7754320",
    email: "cdemetzd@free.fr",
    estate_id: 4735,
  },
  {
    id: 15,
    first_name: "Elly",
    last_name: "Derye-Barrett",
    address: "0 Prentice Pass",
    category: "Security",
    mode: "Enabled",
    phone: "(447) 2871402",
    email: "ederyebarrette@china.com.cn",
    estate_id: 4146,
  },
  {
    id: 16,
    first_name: "Mylo",
    last_name: "Tieraney",
    address: "0 Rieder Street",
    category: "Vendors",
    mode: "Enabled",
    phone: "(216) 1781191",
    email: "mtieraneyf@globo.com",
    estate_id: 3244,
  },
  {
    id: 17,
    first_name: "Doralin",
    last_name: "Stockdale",
    address: "30771 Maryland Drive",
    category: "Security",
    mode: "Disabled",
    phone: "(412) 2819715",
    email: "dstockdaleg@goo.ne.jp",
    estate_id: 2191,
  },
  {
    id: 18,
    first_name: "Mack",
    last_name: "Standish-Brooks",
    address: "618 Duke Lane",
    category: "Vendors",
    mode: "Disabled",
    phone: "(770) 9666439",
    email: "mstandishbrooksh@berkeley.edu",
    estate_id: 9682,
  },
  {
    id: 19,
    first_name: "Samantha",
    last_name: "Lindhe",
    address: "990 Vahlen Street",
    category: "Vendors",
    mode: "Disabled",
    phone: "(879) 6657465",
    email: "slindhei@comsenz.com",
    estate_id: 2610,
  },
  {
    id: 20,
    first_name: "Doll",
    last_name: "Barents",
    address: "20 Pearson Park",
    category: "Vendors",
    mode: "Enabled",
    phone: "(922) 6753834",
    email: "dbarentsj@ihg.com",
    estate_id: 7764,
  },
  {
    id: 21,
    first_name: "Filmer",
    last_name: "Blasi",
    address: "02250 Stuart Junction",
    category: "Security",
    mode: "Enabled",
    phone: "(418) 7226862",
    email: "fblasik@miitbeian.gov.cn",
    estate_id: 7014,
  },
  {
    id: 22,
    first_name: "Roselin",
    last_name: "Foster",
    address: "53 Schlimgen Crossing",
    category: "Security",
    mode: "Enabled",
    phone: "(529) 8552668",
    email: "rfosterl@opera.com",
    estate_id: 3051,
  },
  {
    id: 23,
    first_name: "Sisile",
    last_name: "Kneebone",
    address: "75 Stoughton Parkway",
    category: "Vendors",
    mode: "Disabled",
    phone: "(195) 3949756",
    email: "skneebonem@facebook.com",
    estate_id: 6900,
  },
  {
    id: 24,
    first_name: "Cullin",
    last_name: "Readman",
    address: "202 Boyd Street",
    category: "Vendors",
    mode: "Disabled",
    phone: "(311) 1554736",
    email: "creadmann@google.cn",
    estate_id: 2527,
  },
  {
    id: 25,
    first_name: "Carrie",
    last_name: "Chasmoor",
    address: "955 Lukken Park",
    category: "Security",
    mode: "Disabled",
    phone: "(704) 9862416",
    email: "cchasmooro@unc.edu",
    estate_id: 9158,
  },
  {
    id: 26,
    first_name: "Shoshanna",
    last_name: "Tuckerman",
    address: "210 Prentice Drive",
    category: "Security",
    mode: "Enabled",
    phone: "(208) 1213459",
    email: "stuckermanp@xinhuanet.com",
    estate_id: 7594,
  },
  {
    id: 27,
    first_name: "Patty",
    last_name: "Guthrum",
    address: "015 Surrey Park",
    category: "Vendors",
    mode: "Disabled",
    phone: "(243) 3002781",
    email: "pguthrumq@vimeo.com",
    estate_id: 5071,
  },
  {
    id: 28,
    first_name: "Carr",
    last_name: "How",
    address: "284 Victoria Point",
    category: "Vendors",
    mode: "Enabled",
    phone: "(729) 7160410",
    email: "chowr@icio.us",
    estate_id: 7566,
  },
  {
    id: 29,
    first_name: "Dulce",
    last_name: "Halgarth",
    address: "63 Amoth Circle",
    category: "Security",
    mode: "Enabled",
    phone: "(870) 3678009",
    email: "dhalgarths@dagondesign.com",
    estate_id: 5091,
  },
  {
    id: 30,
    first_name: "Gwennie",
    last_name: "Greendale",
    address: "17153 Hoepker Junction",
    category: "Vendors",
    mode: "Disabled",
    phone: "(308) 9865928",
    email: "ggreendalet@51.la",
    estate_id: 9031,
  },
  {
    id: 31,
    first_name: "Claudette",
    last_name: "Labbet",
    address: "817 Northwestern Lane",
    category: "Vendors",
    mode: "Disabled",
    phone: "(787) 2534424",
    email: "clabbetu@sohu.com",
    estate_id: 6963,
  },
  {
    id: 32,
    first_name: "Berty",
    last_name: "Rolfo",
    address: "22 Holmberg Drive",
    category: "Security",
    mode: "Disabled",
    phone: "(541) 9068859",
    email: "brolfov@ox.ac.uk",
    estate_id: 6648,
  },
  {
    id: 33,
    first_name: "Foss",
    last_name: "Friedenbach",
    address: "4 Green Point",
    category: "Vendors",
    mode: "Enabled",
    phone: "(243) 7047026",
    email: "ffriedenbachw@theatlantic.com",
    estate_id: 7144,
  },
  {
    id: 34,
    first_name: "Lorri",
    last_name: "Gersam",
    address: "41 Texas Trail",
    category: "Security",
    mode: "Disabled",
    phone: "(371) 4344910",
    email: "lgersamx@themeforest.net",
    estate_id: 9138,
  },
  {
    id: 35,
    first_name: "Rufe",
    last_name: "Matisoff",
    address: "7 Messerschmidt Crossing",
    category: "Security",
    mode: "Disabled",
    phone: "(740) 4014447",
    email: "rmatisoffy@scientificamerican.com",
    estate_id: 8147,
  },
  {
    id: 36,
    first_name: "Bobbee",
    last_name: "Renyard",
    address: "21 International Junction",
    category: "Vendors",
    mode: "Enabled",
    phone: "(818) 8729331",
    email: "brenyardz@bloglines.com",
    estate_id: 3790,
  },
  {
    id: 37,
    first_name: "Krystal",
    last_name: "Benedtti",
    address: "7 Coolidge Way",
    category: "Security",
    mode: "Disabled",
    phone: "(318) 7948381",
    email: "kbenedtti10@odnoklassniki.ru",
    estate_id: 4539,
  },
  {
    id: 38,
    first_name: "Marcie",
    last_name: "Redsell",
    address: "69 Valley Edge Plaza",
    category: "Security",
    mode: "Disabled",
    phone: "(164) 8913948",
    email: "mredsell11@1688.com",
    estate_id: 4689,
  },
  {
    id: 39,
    first_name: "Janek",
    last_name: "Alexsandrowicz",
    address: "28967 Dapin Parkway",
    category: "Vendors",
    mode: "Enabled",
    phone: "(784) 5052861",
    email: "jalexsandrowicz12@opensource.org",
    estate_id: 1708,
  },
  {
    id: 40,
    first_name: "Avram",
    last_name: "Beldum",
    address: "228 Karstens Street",
    category: "Security",
    mode: "Enabled",
    phone: "(921) 7636748",
    email: "abeldum13@blogger.com",
    estate_id: 8967,
  },
  {
    id: 41,
    first_name: "Celina",
    last_name: "McGeagh",
    address: "94 Oak Valley Lane",
    category: "Vendors",
    mode: "Disabled",
    phone: "(258) 5138898",
    email: "cmcgeagh14@springer.com",
    estate_id: 3454,
  },
  {
    id: 42,
    first_name: "Dunstan",
    last_name: "Galbreath",
    address: "0436 Fallview Pass",
    category: "Vendors",
    mode: "Enabled",
    phone: "(361) 8764416",
    email: "dgalbreath15@xrea.com",
    estate_id: 7805,
  },
  {
    id: 43,
    first_name: "Daron",
    last_name: "Day",
    address: "663 Continental Alley",
    category: "Security",
    mode: "Enabled",
    phone: "(111) 4358507",
    email: "dday16@w3.org",
    estate_id: 4103,
  },
  {
    id: 44,
    first_name: "Judd",
    last_name: "Salmon",
    address: "59 Bluestem Court",
    category: "Security",
    mode: "Enabled",
    phone: "(936) 6832591",
    email: "jsalmon17@ucsd.edu",
    estate_id: 3909,
  },
  {
    id: 45,
    first_name: "Ricca",
    last_name: "Standidge",
    address: "06574 Mosinee Hill",
    category: "Security",
    mode: "Enabled",
    phone: "(622) 6092950",
    email: "rstandidge18@examiner.com",
    estate_id: 7358,
  },
  {
    id: 46,
    first_name: "Daphne",
    last_name: "Cloutt",
    address: "256 Eastwood Point",
    category: "Vendors",
    mode: "Disabled",
    phone: "(609) 3956409",
    email: "dcloutt19@360.cn",
    estate_id: 7254,
  },
  {
    id: 47,
    first_name: "Almire",
    last_name: "Kondrat",
    address: "75380 Eggendart Pass",
    category: "Vendors",
    mode: "Enabled",
    phone: "(518) 3110657",
    email: "akondrat1a@who.int",
    estate_id: 7877,
  },
  {
    id: 48,
    first_name: "Emelita",
    last_name: "Gentil",
    address: "75 Tomscot Alley",
    category: "Security",
    mode: "Disabled",
    phone: "(267) 6605419",
    email: "egentil1b@webnode.com",
    estate_id: 1916,
  },
  {
    id: 49,
    first_name: "Bethany",
    last_name: "Drever",
    address: "403 Autumn Leaf Point",
    category: "Security",
    mode: "Disabled",
    phone: "(832) 6551910",
    email: "bdrever1c@earthlink.net",
    estate_id: 4109,
  },
  {
    id: 50,
    first_name: "Niccolo",
    last_name: "Gligoraci",
    address: "7979 North Road",
    category: "Security",
    mode: "Enabled",
    phone: "(873) 8350460",
    email: "ngligoraci1d@smugmug.com",
    estate_id: 9372,
  },
];
