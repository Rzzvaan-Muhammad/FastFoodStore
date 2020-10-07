// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../common/customForm";
import { getItemCategory, saveItemCategory } from "../services/ItemCategoryServices";
import { YesNoWordList } from "../services/listServices";

import TranslateText from "../common/translateText";

class ItemCategoryForm extends Form {
  state = {
    data: {
      Id: "",
      CustomerId: "",
      CategoryTitle: ""
    },
    ItemCategoryIdFKs: [],

    errors: {}
  };

  schema = {
    Id: Joi.any(),
    CustomerId: Joi.number()
      .required()
      .label("Customer Id"),
    CategoryTitle: Joi.string().allow("")
  };

  async componentDidMount() {
    const Imported = YesNoWordList();

    const { id: itemCategoryId } = this.props.match.params;

    this.setState({ Imported });
    if (itemCategoryId.startsWith("view") || itemCategoryId.startsWith("Assign")) {
      let id;
      if (itemCategoryId.startsWith("view")) {
        id = itemCategoryId.substring(4);
      }
      if (itemCategoryId.startsWith("Assign")) {
        id = itemCategoryId.substring(6);
      }
      const isView = itemCategoryId.endsWith("&");
      let result;
      if (isView) result = await getItemCategory(id);
      // else result = await getTrackedVersion(id);
      this.setState({ data: this.mapToViewModel(result.data.Result) });
      return;
    }
    if (itemCategoryId === "new") return;
    const { data } = await getItemCategory(itemCategoryId);
    this.setState({ data: this.mapToViewModel(data.Result) });
  }

  mapToViewModel = x => {
    return {
      Id: x.Id,
      CustomerId: x.CustomerId,
      CategoryTitle: x.CategoryTitle
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const itemCategory = { ...data };
    // itemCategory.Imported = !!data.Imported;
    try {
      await saveItemCategory(itemCategory);
      this.props.history.push("/itemCategory_list");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { id: itemCategoryId } = this.props.match.params;
    const isView = itemCategoryId.startsWith("view");

    const CRUDType = itemCategoryId === "new" ? "Create" : "Update";
    return (
      <div>
        <h1>
          {!isView && <TranslateText defaultText={CRUDType} resourceId={`lbl_${CRUDType}`} />}

          <TranslateText defaultText=" Item Category" resourceId="lbl_ItemCategory" />
        </h1>
        <form onSubmit={this.handleSubmit}>
          {/* {this.renderInput("Id", "Id")} */}
          {this.renderInput("CustomerId", "Customer Id")}
          {this.renderInput("CategoryTitle", "Category Title")}
          {!isView && this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ItemCategoryForm;
