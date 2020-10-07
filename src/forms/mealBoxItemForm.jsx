// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React from "react";
import Joi from "joi-browser";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import { getMealBoxItem, saveMealBoxItem } from "../services/mealBoxItemServices";
import { getMealBoxes, getMealItems, YesNoWordList } from "../services/listServices";

import TranslateText from "../common/translateText";

class MealBoxItemForm extends Form {
  state = {
    data: {
      Id: "",
      MealBoxIdFK: "",
      MealItemIdFK: "",
      Quantity: ""
    },
    mealboxes: [
      { Id: 1, Name: "item1" },
      { Id: 2, Name: "item2" }
    ],
    mealitems: [
      { Id: 1, Name: "item1" },
      { Id: 2, Name: "item2" }
    ],
    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    MealBoxIdFK: Joi.number()
      .required()
      .label("Meal Box Id F K"),
    MealItemIdFK: Joi.number()
      .required()
      .label("Meal Item Id F K"),
    Quantity: Joi.number()
      .required()
      .label("Quantity")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();
    const mealboxKey = "____mealboxes____";
    const mealitemKey = "____mealitems____";
    localStorage.removeItem(mealboxKey);
    localStorage.removeItem(mealitemKey);

    const { id: mealBoxItemId } = this.props.match.params;
    const [mealboxes, mealitems] = await axios.all([getMealBoxes(), getMealItems()]);
    this.setState({ mealboxes, mealitems, Imported });
    if (mealBoxItemId.startsWith("view")) {
      const id = mealBoxItemId.substring(4);

      const isView = mealBoxItemId.endsWith("&");
      let result;
      if (isView) result = await getMealBoxItem(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (mealBoxItemId === "new") return;
    const { data } = await getMealBoxItem(mealBoxItemId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      MealBoxIdFK: x.MealBoxIdFK,
      MealItemIdFK: x.MealItemIdFK,
      Quantity: x.Quantity
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const mealBoxItem = { ...data };
    // mealBoxItem.Imported = !!data.Imported;
    try {
      await saveMealBoxItem(mealBoxItem);
      this.props.history.push("/mealBoxItem_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { mealboxes, mealitems } = this.state;
    const { id: mealBoxItemId } = this.props.match.params;
    const isView = mealBoxItemId.startsWith("view");

    const CRUDType = mealBoxItemId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Meal Box Item" resourceId="lbl_MealBoxItem" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          {this.renderInput("Quantity", "Quantity")}
          {this.renderSelect("MealBoxIdFK", "Meal Box", mealboxes)}
          {this.renderSelect("MealItemIdFK", "Meal Item", mealitems)}
          {!isView && this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MealBoxItemForm;
