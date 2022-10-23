import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  return (
    //===== BREADCRUMB for b_heading
    <div className="breadcrumb_control">
      <div className={props.connect}>
        <ul class="breadcrumb">
          <li>
            <Link to={props.prevlink}>{props.previous}</Link>
          </li>
          <li className="current_bread">{props.current}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
