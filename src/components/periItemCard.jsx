import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from "reactstrap";
import { ProgressBar } from "../common/Progress";
import Model from "./Model";
import { getDUAttachments } from "../services/DUTaskAttachmentServices";
import CaratModel from "./CaratModel";
import { deleteMealBox, getMealBox } from "../services/mealBoxServices";

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
      const ext = Attachment.FilePath.substr(Attachment.FilePath.lastIndexOf("\\") + 1);
      const image = `http://86.14.11.234/FastFoodStoreWAPI/Attachments/${ext}${Attachment.FileType}`;

      setSrc(image);
    };
    const saveBox = () => {
      // const objList = await getMealBox(this.props.Id);
    };
    getFilePath(props.item.Id);
  }, [props.item.Id]);
  // return image;

  return (
    <div className="container">
      <Card className="border border-0">
        <CardTitle>
          <b>
            <strong>{props.item.MealBoxTitle}</strong>
          </b>
        </CardTitle>
        <CardBody>
          <CardImg top src={src} alt="Card image cap" />

          <div className="form-group">
            <CardText>
              <Row>
                <Col>
                  <small>
                    <b>
                      <>{props.item.Description}</>
                    </b>
                  </small>

                  <br />
                  <small>
                    <b>
                      <> Total Calories: {props.item.TotalCalories}</>
                    </b>
                  </small>
                  <br />
                  <small>
                    <b>
                      <> Person Count: {props.item.PersonCount}</>
                    </b>
                  </small>
                  <br />
                  <small>
                    <b>
                      <> Is Kid Meal: {props.item.IsKidMeal ? "Yes" : "No"}</>
                    </b>
                  </small>
                  <br />
                  <small>
                    <b>
                      <> Meal Box Offer: {props.item.MealBoxOffer}</>
                    </b>
                  </small>

                  <br />
                </Col>
              </Row>
              <>
                <small>
                  <i>Protien</i>
                </small>
                <ProgressBar value={props.item.Protien * props.lavel} />
              </>
              <>
                <small>
                  <i> Fat</i>
                </small>
                <ProgressBar value={props.item.Fat * props.lavel} />
              </>
              <>
                <small>
                  <i> Fiber</i>
                </small>
                <ProgressBar value={props.item.Fiber * props.lavel} />
              </>
              <>
                <small>
                  <i> SpiceLevel </i>
                </small>
                <ProgressBar value={props.item.SpiceLevel * props.lavel} />
              </>
            </CardText>
            <div className="c-product-card__footer">
              <Row>
                <Col md="4" className="float-left">
                  <>
                    <b> £ {props.item.MealBoxPrice}</b>
                  </>
                </Col>
                <Col md="4" className="float-right">
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
