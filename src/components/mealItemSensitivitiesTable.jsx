// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import React, { Component } from "react";
import Table from "../common/table";
import { getSensitiveContentsName, getMealItemsName } from "../services/listServices";

class MealItemSensitivitiesTable extends Component {
  columns = [
    // {
    //   property: "Id",
    //   label: "Id"
    // },
    {
      property: "MealItemIdFK",
      label: "Meal Item",
      content: SensitiveContent => getMealItemsName(SensitiveContent.MealItemIdFK)
    },
    {
      property: "SensitiveContentIdFK",
      label: "Sensitive Content",
      content: SensitiveContent => getSensitiveContentsName(SensitiveContent.SensitiveContentIdFK)
    }
  ];

  render() {
    const { MealItemSensitivities, onSort, sortColumn, onSelect, selected, onView } = this.props;

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={MealItemSensitivities}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default MealItemSensitivitiesTable;
