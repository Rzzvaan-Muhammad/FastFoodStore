// code generated @DevUp using PlatformBuilder, 01/01/2020 13:57:39
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Button, Col, Row } from "reactstrap";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../common/customForm";
import { getMealBoxes } from "../services/mealBoxServices";
import { saveFile } from "../services/fileServices";

class dUTaskAttachmentForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        Id: "",
        RecordId: "",
        FilePath: "",
        FileType: "",
        AppName: "",
        ModuleName: "",
        Description: "",
        ImageTag: ""
      },
      DUTasks: [],
      errors: {}
    };
    this.match = { ...this.props.match };
  }

  schema = {
    Id: Joi.any().label("Id"),
    RecordId: Joi.number(),
    FileType: Joi.string().allow(""),
    FilePath: Joi.string().allow(""),
    AppName: Joi.string().allow(""),
    ModuleName: Joi.string().allow(""),
    Description: Joi.string().allow(""),
    ImageTag: Joi.string().allow("")
  };

  mapToViewModel = x => {
    return {
      Id: x.Id,
      FileType: x.FileType,
      FilePath: x.FilePath,
      AppName: x.AppName,
      ModuleName: x.ModuleName,
      Description: x.Description,
      ImageTag: x.ImageTag
    };
  };

  handleFileChange = e => {
    const files = e.target.files[0];
    this.setState({
      ...this.state.state,
      files,
      imgSrc: URL.createObjectURL(files)
    });
  };

  async componentDidMount() {
    const { data: response } = await getMealBoxes();

    this.setState({ DUTasks: response.Result });
  }

  handleFileUpload = async e => {
    e.preventDefault();
    const { files } = this.state;
    console.log("TCL: files", files);
    const formData = new FormData();

    formData.append("file", files);
    formData.append("AppName", "FastFoodStore");
    formData.append("ModuleName", this.props.ModuleName);
    formData.append("ImageTag", "");
    formData.append("RecordId", this.props.RecordId);
    // formData.append("RecordId", 2);

    // form.append(data);
    console.log("TCL: dUTaskAttachmentForm -> this.state.data", this.state.data);
    for (const [key, value] of Object.entries(this.state.data)) {
      console.log(`${key}: ${value}`);
      formData.append(key, value);
    }
    // files.forEach(file => form.append("file", file));

    console.log("TCL: dUTaskAttachmentForm -> formData", formData);
    const { data } = await saveFile(formData);

    console.log("TCL: dUTaskAttachmentForm -> data", data);
    let message = "Success!";
    if (!data.success) {
      message = data.message;
    }
    const errors = this.state;
    errors.Image = message;

    this.setState({
      ...files,
      errors,
      Image: data.Id
    });
    this.props.history.push(`/${this.props.path}`);
  };

  handleFileChange = e => {
    const files = e.target.files[0];
    this.setState({
      ...this.state.state,
      files,
      imgSrc: URL.createObjectURL(files)
    });
  };

  doSubmit = async () => {
    const { data } = this.state;
    const dUTaskAttachment = { ...data };
    console.log("TCL: dUTaskAttachmentForm -> doSubmit -> dUTaskAttachment", dUTaskAttachment);
    try {
      // await saveDUAttachment(dUTaskAttachment);
      await this.handleFileUpload();
      this.props.history.push(`/TaskAttachments`);
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    console.log(this.props.mealBoxId, "props");
    return (
      <div>
        <div>
          <form className="my-form" onSubmit={this.handleFileUpload}>
            <div className="file-upload-wrapper area ">
              <Row>
                <Col>
                  <input
                    type="file"
                    id="input-file-now-custom-2"
                    className="file-upload"
                    data-height="300"
                    onChange={this.handleFileChange}
                  />
                </Col>
                <Col>
                  <Button className="btn btn-secondry" type="submit">
                    <FontAwesomeIcon icon={faUpload} />
                  </Button>
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default dUTaskAttachmentForm;
