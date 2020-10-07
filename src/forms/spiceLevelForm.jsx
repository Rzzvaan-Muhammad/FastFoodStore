// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import { getSpiceLevel, saveSpiceLevel } from "../services/spiceLevelServices";
import { YesNoWordList, LavelsList } from "../services/listServices";

import TranslateText from "../common/translateText";

class SpiceLevelForm extends Form {
  state = {
    data: {
      Id: "",
      SpiceIntensity: "",
      Name: ""
    },
    SpiceLevelIdFKs: [],
    lavels: [],
    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    SpiceIntensity: Joi.string().allow(""),
    Name: Joi.string().allow("")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();
    const lavels = LavelsList();
    const { id: spiceLevelId } = this.props.match.params;

    this.setState({ Imported, lavels });
    if (spiceLevelId.startsWith("view")) {
      const id = spiceLevelId.substring(4);

      const isView = spiceLevelId.endsWith("&");
      let result;
      if (isView) result = await getSpiceLevel(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (spiceLevelId === "new") return;
    const { data } = await getSpiceLevel(spiceLevelId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      SpiceIntensity: x.SpiceIntensity,
      Name: x.Name
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const spiceLevel = { ...data };
    // spiceLevel.Imported = !!data.Imported;
    try {
      await saveSpiceLevel(spiceLevel);
      this.props.history.push("/spiceLevel_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    // const { data, Imported } = this.state;
    const { id: spiceLevelId } = this.props.match.params;
    const isView = spiceLevelId.startsWith("view");

    const CRUDType = spiceLevelId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}
          <TranslateText defaultText=" Spice Level" resourceId="lbl_SpiceLevel" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          {this.renderInput("SpiceIntensity", "Spice Intensity")}
          {this.renderInput("Name", "Lavel Name")}
          {!isView && this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default SpiceLevelForm;
