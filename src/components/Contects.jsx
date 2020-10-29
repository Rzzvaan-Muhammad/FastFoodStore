import React from "react";
import Footer from "./footer";

function Contects(props) {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            Contect
          </a>
        </div>
      </nav>
      <div className="container">
        <h6
          style={{
            color: "red",
            paddingLeft: "10%",
            paddingTop: "5%",
            paddingBottom: "3%"
          }}
        >
          For any complaints feel free to contact us at: info@FFCPakistan.com
        </h6>
        <text>
          <p>
            <b> FFC Regional Office 27-A,</b>
          </p>
          <p> Ali Block, Barkat Market, </p>
          <p> New Garden Town,</p>
          <p> Islamabad, Pakistan.</p>
          <p> Ph#: 03473352012</p>
        </text>

        <text>
          <p>
            <b> FFC Fortress,</b>
          </p>
          <p> Shop # 17, Bridge market,, </p>

          <p> Islamabad, Pakistan.</p>
          <p> Ph#: 03473352012</p>
        </text>

        <text>
          <p>
            <b>FFC GT Road,</b>
          </p>
          <p> Ali Block, Barkat Market, </p>

          <p> Ph#: 03473352012</p>
        </text>
        
        <text>
          <p>
            <b> FFC Head Office:,</b>
          </p>
          <p> 75 GT road, Baghban Pura Lahore, </p>

          <p> Ph#: 03473352012</p>
        </text>
      </div>
      <Footer />
    </>
  );
}

export default Contects;
