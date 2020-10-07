import React, { Component } from "react";
import Joi from "joi-browser";
import ImageInput from "./imageInput";
import { saveImage } from "../services/imageServices";
import Input, { PasswordInput, InlineInput } from "./input";
import Select from "./select";
import DateInput from "./dateInput";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {}
    };
  }

  validate = () => {
    const options = { abortEarly: true };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = error.details.map(x => {
      const [i] = x.path;
      return { [i]: x.message };
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleDate = (name, date) => {
    const { data } = this.state;
    data[name] = date;
    this.setState({
      data
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // prevent the default page reload behaviour of form

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return; // don't proceed with form submission

    this.doSubmit();
  };

  handleFileChange = e => {
    const files = e.target.files[0];
    this.setState({
      ...this.state.state,
      files,
      imgSrc: URL.createObjectURL(files)
    });
  };

  handleFileUpload = async e => {
    e.preventDefault();
    const { state } = this;
    const form = new FormData();
    for (let index = 0; index < state.files.length; index += 1) {
      const element = state.files[index];
      form.append("file", element);
    }
    const { data } = await saveImage(form);
    let message = "Success!";
    if (!data.success) {
      message = data.message;
    }
    const errors = this.state;
    errors.Image = message;
    this.setState({
      ...state,
      errors,
      Image: data.Id
    });
  };

  renderButton = label => {
    return (
      <button type="submit" disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        options={options}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    if (type === "password")
      return (
        <PasswordInput
          type={type}
          name={name}
          label={label}
          value={data[name]}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderInlineInput = (name, placeholder, type = "text") => {
    const { data, errors } = this.state;
    return (
      <InlineInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderDatePicker = (name, placeholder, value) => {
    const { errors } = this.state;
    return (
      <DateInput name={name} placeholder={placeholder} value={value} onChange={this.handleDate} errors={errors[name]} />
    );
  };

  renderImagePicker = name => {
    const { errors, imgSrc } = this.state;
    return (
      <ImageInput
        imgSrc={imgSrc}
        name={name}
        onChange={this.handleFileChange}
        onUpload={this.handleFileUpload}
        error={errors[name]}
      />
    );
  };
}

export default Form;
