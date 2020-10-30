import React, { useState, useEffect } from "react";
import { div, Row, Col } from "reactstrap";
import { ProgressBar } from "../common/Progress";
import Model from "./Model";
import { getDUAttachments } from "../services/DUTaskAttachmentServices";

import { getMealBox } from "../services/mealBoxServices";
import CaratModel from "./CartReduxModel";

const Example = props => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const getFilePath = async id => {
      const filter = {
        RecordId: id,
        AppName: "FastFoodStore",
        ModuleName: "MealBox"
      };
      const { data: response } = await getDUAttachments(filter);
      const Attachment = response.Result[0];
      console.log("Attachment", Attachment);
      const ext = Attachment.FilePath.substr(
        Attachment.FilePath.lastIndexOf("\\") + 1
      );
      console.log("ext", ext);
      const image = require(`C:/inetpub/wwwroot/FastFoodStoreWAPI/Attachments/${ext}${Attachment.FileType}`);
      console.log("image", image);

      setSrc(image);
    };
    const saveBox = async () => {
      const objList = await getMealBox(this.props.Id);
    };
    getFilePath(props.item.Id);
  }, [props.item.Id]);

  return (
    <div className="medium card" style={{ borderRadius: "15px" }}>
      <div
        className="card-image card-image waves-effect waves-block waves-light"
        style={{ borderRadius: "15px" }}
      >
        <img className="activator" top src={src} alt="" />
      </div>
      <div
        className="card-content"
        style={{
          backgroundColor: "#263238",
          color: "white",
          borderRadius: "15px"
        }}
      >
        {props.item.MealBoxTitle}
        <span className="card-title activator grey-text">
          <i className="material-icons right" style={{ padding: "1%" }}>
            more_vert
          </i>
        </span>
        <b>{props.item.MealBoxPrice} pkr</b>
        <div className="float-right">
          <CaratModel
            buttonLabel="Add To Cart"
            Id={props.item.Id}
            Allergens={props.Allergens}
            Title={props.item.MealBoxTitle}
            src={src}
            Price={props.item.MealBoxPrice}
            MealBoxItems={props.MealBoxItems.MealItemIdFK}
          />
        </div>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.item.MealBoxTitle}
          <i className="material-icons right">close</i>
        </span>
        <Row
          style={{
            padding: "1%",
            textJustify: "auto",
            fontFamily: "cursive"
          }}
        >
          <Col>
            <small>
              <b>{props.item.Description}</b>
            </small>

            <br />
            <small>
              <b>Total Calories: {props.item.TotalCalories}</b>
            </small>
            <br />
          </Col>
          <Col>
            <small>
              <b>Person Count: {props.item.PersonCount}</b>
            </small>
            <br />
            <small>
              <b>Is Kid Meal: {props.item.IsKidMeal ? "Yes" : "No"}</b>
            </small>
            <br />
            <small>
              <b>Meal Box Offer: {props.item.MealBoxOffer}</b>
            </small>

            <br />
          </Col>
        </Row>
        <Row
          style={{
            padding: "2%",
            textJustify: "auto",
            fontFamily: "cursive"
          }}
        >
          <Col>
            <small>
              <i>Protien</i>
            </small>
            <ProgressBar
              value={props.item.Protien * props.lavel}
              color="#1976d2"
            />

            <small>
              <i> Fat</i>
            </small>
            <ProgressBar value={props.item.Fat * props.lavel} color="#1de9b6" />
          </Col>
          <Col>
            <small>
              <i> Fiber</i>
            </small>
            <ProgressBar
              value={props.item.Fiber * props.lavel}
              color="#ffff00"
            />

            <small>
              <i> SpiceLevel </i>
            </small>
            <ProgressBar
              value={props.item.SpiceLevel * props.lavel}
              color="red"
            />
          </Col>
        </Row>
        <div className="c-product-card__footer">
          <Row>
            <Col className="float-right">
              <Model
                buttonLabel="Allergens"
                Id={props.item.Id}
                Allergens={props.Allergens}
                MealBoxItems={props.MealBoxItems.MealItemIdFK}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Example;
