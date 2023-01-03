import * as React from "react";
import { useState } from "react";
import "./Collapsable.scss";
import upArrow from "../../images/up-arrow.svg";
import downArrow from "../../images/down-arrow.svg";

const Collapsable = ({ collapsed, children, heading }) => {
  const [isCollapsed, setIsCollapsed] = useState(!collapsed);
  return (
    <>
      <div
        className="collapse__button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>{heading}</p>
        <img src={`${isCollapsed ? downArrow : upArrow}`}></img>
      </div>

      <div
        className={`collapse__content ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>

    // <div className="collapsable">
    //   <p className="collapsable__heading">Starting from the beginning: </p>

    //   <p className="collapsable__content">
    //     I'm Michelle, a recent graduate from Simon Fraser University's
    //     Interactive Arts + Technology program and current diploma candidate in
    //     Brainstation's Web Development program.
    //   </p>
    // </div>
  );
};

export default Collapsable;
