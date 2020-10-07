// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:20
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Table from "../common/table";

class MealItemsTable extends Component {
  columns = [
    {
      property: "Id",
      label: "Id"
    },
    {
      property: "CustomerId",
      label: "Customer Id"
    },
    {
      property: "SpiceLevelIdFK",
      label: "Spice Level"
    },
    {
      property: "ItemCategoryIdFK",
      label: "Item Category"
    },
    {
      property: "ItemName",
      label: "Item Name"
    },
    {
      property: "ItemPrice",
      label: "Item Price"
    },
    {
      property: "CaloriesCount",
      label: "Calories Count"
    },
    {
      property: "Description",
      label: "Description"
    },
    {
      label: "Is Vegetarian",
      property: "IsVegetarian",
      content: MealItem => (
        <p>{MealItem.IsVegetarian && MealItem.IsVegetarian ? "Yes" : "No"}</p>
      )
    },
    {
      label: "Is Halal",
      property: "IsHalal",
      content: MealItem => (
        <p>{MealItem.IsHalal && MealItem.IsHalal ? "Yes" : "No"}</p>
      )
    }
  ];

  render() {
    const {
      MealItems,
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
        data={MealItems}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default MealItemsTable;
