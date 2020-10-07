import React, { Component } from "react";
import DatePicker from "react-datepicker";
import TranslateText from "./translateText";

class DateInput extends Component {
  setDate = date => {
    this.props.onChange(this.props.name, date);
  };

  render() {
    const { name, placeholder, value, error } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>
          <TranslateText
            defaultText={placeholder}
            resourceId={placeholder.replace(/\s+/g, "_")}
          />
        </label>
        <DatePicker
          id={name}
          name={name}
          selected={value}
          onChange={this.setDate}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default DateInput;
