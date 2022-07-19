import React from "react";
import RightPanel from "./rightpanelproducts/RightPanel";
import LeftPanel from "./leftpanel/LeftPanel";
import "./productpagebody.scss";

function ProductPageBody() {
  return (
    <div className="product-body-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default ProductPageBody;
