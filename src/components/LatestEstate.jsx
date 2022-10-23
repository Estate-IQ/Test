import React from "react";
import Chart from "./chart/Chart";
// import Images from "../assets/images/Images";
import { Images } from "../assets/images/Images";
import { userData } from "../assets/json/Dummydata";
import { Link } from "react-router-dom";
import { ResponsiveContainer } from "recharts";

const LatestEstate = () => {
  const PerNewEstate = (props) => {
    return (
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
          <button className="outlined-btn">{props.plan}</button>
          <h4>{props.residents} Residents</h4>
          <p>{props.date}</p>
        </div>
      </div>
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
        Standard="Standard"
        Premium="Premium"
      />
      {/* </ResponsiveContainer> */}

      <div className="latest_estate">
        <div className="ff_heading">
          <h4>Newest Estate</h4>
          <Link to="">See more</Link>
        </div>
        <PerNewEstate
          estateimg={Images.blog2}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
          plan="Free Plan"
          residents="54"
          date="June 11"
        />
        <PerNewEstate
          estateimg={Images.blog3}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
          plan="Free Plan"
          residents="54"
          date="June 11"
        />
        <PerNewEstate
          estateimg={Images.blog4}
          estatename="Banana Island Estate"
          address="Plot 33, Abubakar Tafawa Balewa Way Central Business District, ...."
          plan="Free Plan"
          residents="54"
          date="June 11"
        />
      </div>
    </div>
  );
};

export default LatestEstate;
