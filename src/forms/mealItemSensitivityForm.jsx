// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import React from "react";
import Joi from "joi-browser";
import axios from "axios";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import { getMealItemSensitivity, saveMealItemSensitivity } from "../services/mealItemSensitivityServices";
import { getMealItems, getSensitiveContents, YesNoWordList } from "../services/listServices";

import TranslateText from "../common/translateText";

class MealItemSensitivityForm extends Form {
  state = {
    data: {
      Id: "",
      MealItemIdFK: "",
      SensitiveContentIdFK: ""
    },
    mealitems: [],
    sensitivecontents: [],
    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    MealItemIdFK: Joi.number()
      .required()
      .label("Meal Item Id F K"),
    SensitiveContentIdFK: Joi.number()
      .required()
      .label("Sensitive Content Id F K")
  };

  async componentDidMount() {
    const sensitivecontentKey = "____sensitivecontents____";
    localStorage.removeItem(sensitivecontentKey);
    const Imported = YesNoWordList();
    const { id: mealItemSensitivityId } = this.props.match.params;
    const [mealitems, sensitivecontents] = await axios.all([getMealItems(), getSensitiveContents()]);
    console.log("TCL: MealItemSensitivityForm -> componentDidMount -> sensitivecontents", sensitivecontents);
    console.log("TCL: MealItemSensitivityForm -> componentDidMount -> mealitems", mealitems);

    this.setState({ mealitems, sensitivecontents, Imported });
    if (mealItemSensitivityId.startsWith("view")) {
      const id = mealItemSensitivityId.substring(4);

      const isView = mealItemSensitivityId.endsWith("&");
      let result;
      if (isView) result = await getMealItemSensitivity(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (mealItemSensitivityId === "new") return;
    const { data } = await getMealItemSensitivity(mealItemSensitivityId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      MealItemIdFK: x.MealItemIdFK,
      SensitiveContentIdFK: x.SensitiveContentIdFK
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const mealItemSensitivity = { ...data };
    // mealItemSensitivity.Imported = !!data.Imported;
    try {
      await saveMealItemSensitivity(mealItemSensitivity);
      this.props.history.push("/mealItemSensitivity_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { mealitems, sensitivecontents } = this.state;
    const { id: mealItemSensitivityId } = this.props.match.params;
    const isView = mealItemSensitivityId.startsWith("view");

    const CRUDType = mealItemSensitivityId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Meal Item Sensitivity" resourceId="lbl_MealItemSensitivity" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          {this.renderSelect("MealItemIdFK", "Meal Item", mealitems)}
          {this.renderSelect("SensitiveContentIdFK", "Sensitive Content", sensitivecontents)}
          {!isView && this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MealItemSensitivityForm;
