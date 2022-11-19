import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SVGs } from "../assets/svg/SVGs";

const Overview_card = () => {
  const PerOverview = (props) => {
    return (
      <Link to={props.link} className="grid-row per_overview">
        <img src={props.img} alt="" />
        <div className="num">
          <p>{props.type}</p>
          <h3>{props.count}</h3>
        </div>
      </Link>
    );
  };
  return (
    <OverviewRap className="fourcard_grid all_overview">
      <PerOverview img={SVGs.Resident} type="Household" count="14" />
      <PerOverview
        img={SVGs.overview_svg}
        type="Residents"
        count="14"
        // link="/superadmin-estate"
      />

      <PerOverview img={SVGs.Resident} type="Security" count="6" />
      <PerOverview img={SVGs.vendor} type="Vendors" count="9" />
      <PerOverview
        img={SVGs.complains}
        type="Complaints"
        count="2"
        link="/admin/complaint"
      />
    </OverviewRap>
  );
};

export default Overview_card;

const OverviewRap = styled.div`
  @media (min-width: 1320px) {
    .per_overview {
      width: 19.2%;
    }
  }
`;
