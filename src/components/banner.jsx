import React from "react";
import { Row, Col, Form } from "reactstrap";
import Img1 from "../banner_img.jpg";

function banner(props) {
  return (
    <div className="container" style={{ padding: "1%" }}>
      <div className="card">
        <img src={Img1} alt="Img" />
      </div>
    </div>
  );
}

export default banner;
