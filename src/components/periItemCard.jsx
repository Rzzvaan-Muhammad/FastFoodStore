import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import img1 from "../xs.jpg";
import { ProgressBar } from "../common/Progress";
import Model from "./Model";
import { getDUAttachments } from "../services/DUTaskAttachmentServices";
// import CaratModel from "./CaratModel";

import { deleteMealBox, getMealBox } from "../services/mealBoxServices";
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
      const image =require(`C:/inetpub/wwwroot/FastFoodStoreWAPI/Attachments/${ext}${Attachment.FileType}`);
      console.log("image", image);

      setSrc(image);
    };
    const saveBox = async () => {
      const objList = await getMealBox(this.props.Id);
    };
    getFilePath(props.item.Id);
  }, [props.item.Id]);
  // return image;

  return (
    <div className="container">
      <Card className="border border-0" style={{ backgroundColor: "" }}>
        <CardTitle style={{ padding: "3%" }}>
          <b>
            <strong>{props.item.MealBoxTitle}</strong>
          </b>
        </CardTitle>
        <CardBody style={{ backgroundColor: "#e57373" }}>
          <CardImg top src={src} alt="Card image cap" />

          <div className="form-group">
            <CardText>
              <Row
                style={{
                  padding: "2%",
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
                  <ProgressBar
                    value={props.item.Fat * props.lavel}
                    color="#1de9b6"
                  />
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
            </CardText>
            <div className="c-product-card__footer">
              <Row>
                <Col md="3" className="float-left">
                  <b>{props.item.MealBoxPrice} pkr</b>
                </Col>
                <Col md="5" className="float-right">
                  <CaratModel
                    buttonLabel="Add To Cart"
                    Id={props.item.Id}
                    Allergens={props.Allergens}
                    Title={props.item.MealBoxTitle}
                    src={src}
                    Price={props.item.MealBoxPrice}
                    MealBoxItems={props.MealBoxItems.MealItemIdFK}
                  />
                </Col>
                <Col md="4" className="float-right">
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
        </CardBody>
      </Card>
    </div>

    // </div>
  );
};
export default Example;
