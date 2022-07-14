import React from "react";
import Navbar from "./navbar/Navbar";
import Searchbar from "./searchbar/Searchbar";
import ProductPageBody from "./productpagebody/ProductPageBody";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <ProductPageBody />
    </div>
  );
}

export default ProductPage;
