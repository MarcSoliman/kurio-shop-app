import React from "react";
import axios from "axios";
import "./rightpanel.scss";
import RightPanelProduct from "./RightPanelProduct";
function RightPanel() {
  let foo = [0, 1, 2, 3];
  return (
    <div className="right-panel">
      <div className="products-wrapper">
        {foo.map((i: any) => {
          return <RightPanelProduct key={i} />;
        })}
      </div>
    </div>
  );
}

export default RightPanel;
