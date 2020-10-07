// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Row, Col } from "reactstrap";
import Form from "../common/customForm";
import Attachment from "./DUTaskAttachmentForm";
import AttachmentList from "../components/NewAttachmentTable";
import MealBoxItemsList from "../components/NewMealBoxItemsList";

// import AttachmentList from "../NewAttachmentTable";

import { getMealBox, saveMealBox } from "../services/mealBoxServices";
import { YesNoWordList, LavelsList } from "../services/listServices";

import TranslateText from "../common/translateText";

class MealBoxForm extends Form {
  state = {
    data: {
      // Id: "",
      CustomerId: "",
      MealBoxTitle: "",
      Description: "",
      MealBoxPrice: "",
      TotalCalories: "",
      PersonCount: "",
      IsKidMeal: "",
      MealBoxOffer: "",
      Protien: "",
      Fat: "",
      Fiber: "",
      SpiceLevel: ""
    },
    MealBoxIdFKs: [],
    Lavels: [],
    YesNoWordList: [],
    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    CustomerId: Joi.number()
      .required()
      .label("Customer Id"),
    MealBoxTitle: Joi.string().allow(""),
    Description: Joi.string().allow(""),
    MealBoxPrice: Joi.number()
      .required()
      .label("Meal Box Price"),
    TotalCalories: Joi.number()
      .required()
      .label("Total Calories"),
    PersonCount: Joi.number()
      .required()
      .label("Person Count"),

    MealBoxOffer: Joi.number()
      .required()
      .label("Meal Box Offer"),
    IsKidMeal: Joi.bool()
      .required()
      .label("Is Kid Meal"),
    Protien: Joi.number()
      .required()
      .label("Protien"),
    Fat: Joi.number()
      .required()
      .label("Fat"),
    Fiber: Joi.number()
      .required()
      .label("Fiber"),
    SpiceLevel: Joi.number()
      .required()
      .label("SpiceLevel")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();
    const Lavels = LavelsList();
    const { id: mealBoxId } = this.props.match.params;
    this.setState({ Imported, Lavels });
    if (mealBoxId.startsWith("view")) {
      const id = mealBoxId.substring(4);

      const isView = mealBoxId.endsWith("&");
      let result;
      if (isView) result = await getMealBox(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (mealBoxId === "new") return;
    const { data } = await getMealBox(mealBoxId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      CustomerId: x.CustomerId,
      MealBoxTitle: x.MealBoxTitle,
      Description: x.Description,
      MealBoxPrice: x.MealBoxPrice,
      TotalCalories: x.TotalCalories,
      PersonCount: x.PersonCount,
      IsKidMeal: x.IsKidMeal,
      MealBoxOffer: x.MealBoxOffer,
      Protien: x.Protien,
      Fat: x.Fat,
      Fiber: x.Fiber,
      SpiceLevel: x.SpiceLevel
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const mealBox = { ...data };
    // mealBox.Imported = !!data.Imported;
    try {
      await saveMealBox(mealBox);
      this.props.history.push("/mealBox_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { Lavels } = this.state;
    const { id: mealBoxId } = this.props.match.params;
    const isView = mealBoxId.startsWith("view");

    const CRUDType = mealBoxId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Meal Box" resourceId="lbl_MealBox" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          <Row>
            <Col>
              {this.renderInput("CustomerId", "Customer Id")}
              {this.renderInput("MealBoxTitle", "Meal Box Title")}
              {this.renderInput("Description", "Description")}
              {this.renderInput("MealBoxPrice", "Meal Box Price")}
              {this.renderInput("TotalCalories", "Total Calories")}
              {this.renderInput("PersonCount", "Person Count")}
            </Col>
            <Col>
              {this.renderCheckBox("IsKidMeal", "Is Kid Meal")}
              {this.renderSelect("Protien", "Protien", Lavels)}
              {this.renderSelect("Fat", "Fat", Lavels)}
              {this.renderSelect("Fiber", "Fiber", Lavels)}
              {this.renderSelect("SpiceLevel", "SpiceLevel", Lavels)}
              {this.renderInput("MealBoxOffer", "Meal Box Offer")}
              {!isView ? this.renderButton("Save") : null}
            </Col>
          </Row>
        </form>
        {CRUDType === "Update" && (
          <Row>
            <Col>
              <MealBoxItemsList mealBoxId={mealBoxId} />
            </Col>
            <Col>{!isView && <AttachmentList {...this.props} RecordId={mealBoxId} ModuleName="MealBox" />}</Col>
            <Col>
              {!isView && <Attachment {...this.props} path="mealBox_list" RecordId={mealBoxId} ModuleName="MealBox" />}
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default MealBoxForm;
