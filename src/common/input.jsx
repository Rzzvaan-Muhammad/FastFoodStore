import React from "react";
import { FormGroup, Label, Input as InputStrap, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import TranslateText from "./translateText";

const fieldIcon = {
  float: "right",
  marginTop: "-35px",
  position: "relative",
  zIndex: 2
};
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <TranslateText defaultText={label} resourceId={label.replace(/\s+/g, "_")} />
      </label>
      <input {...rest} id={name} name={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export const CheckBox = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <Row>
        <Col>
          <label htmlFor={name}>
            <TranslateText defaultText={label} resourceId={label.replace(/\s+/g, "_")} />
          </label>
        </Col>
        <Col>
          <input {...rest} type="checkbox" id={name} name={name} className="form-check-input" />
        </Col>
      </Row>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export const PasswordInput = ({ name, label, error, type, ...rest }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const textType = isVisible ? "text" : type;
  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <div>
        <input {...rest} type={textType} id={name} name={name} placeholder={label} className="form-control" />
        {type === "password" ? (
          <FontAwesomeIcon
            style={fieldIcon}
            onClick={() => setIsVisible(!isVisible)}
            size="1x"
            color="gray"
            className="mr-3"
            icon={isVisible ? faEyeSlash : faEye}
          />
        ) : null}
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};
export const InlineInput = ({ name, placeholder, error, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name} hidden>
        <TranslateText defaultText={placeholder} resourceId={placeholder.replace(/\s+/g, "_")} />
      </Label>
      <InputStrap {...rest} type="text" name={name} id={name} placeholder={placeholder} />
      {error && <div className="alert alert-danger">{error}</div>}
    </FormGroup>
  );
};

export default Input;
