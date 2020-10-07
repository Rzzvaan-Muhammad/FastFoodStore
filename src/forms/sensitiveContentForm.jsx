// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import { getSensitiveContent, saveSensitiveContent } from "../services/sensitiveContentServices";
import { YesNoWordList } from "../services/listServices";

import TranslateText from "../common/translateText";

class SensitiveContentForm extends Form {
  state = {
    data: {
      Id: "",
      SensitiveItem: "",
      Description: ""
    },
    SensitiveContentIdFKs: [],

    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    SensitiveItem: Joi.string().allow(""),
    Description: Joi.string().allow("")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();
    const { id: sensitiveContentId } = this.props.match.params;

    this.setState({ Imported });
    if (sensitiveContentId.startsWith("view")) {
      const id = sensitiveContentId.substring(4);

      const isView = sensitiveContentId.endsWith("&");
      let result;
      if (isView) result = await getSensitiveContent(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (sensitiveContentId === "new") return;
    const { data } = await getSensitiveContent(sensitiveContentId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      SensitiveItem: x.SensitiveItem,
      Description: x.Description
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const sensitiveContent = { ...data };
    // sensitiveContent.Imported = !!data.Imported;
    try {
      await saveSensitiveContent(sensitiveContent);
      this.props.history.push("/sensitiveContent_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    // const { data, Imported } = this.state;
    const { id: sensitiveContentId } = this.props.match.params;
    const isView = sensitiveContentId.startsWith("view");

    const CRUDType = sensitiveContentId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Sensitive Content" resourceId="lbl_SensitiveContent" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          {this.renderInput("SensitiveItem", "Sensitive Item")}
          {this.renderInput("Description", "Description")}
          {!isView && this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default SensitiveContentForm;
