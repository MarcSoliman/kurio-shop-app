import React from "react";
import RightPanel from "./rightpanel/RightPanel";
import LeftPanel from "./leftpanel/LeftPanel";
import Topbar from "./topbar/Topbar";

function CheckoutPage() {
  return (
    <div>
      <Topbar />
      <RightPanel />
      <LeftPanel />
    </div>
  );
}

export default CheckoutPage;
