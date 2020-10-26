// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React, { Component } from "react";
import Table from "../common/table";
import { getMealItemsName, getMealBoxesName } from "../services/listServices";

class MealBoxItemsTable extends Component {
  columns = [
    // {
    //   property: "Id",
    //   label: "Id"
    // },
    {
      property: "MealBoxIdFK",
      label: "Meal Box",
      content: MealBox => getMealBoxesName(MealBox.MealBoxIdFK)
    },
    {
      property: "MealItemIdFK",
      label: "Meal Item",
      content: MealItem => getMealItemsName(MealItem.MealItemIdFK)
    },
    {
      property: "Quantity",
      label: "Quantity"
    }
  ];

  render() {
    const {
      MealBoxItems,
      onSort,
      sortColumn,
      onSelect,
      selected,
      onView
    } = this.props;

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={MealBoxItems}
        show="false"
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default MealBoxItemsTable;
