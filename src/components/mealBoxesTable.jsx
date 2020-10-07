// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Table from "../common/table";

class MealBoxesTable extends Component {
  columns = [
    // {
    //   property: "Id",
    //   label: "Id"
    // },
    {
      property: "CustomerId",
      label: "Customer Id"
    },
    {
      property: "MealBoxTitle",
      label: "Meal Box Title"
    },
    {
      property: "Description",
      label: "Description"
    },
    {
      property: "MealBoxPrice",
      label: "Meal Box Price"
    },
    {
      property: "TotalCalories",
      label: "Total Calories"
    },
    {
      property: "PersonCount",
      label: "Person Count"
    },
    {
      label: "Is Kid Meal",
      property: "IsKidMeal",
      content: MealBox => (
        <p>{MealBox.IsKidMeal && MealBox.IsKidMeal ? "Yes" : "No"}</p>
      )
    },
    {
      property: "MealBoxOffer",
      label: "Meal Box Offer"
    }
  ];

  render() {
    const {
      MealBoxes,
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
        data={MealBoxes}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default MealBoxesTable;
