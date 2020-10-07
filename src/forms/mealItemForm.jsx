// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import React from "react";
import Joi from "joi-browser";
import { Row, Col } from "reactstrap";

import axios from "axios";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import Attachment from "./DUTaskAttachmentForm";
import AttachmentList from "../components/NewAttachmentTable";
import { getMealItem, saveMealItem } from "../services/mealItemServices";
import { getItemCategories, getSpiceLevels, YesNoWordList } from "../services/listServices";

import TranslateText from "../common/translateText";

class MealItemForm extends Form {
  state = {
    data: {
      Id: "",
      CustomerId: "",
      SpiceLevelIdFK: "",
      ItemCategoryIdFK: "",
      ItemName: "",
      ItemPrice: "",
      CaloriesCount: "",
      Description: "",
      IsVegetarian: "",
      IsHalal: ""
    },
    spicelevels: [],
    Lavels: [],
    itemcategories: [],
    Imported: [],

    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    CustomerId: Joi.number()
      .required()
      .label("Customer Id"),
    SpiceLevelIdFK: Joi.number()
      .required()
      .label("Spice Level Id F K"),
    ItemCategoryIdFK: Joi.number()
      .required()
      .label("Item Category Id F K"),
    ItemName: Joi.string().allow(""),
    ItemPrice: Joi.number()
      .required()
      .label("Item Price"),
    CaloriesCount: Joi.number()
      .required()
      .label("Calories Count"),
    Description: Joi.string().allow(""),
    IsVegetarian: Joi.bool().allow(""),
    IsHalal: Joi.bool().allow("")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();
    const itemcategoryKey = "____itemcategories____";
    const spicelevelKey = "____spicelevels____";
    localStorage.removeItem(itemcategoryKey);
    localStorage.removeItem(spicelevelKey);

    const { id: mealItemId } = this.props.match.params;
    const [itemcategories, Lavels] = await axios.all([getItemCategories(), getSpiceLevels()]);

    this.setState({ Lavels, Imported, itemcategories });
    if (mealItemId.startsWith("view")) {
      const id = mealItemId.substring(4);

      const isView = mealItemId.endsWith("&");
      let result;
      if (isView) result = await getMealItem(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (mealItemId === "new") return;
    const { data } = await getMealItem(mealItemId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      CustomerId: x.CustomerId,
      SpiceLevelIdFK: x.SpiceLevelIdFK,
      ItemCategoryIdFK: x.ItemCategoryIdFK,
      ItemName: x.ItemName,
      ItemPrice: x.ItemPrice,
      CaloriesCount: x.CaloriesCount,
      Description: x.Description,
      IsVegetarian: x.IsVegetarian,
      IsHalal: x.IsHalal
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const mealItem = { ...data };
    // mealItem.Imported = !!data.Imported;
    try {
      await saveMealItem(mealItem);
      this.props.history.push("/mealItem_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { data, Imported, Lavels, itemcategories } = this.state;

    const { id: mealItemId } = this.props.match.params;
    const isView = mealItemId.startsWith("view");
    const CRUDType = mealItemId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Meal Item" resourceId="lbl_MealItem" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              {this.renderInput("CustomerId", "Customer Id")}
              {this.renderInput("ItemName", "Item Name")}
              {this.renderInput("ItemPrice", "Item Price")}
              {this.renderInput("CaloriesCount", "Calories Count")}
            </Col>
            <Col>
              {this.renderInput("Description", "Description")}

              {this.renderCheckBox("IsVegetarian", "Is Vegetarian")}
              {this.renderCheckBox("IsHalal", "Is Halal")}

              {this.renderSelect("SpiceLevelIdFK", "Spice Level", Lavels)}
              {this.renderSelect("ItemCategoryIdFK", "Item Category", itemcategories)}
              {this.renderButton("Save")}
            </Col>
          </Row>
          {/* {this.renderInput("Id", "Id")} */}
        </form>
        {CRUDType === "Update" && (
          <Row>
            <Col>{!isView && <AttachmentList {...this.props} RecordId={mealItemId} ModuleName="mealItem" />}</Col>
            <Col>
              {!isView && (
                <Attachment {...this.props} RecordId={mealItemId} path={"mealItem_list"} ModuleName="mealItem" />
              )}
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default MealItemForm;
