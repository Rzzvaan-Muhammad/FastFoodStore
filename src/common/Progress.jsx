/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";

export function ProgressBar({ value, color }) {
  return (
    <div className="progress" style={{ height: "4px" }}>
      <div
        className="determinate"
        role="progressbar"
        style={{
          width: `${value}%`,
          height: "4px",
          backgroundColor: `${color}`
        }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {/* {value / 10} */}
      </div>
    </div>
  );
}
