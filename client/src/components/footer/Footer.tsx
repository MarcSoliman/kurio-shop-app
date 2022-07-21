import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="left">
        <h1>Kurio.</h1>
        <div className="copyright">
          <h6>Copyright © 2022 Kurio</h6>
          <h6>All rights reserved</h6>
        </div>
        <div className="social-icons">
          <div>Insta</div>
          <div>Twitter</div>
          <div>Youtube</div>
        </div>
      </div>
      <div className="middle">
        <h4>Company</h4>
        <hr></hr>
        <ul>
          <li>About us</li>
          <li>Contact us</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="right">
        <h3>Get updates</h3>
        <form>
          <input
            type="text"
            className="updates-input"
            placeholder="Enter your email"
          ></input>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
