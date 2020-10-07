import React from "react";
import TranslateText from "./translateText";

const ImageInput = ({ imgSrc, name, onChange, onUpload, error }) => (
  <div
    style={{
      position: "relative",
      float: "right",
      right: 0,
      bottom: 120,
      width: 100,
      height: 150
    }}
  >
    <img
      src={imgSrc}
      style={{ height: "100px", width: "100px" }}
      alt={imgSrc}
    />
    <input
      style={{ color: "transparent" }}
      type="file"
      name={name}
      id={name}
      onChange={onChange}
    />
    <button type="submit" onClick={onUpload}>
      <TranslateText defaultText="Upload" resourceId="lbl_Upload" />
    </button>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);
export default ImageInput;
