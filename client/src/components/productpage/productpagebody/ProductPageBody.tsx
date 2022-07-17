import React from "react";
import RightPanelProducts from "./rightpanelproducts/RightPanelProducts";
import LeftPanel from "./leftpanel/LeftPanel";
import "./productpagebody.scss";

function ProductPageBody() {
  return (
    <div className="product-body-container">
      <LeftPanel />
      <RightPanelProducts />
    </div>
  );
}

export default ProductPageBody;
