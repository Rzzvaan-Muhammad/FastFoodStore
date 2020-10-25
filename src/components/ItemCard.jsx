import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import { ProgressBar } from "../common/Progress";
import Model from "./Model";
import { getDUAttachments } from "../services/DUTaskAttachmentServices";

const Example = props => {
  const [src, setSrc] = useState("");

  // useEffect(() => {
  //   const getFilePath = async id => {
  //     console.log("TCL: id", id);
  //     const filter = {
  //       RecordId: id,
  //       AppName: "FastFoodStore",
  //       ModuleName: "MealBox"
  //     };
  //     const { data: response } = await getDUAttachments(filter);
  //     const Attachment = response.Result[0];
  //     const ext = Attachment.FilePath.substr(Attachment.FilePath.lastIndexOf("\\") + 1);
  //     const image = `http://86.14.11.234/FastFoodStoreWAPI/Attachments/${ext}${Attachment.FileType}`;

  //     setSrc(image);
  //   };

  //   getFilePath(props.item.Id);
  // }, [props.item.Id]);
  // return image;

  return (
    <div className="container">
      <Card className="border border-0">
        <CardTitle>
          <b>{props.item.MealBoxTitle}</b>
        </CardTitle>
        <CardBody>
          <CardImg top src={src} alt="Card image cap" />

          <div className="form-group">
            <CardText className="font-italic">
              <Row>
                <Col>
                  <>{props.item.Description}</>
                  <br />
                  <> Price: {props.item.MealBoxPrice}</>
                  <br />
                  <> TotalCalories: {props.item.TotalCalories}</>
                </Col>
                <Col>
                  <> PersonCount: {props.item.PersonCount}</>
                  <br />
                  <> IsKidMeal: {props.item.IsKidMeal ? "Yes" : "No"}</>
                  <br />
                  <> MealBoxOffer: {props.item.MealBoxOffer}</>
                  <br />
                </Col>
              </Row>
              <>
                Protien
                <ProgressBar value={props.item.Protien * props.lavel} />
              </>
              <>
                Fat
                <ProgressBar value={props.item.Fat * props.lavel} />
              </>
              <>
                Fiber
                <ProgressBar value={props.item.Fiber * props.lavel} />
              </>
              <>
                SpiceLevel
                <ProgressBar value={props.item.SpiceLevel * props.lavel} />
              </>
            </CardText>
            <Row>
              <Col>
                <Model
                  buttonLabel="Allergens"
                  Id={props.item.Id}
                  Allergens={props.Allergens}
                  MealBoxItems={props.MealBoxItems.MealItemIdFK}
                />
              </Col>
              <Col>
                <button
                  className="btn btn-danger"
                  onClick={() => props.onEdit(props.item.Id)}
                >
                  Edit
                </button>
              </Col>
              <Col>
                <Button onClick={() => props.Delete(props.item.Id)}>
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </div>

    // </div>
  );
};

export default Example;
