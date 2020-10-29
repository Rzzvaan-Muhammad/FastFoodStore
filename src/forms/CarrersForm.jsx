// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:19
import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Row, Col } from "reactstrap";
import Form from "../common/customForm";
import Footer from "../components/footer";

import TranslateText from "../common/translateText";

class CarrersForm extends Form {
  state = {
    data: {
      // Id: "",
      CustomerId: "",
      MealBoxTitle: "",
      Description: "",
      MealBoxPrice: "",
      TotalCalories: "",
      PersonCount: "",
      IsKidMeal: "",
      MealBoxOffer: "",
      Protien: "",
      Fat: "",
      Fiber: "",
      SpiceLevel: ""
    },
    MealBoxIdFKs: [],
    Lavels: [],
    YesNoWordList: [],
    errors: {}
  };

  schema = {
    Id: Joi.any().label("Id"),
    CustomerId: Joi.number()
      .required()
      .label("Customer Id"),
    MealBoxTitle: Joi.string().allow(""),
    Description: Joi.string().allow(""),
    MealBoxPrice: Joi.number()
      .required()
      .label("Meal Box Price"),
    TotalCalories: Joi.number()
      .required()
      .label("Total Calories"),
    PersonCount: Joi.number()
      .required()
      .label("Person Count"),

    MealBoxOffer: Joi.number()
      .required()
      .label("Meal Box Offer"),
    IsKidMeal: Joi.bool()
      .required()
      .label("Is Kid Meal"),
    Protien: Joi.number()
      .required()
      .label("Protien"),
    Fat: Joi.number()
      .required()
      .label("Fat"),
    Fiber: Joi.number()
      .required()
      .label("Fiber"),
    SpiceLevel: Joi.number()
      .required()
      .label("SpiceLevel")
  };

  mapToViewModel = x => {
    return {
      Id: x.Id,
      CustomerId: x.CustomerId,
      MealBoxTitle: x.MealBoxTitle,
      Description: x.Description,
      MealBoxPrice: x.MealBoxPrice,
      TotalCalories: x.TotalCalories,
      PersonCount: x.PersonCount,
      IsKidMeal: x.IsKidMeal,
      MealBoxOffer: x.MealBoxOffer,
      Protien: x.Protien,
      Fat: x.Fat,
      Fiber: x.Fiber,
      SpiceLevel: x.SpiceLevel
    };
  };

  doSubmit = async () => {
    //   this.props.history.push("/mealBox_list");
  };

  render() {
    const { Lavels } = this.state;
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">
              Carrers Form
            </a>
          </div>
        </nav>
        <div className="Carrersform">
          <form onSubmit={this.handleSubmit}>
            <Row>
              <h5>PERSONNEL INFO</h5>
            </Row>

            <Row>
              <Col>{this.renderInput("Name", "Name")}</Col>
              <Col>{this.renderDatePicker("DateOfBirth", "Date Of Birth")}</Col>
            </Row>
            <Row>
              <Col>
                {this.renderInput("CountryOfBirth", "Country Of Birth")}
              </Col>
              <Col> {this.renderInput("CityOfBirth", "City Box Price")}</Col>
            </Row>
            {this.renderInput("CNIC", "CNIC Number")}
            <Row>
              <Col>
                {this.renderDatePicker("CnicIssueDate", "CNIC issue date")}
              </Col>
              <Col>
                {this.renderDatePicker("CnicexpiryDate", "CNIC expiry date")}
              </Col>
            </Row>
            <Row>
              <Col>
                {this.renderSelect("martialStatus", "martial Status", Lavels)}
              </Col>
              <Col>{this.renderSelect("Gender", "Gender", Lavels)}</Col>
              <Col>{this.renderSelect("Religion", "Religion", Lavels)}</Col>
            </Row>
            <Row>
              <Col>{this.renderSelect("Disabtilty", "Disabtilty", Lavels)}</Col>
            </Row>
            <Row>
              <h5>ADDRESS</h5>
            </Row>
            <Row>
              <Col>
                {this.renderInput("ContectNumber", "Contect Number", Lavels)}
              </Col>
              <Col>{this.renderInput("Address", "Address", Lavels)}</Col>
            </Row>
            <Row>
              <Col> {this.renderSelect("Country", "Country", Lavels)}</Col>
              <Col> {this.renderInput("State", "State/Provence")}</Col>
              <Col> {this.renderSelect("City", "City", Lavels)}</Col>
            </Row>
            <Row>
              <h5>JOB POSTING</h5>
            </Row>
            <Row>
              <Col>
                {this.renderSelect(
                  "reffered",
                  "How were you reffered to us ?",
                  Lavels
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {this.renderInput("CityApplyingfor", "City Applying for *")}
              </Col>
              <Col>
                {this.renderSelect(
                  "Position",
                  "Position you are applying for",
                  Lavels
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                {this.renderSelect(
                  "Type",
                  "Type of employement desired",
                  Lavels
                )}
              </Col>
              <Col>
                {this.renderSelect("shift", "Type of shift desired", Lavels)}
              </Col>
            </Row>
            <Row>
              <h5>QUALIFICATION</h5>
            </Row>
            <Row>
              <Col> {this.renderInput("Degree", "Degree")}</Col>
              <Col> {this.renderInput("major", "Major")}</Col>
            </Row>
            <Row>
              <Col>
                {this.renderDatePicker(
                  "QualificationYear",
                  "Qualification Year"
                )}
              </Col>
              <Col> {this.renderInput("PlaceOfTution", "Place Of Tution")}</Col>
            </Row>
            <Row>
              <h5>EXPERIENCE</h5>
            </Row>
            <Row>
              <Col>
                {this.renderSelect(
                  "experience.",
                  "Total years of experience.",
                  Lavels
                )}
              </Col>
              <Col> {this.renderInput("LastPosition", "Last Position")}</Col>
              <Col> {this.renderInput("LastCompany", "Last Company")}</Col>
            </Row>
            {this.renderButton("Save")}
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default CarrersForm;
