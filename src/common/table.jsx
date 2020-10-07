import React from "react";
import { Table as BSTable } from "reactstrap";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({
  columns,
  sortColumn,
  onSort,
  data,
  selected,
  onSelect,
  onView
}) => {
  return (
    <BSTable size="sm" hover responsive borderless>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        data={data}
        columns={columns}
        selected={selected}
        onView={onView}
        onSelect={onSelect}
      />
    </BSTable>
  );
};

export default Table;
