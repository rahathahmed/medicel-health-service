import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "rgb(0, 123, 255)" }}>
      <div className="container pt-5">
        <div className="row text-white">
          <div className="col-md-3">
            <img style={{ width: "100px" }} alt="" />
            <p className="text-white">Copyright © 2019 | All Rights</p>
          </div>
          <div className="col-md-3">
            <h5 className="text-white">Quick Link</h5>
            <ul className="list-unstyled text-white">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white">About Usk</h5>
            <ul className="list-unstyled text-white">
              <li>Our Medicine</li>
              <li>Pathology</li>
              <li>How to manage doctor</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-white"> Support</h5>
            <ul className="list-unstyled text-white">
              <li>24/7 Hour</li>
              <li>Online Website</li>
              <li>Visit our office</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
