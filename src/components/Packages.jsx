import React from "react";
import { Link } from "react-router-dom";
import { SVGs } from "../assets/svg/SVGs";

const Packages = () => {
  const EachPackage = (props) => {
    return (
      <div className="each_package grid-row">
        <img src={props.img} alt="" />
        <div className="package_name">
          <h3>{props.packageName}</h3>
          <p>{props.permissions} Permisssions</p>
          <h4>{props.subscriber} Subsscribers</h4>

          <div className="inline">
            <Link to="" className="edit">
              Edit
            </Link>
            <Link to="" className="delete">
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="control_package fourcard_grid">
      <EachPackage
        img={SVGs.freePlan}
        packageName="Free Plan"
        permissions="9"
        subscriber="23"
      />
      <EachPackage
        img={SVGs.essentialPlan}
        packageName="Essential Plan"
        permissions="2"
        subscriber="7"
      />
      <EachPackage
        img={SVGs.standardPlan}
        packageName="Standard Plan"
        permissions="22"
        subscriber="5"
      />
      <EachPackage
        img={SVGs.premiumPlan}
        packageName="Premium Plan"
        permissions="22"
        subscriber="5"
      />

      {/* NEW PACKKAGES */}
      <EachPackage
        img="https://www.svgrepo.com/show/10538/package.svg"
        packageName="Dummy Plan"
        permissions="0"
        subscriber="0"
      />
    </div>
  );
};

export default Packages;
