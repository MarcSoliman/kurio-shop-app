import React, { useState } from "react";
import axios from "axios";
import "./rightpanelproducts.scss";
function RightPanelProducts() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="right-panel">
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          type="button"
          onClick={() => {
            axios
              .post("http://localhost:5000/login", {
                username: username,
                password: password,
              })
              .then((response) => {
                console.log("hello " + response.data + "!");
              })
              .catch((error) => {
                error.message = "Error: " + error.message;
              });
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default RightPanelProducts;
