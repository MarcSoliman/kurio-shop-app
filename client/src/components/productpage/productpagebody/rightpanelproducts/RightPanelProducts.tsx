import React from "react";
import axios from "axios";
import "./rightpanelproducts.scss";
function RightPanelProducts() {
  return (
    <section className="right-panel">
      RightPanelProducts
      <button
        onClick={() =>
          axios.post("http://localhost:5000/api", {
            name: "Cool Mist",
          })
        }
      >
        CLICK TO ADD PRODUCT
      </button>
    </section>
  );
}

export default RightPanelProducts;
