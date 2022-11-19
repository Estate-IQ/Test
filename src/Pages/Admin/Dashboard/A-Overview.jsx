import React from "react";
import GNavbar from "../../../components/Navbar/A-Navigator";
import Mobile from "../../../components/Navbar/Navbar";
import TopNav from "../../../components/Navbar/AdminNav";
import AdminCards from "../../../components/AdminCards";
import Onboarding from "../../../components/AdminOnboarding";
import LatestResidentsAndChart from "../../../components/AdminChart";

const Overview = () => {
  return (
    <section className="change_ratio">
      <GNavbar overview="active_tab" />
      <Mobile />
      <section className="selected_tab">
        <TopNav />

        <div className="dashboard_container">
          <Onboarding />
          <AdminCards />
          <LatestResidentsAndChart />
        </div>
      </section>
    </section>
  );
};

export default Overview;
