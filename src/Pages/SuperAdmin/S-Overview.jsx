import React from "react";
import GNavbar from "../../components/Navbar/DesktopTab";
import Mobile from "../../components/Navbar/Navbar";
import TopNav from "../../components/Navbar/TopNav";
import Overview_card from "../../components/Overview_card";
import D_Filter from "../../components/D_Filter";
import LatestEstate from "../../components/LatestEstate";

const Overview = () => {
  return (
    <section className="change_ratio">
      <GNavbar overview="active_tab" />
      <Mobile />
      <section className="selected_tab">
        <TopNav />
        <div className="dashboard_container">
          <D_Filter />
          <Overview_card />
          <LatestEstate />
        </div>
      </section>
    </section>
  );
};

export default Overview;
