import React, { Component } from "react";
import Table from "../common/table";

class ProductsTable extends Component {
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
    const { ItemCategorys, onSort, sortColumn, onSelect, selected, onView } = this.props;

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={ItemCategorys}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default ProductsTable;
