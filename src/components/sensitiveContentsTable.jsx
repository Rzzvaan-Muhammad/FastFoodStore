// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React, { Component } from "react";
// import moment from "moment";
import Table from "../common/table";

class SensitiveContentsTable extends Component {
  columns = [
    // {
    //   property: "Id",
    //   label: "Id"
    // },
    {
      property: "SensitiveItem",
      label: "Sensitive Item"
    },
    {
      property: "Description",
      label: "Description"
    }
  ];

  render() {
    const {
      SensitiveContents,
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
        data={SensitiveContents}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default SensitiveContentsTable;
