import React, { Component } from "react";
import moment from "moment";
import Table from "../common/table";

class ProductsTable extends Component {
  columns = [
    {
      property: "UserId",
      label: "User ID"
    },
    {
      property: "ObjectName",
      label: "Object Name"
    },
    {
      property: "TransactionType",
      label: "Transaction Type"
    },
    {
      property: "IsDeleted",
      label: "Deleted",

      content: change => (change.IsDeleted && change.IsDeleted ? "Yes" : "No")
    },
    {
      property: "TransactionDate",
      label: "Transaction Date",
      content: change => change.TransactionDate && moment(change.TransactionDate).fromNow()
    },
    {
      property: "Version",
      label: "Version"
    }
  ];

  render() {
    const { changes, onSort, sortColumn, onSelect, selected, onView } = this.props;
    console.log(changes);

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={changes}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default ProductsTable;
