// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:18
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import moment from "moment";
import Table from "../common/table";

class ItemCategoriesTable extends Component {
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
      property: "CategoryTitle",
      label: "Category Title"
    }
  ];

  render() {
    const {
      ItemCategories,
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
        data={ItemCategories}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default ItemCategoriesTable;
