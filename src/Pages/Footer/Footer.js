import React from "react";
import logo from "../../images/logono.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              <img src={logo} alt="" />
              <div className="second-part">
                <h5 className="mt-5">Subscribe</h5>
                <input
                  className="input-field mt-3"
                  type="email"
                  placeholder="Email Address"
                />
                <br />
                <p>
                  <span className="m-2 "><i class="fab fa-google"></i></span>
                  <span className="m-2 "><i class="fab fa-facebook-square"></i></span>
                  <span className="m-2 "><i class="fab fa-youtube"></i></span>
                
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <h4 className="">Pages</h4>
            <p>Services</p>
            <p>Our Team</p>
            <p>Our Shop</p>
            <p>Our Clients</p>
            <p>Contact Us</p>
          </div>

          <div className="col-md-3">
            <div className="third-part">
              <h4>Specialists</h4>
              <p className="mt-4">Surgery</p>
              <p>Cardiology</p>
              <p>Therapist</p>
              <p>Diagnost</p>
              <p>Pediatrics</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h4>Contact Us</h4>
              <small className="mt-5">Office:685 Lane Drive St. California, 33020 </small>
              <br />
              <small className="mt-3">Phone:+010 234 7892 34</small>
              <br />
              <small className="mt-3">Fax: +010 435 5798982</small>
              <br />
              <small className="mt-3">Mail: info@nordis.com.</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2021 Nordis By Munna Mahmud. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;