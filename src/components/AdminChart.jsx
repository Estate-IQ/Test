import React, { useState } from "react";
import Chart from "./chart/Chart";
// import Images from "../assets/images/Images";
import { Images } from "../assets/images/Images";
import { userData } from "../assets/json/Dummydata";
import { Link } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

const LatestResidence = () => {
  const [selected, setSelected] = useState("Action");
  const PerNewEstate = (props) => {
    return (
      <HandleDrop>
        <div className="new_estates">
          {/* 1 */}
          <div className="ff_part">
            <img src={props.estateimg} alt="" />
            <div className="new_estate_name">
              <h4>{props.estatename}</h4>
              <p className="location_before">{props.address}</p>
            </div>
          </div>
          {/* 2 */}
          <div className="ff_part2">
            <Action selected={selected} setSelected={setSelected} />
            {/* <button className="outlined-btn">{props.plan}</button>
          <h4>{props.residents} Residents</h4>
          <p>{props.date}</p> */}
          </div>
        </div>
      </HandleDrop>
    );
  };
  return (
    <div className="chartbox">
      {/* <ResponsiveContainer> */}
      <Chart
        height={700}
        data={userData}
        title="User Analytics"
        grid
        FreePlan="Free Plan"
        EssentialPlan="Essential"
      />
      {/* </ResponsiveContainer> */}

      <div className="latest_estate">
        <div className="ff_heading">
          <h4>Newest Residence</h4>
          <Link to="">See more</Link>
        </div>
        <PerNewEstate
          estateimg={Images.blog2}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
        />
        <PerNewEstate
          estateimg={Images.blog3}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
        />
        <PerNewEstate
          estateimg={Images.blog4}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
        />
      </div>
    </div>
  );
};

export default LatestResidence;

const Action = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Active", "Deactivate"];

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
      <div className="select-btn" onClick={(e) => setIsActive(!isActive)}>
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

let HandleDrop = styled.div`
  .ff_part2 {
    position: relative;
    .select_me {
      position: absolute;
      right: 0;
      width: 130px;
      img {
        width: 15px;
        height: 15px;
      }
      .select-btn {
        position: relative;
        span {
          position: absolute;
          left: 10px;
        }
      }
    }
  }
  @media (max-width: 408px) {
    .ff_part2 {
      .select_me {
        width: 100%;
        position: static;
      }
    }
  }
`;
