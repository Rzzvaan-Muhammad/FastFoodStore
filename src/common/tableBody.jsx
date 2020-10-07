import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.property);
  };

  createKey = (item, column) => {
    return item.Id + (column.property || column.key);
  };

  renderStyle = isSelected => {
    if (isSelected) return { backgroundColor: "skyblue" };

    return null;
  };

  render() {
    const { data, columns, selected, onSelect, onView } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr
            key={item.Id}
            className="clickable"
            style={this.renderStyle(selected === item.Id)}
            onClick={() => onSelect(item.Id)}
            onDoubleClick={() => onView(item.Id)}
          >
            {columns.map(column => (
              <td key={this.createKey(item, column)} className="text-left">
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
