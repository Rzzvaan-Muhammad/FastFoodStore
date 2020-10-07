/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";

export function ProgressBar({ value }) {
  return (
    <div className="progress md-progress" style={{ height: "4px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${value}%`, height: "4px" }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {/* {value / 10} */}
      </div>
    </div>
  );
}
