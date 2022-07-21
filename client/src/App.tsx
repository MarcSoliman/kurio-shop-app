import React, { useEffect, useState } from "react";
import ProductPage from "./components/productpage/ProductPage";
import LoginPage from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./fonts.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
