// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import React, { Component } from "react";
import Table from "../common/table";

class SpiceLevelsTable extends Component {
  columns = [
    // {
    //     property: "Id",
    //     label: "Id"
    //     },
    {
      property: "SpiceIntensity",
      label: "Spice Intensity"
    },
    {
      property: "Name",
      label: "Lavel Name"
    }
  ];

  render() {
    const { SpiceLevels, onSort, sortColumn, onSelect, selected, onView } = this.props;

    return (
      <Table
        selected={selected}
        columns={this.columns}
        data={SpiceLevels}
        sortColumn={sortColumn}
        onSort={onSort}
        onSelect={onSelect}
        onView={onView}
      />
    );
  }
}

export default SpiceLevelsTable;
