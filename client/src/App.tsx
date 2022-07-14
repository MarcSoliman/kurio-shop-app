import React, { useEffect, useState } from "react";
import ProductPage from "./components/productpage/ProductPage";

function App() {
  const [backendData, setBackendData]: Array<any> = useState([{}]);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);

  return (
    <div>
      <ProductPage />
    </div>
  );
}

export default App;
