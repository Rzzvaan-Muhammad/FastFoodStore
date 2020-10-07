import React from "react";
import TranslateText from "./translateText";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <TranslateText defaultText={label} resourceId={label.replace(/\s+/g, "_")} />
      </label>
      <select {...rest} id={name} name={name} className="form-control">
        <option value="0">...select...</option>
        {options.map(option => (
          <option key={option.Id} value={option.Id}>
            {option.Name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
