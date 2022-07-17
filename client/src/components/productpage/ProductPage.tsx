import React from "react";
import Navbar from "./navbar/Navbar";
import Searchbar from "./searchbar/Searchbar";
import ProductPageBody from "./productpagebody/ProductPageBody";
import "./productpage.scss";
import Footer from "../footer/Footer";

function ProductPage() {
  return (
    <div className="product-page-container">
      <Navbar />
      <Searchbar />
      <ProductPageBody />
      <Footer />
    </div>
  );
}

export default ProductPage;
