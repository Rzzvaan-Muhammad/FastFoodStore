import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
  //     const filter = {
  //       RecordId: id,
  //       AppName: "FastFoodStore",
  //       ModuleName: "MealItem"
  //     };
  //     const { data: response } = await getDUAttachments(filter);
  //     const Attachment = response.Result[0];
  //     if (Attachment !== null) {
  //       const ext = Attachment.FilePath.substr(Attachment.FilePath.lastIndexOf("\\") + 1);
  //       const image = `http://86.14.11.234/FastFoodStoreWAPI/Attachments/${ext}${Attachment.FileType}`;
  //       setSrc(image);
  //     } else {
  //       alert(`Image is not Uploaded.`);
  //     }
  //   };

  //   getFilePath(props.item.Id);
  // }, [props.item.Id]);
  return (
    <div>
      <Card body className="border border-0">
        <CardBody>
          <CardTitle>{props.item.ItemName}</CardTitle>
          <CardSubtitle>
            <> Price: {props.item.ItemPrice}</>
          </CardSubtitle>
        </CardBody>
        <image width="100%" src={src} alt="Card image cap" />
        <CardBody>
          <CardText>
            <Col>
              <>{props.item.Description}</>
              <br />
              <>Calories: {props.item.CaloriesCount}</>
            </Col>
            <Col>
              <>Vegetarian: {props.item.IsVegetarian ? "Yes" : "No"}</>
              <br />
              <>Halal: {props.item.IsHalal ? "Yes" : "No"}</>
              <br />
              <>
                SpiceLevel
                <ProgressBar value={props.item.SpiceLevelIdFK * props.lavel} />
              </>
            </Col>
          </CardText>
          <Row>
            <Col>
              <Model
                buttonLabel="Allergens"
                Id={props.item.Id}
                Allergens={props.Allergens}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button
                className="btn btn-danger"
                onClick={() => props.onEdit(props.item.Id)}
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Button onClick={() => props.Delete(props.item.Id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
