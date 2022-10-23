import React from "react";
import { SVGs } from "../assets/svg/SVGs";

const Overview_card = () => {
  const PerOverview = (props) => {
    return (
      <div className="grid-row per_overview">
        <img src={props.img} alt="" />
        <div className="num">
          <p>{props.type}</p>
          <h3>{props.count}</h3>
        </div>
      </div>
    );
  };
  return (
    <div className="fourcard_grid all_overview">
      <PerOverview img={SVGs.overview_svg} type="Estates" count="14" />
      <PerOverview img={SVGs.Resident} type="Residents" count="62" />
      <PerOverview img={SVGs.vendor} type="Vendors" count="9" />
      <PerOverview img={SVGs.complains} type="Complaints" count="2" />
    </div>
  );
};

export default Overview_card;
