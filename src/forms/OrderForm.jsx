import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Row, Col, Button } from "reactstrap";
import Form from "../common/customForm";
import { getOrderes, saveOrder } from "../services/OrderServices";
import { YesNoWordList } from "../services/listServices";
import { getMealBox } from "../services/mealBoxServices";

class MealBoxForm extends Form {
  state = {
    data: {
      //   Id: "",
      UserIdFK: "",
      OrderName: "",
      TaxAmount: "",
      TotalDue: "",
      PaymentType: "",
      ContactNumber: "",
      Comment: "",
      OrderDate: new Date(),
      PaymentStatus: "",
      OrderStatus: "",
      EmailAddress: "",
      OrderTotalPrice: "",
      DeliveryAddressLine1: "",
      DeliveryAddressLine2: "",
      DeliveryAddressLine3: "",
      Country: "",
      Postcode: "",
      DeliveryAddress: "",
    },
    MealBoxData: [],
    ItemOrderIdFKs: [],
    User: [
      { Id: 1, Name: "Sultan" },
      { Id: 2, Name: "Rizwan" },
      { Id: 3, Name: "Zahoor" },
    ],
    OrderStatus: [
      { Id: 1, Name: "Panding" },
      { Id: 2, Name: "Placed" },
    ],
    PaymentStatus: [
      { Id: 1, Name: "Due" },
      { Id: 2, Name: "Charged" },
    ],
    PaymentType: [
      { Id: 1, Name: "Online" },
      { Id: 2, Name: "Cash" },
    ],
    errors: {},
    modal: false,
  };

  schema = {
    OrderTitle: Joi.any(),
    UserIdFK: Joi.any(),
    DeliveryAddress: Joi.string().required(),
    PaymentType: Joi.number().allow(""),
    ContactNumber: Joi.string().required(),
    Comment: Joi.string().allow(""),
    OrderDate: Joi.any(),
    PaymentStatus: Joi.number().allow(""),
    EmailAddress: Joi.any(),
    OrderStatus: Joi.number().allow(""),
    TotalDue: Joi.number().allow(""),
    TaxAmount: Joi.string().allow(""),
    OrderTotalPrice: Joi.any(),
    OrderName: Joi.string().allow(""),
    DeliveryAddressLine1: Joi.string().allow(""),
    DeliveryAddressLine2: Joi.string().allow(""),
    DeliveryAddressLine3: Joi.string().allow(""),
    Country: Joi.string().allow(""),
    DeliveryInstructions: Joi.string().allow(""),
    Postcode: Joi.string().allow(""),
    // DeliveryAddresss: Joi.string().allow("")
  };

  async componentDidMount() {
    if (this.props.Id === null) return;
    const Imported = YesNoWordList();
    // const result = await getOrderes();
    console.log("MealBoxForm -> componentDidMount -> this.props.Id", this.props.Id);
    const list = await await getOrderes();
    // if (list === null) {
    // } else {
    console.log("MealBoxForm -> componentDidMount -> list", list.data.Result);
    // const { id: itemOrderId } = this.props.match.params;
    this.setState({
      Imported,
      data: this.mapToViewModel(list.data.Result),
      MealBoxData: list.data.Result,
    });
    // }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  mapToViewModel = (x) => {
    return {
      UserIdFK: x.UserIdFK,
      OrderName: x.OrderName,
      TaxAmount: x.TaxAmount,
      TotalDue: x.TotalDue,
      PaymentType: x.PaymentType,
      ContactNumber: x.ContactNumber,
      Comment: x.Comment,
      OrderDate: x.OrderDate || new Date(),
      PaymentStatus: x.PaymentStatus,
      OrderStatus: x.OrderStatus,
      EmailAddress: x.EmailAddress,
      OrderTotalPrice: x.OrderTotalPrice,
      DeliveryAddressLine1: x.DeliveryAddressLine3,
      DeliveryAddressLine2: x.DeliveryAddressLine3,
      DeliveryAddressLine3: x.DeliveryAddressLine3,
      Country: x.Country,
      Postcode: x.Postcode,
      DeliveryInstructions: x.DeliveryInstructions,
      DeliveryAddress: x.DeliveryAddress,
    };
  };

  doSubmit = async () => {
    const { data } = this.state;
    const itemOrder = { ...data };
    try {
      await saveOrder(itemOrder);
      this.props.toggleAll();
      alert("Order placed successfully");
    } catch (err) {
      toast.error(err.message || err.response.message);
    }
  };

  render() {
    const { User, data } = this.state;
    const { Price } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              {/* {this.renderSelect("UserIdFK", "User", User)} */}
              {this.renderInput("OrderName", "Order Name")}
              {this.renderInput("OrderTotalPrice", "Order Total Price")}
              {this.renderInput("TaxAmount", "Tax Amount")}
              {this.renderInput("TotalDue", "Total Due")}
              {this.renderSelect("OrderStatus", "Order Status", this.state.OrderStatus)}
              {this.renderSelect("PaymentStatus", "Payment Status", this.state.PaymentStatus)}
            </Col>
            <Col>
              {this.renderInput("EmailAddress", "Email Address")}
              {this.renderDatePicker("OrderDate", "Order Date", data.OrderDate)}
              {this.renderInput("Comment", "Comment")}
              {this.renderInput("ContactNumber", "Contact Number")}
              {this.renderSelect("PaymentType", "Payment Type", this.state.PaymentType)}
              {this.renderInput("DeliveryInstructions", "Delivery Instructions")}
            </Col>
            <Col>
              {this.renderInput("DeliveryAddressLine1", "Adress Line 1")}
              {this.renderInput("DeliveryAddressLine2", "Adress Line 2")}
              {this.renderInput("DeliveryAddressLine3", "Adress Line 2")}
              {this.renderInput("Country", "Country")}
              {this.renderInput("Postcode", "Postcode")}
              {this.renderInput("DeliveryAddress", "Delivery Address")}
              {/* {// !isView && */}
              {this.renderSubmiteButton("Submite")}
              {/* <Button onClick={this.props.toggleAll}>Submite</Button> */}
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default MealBoxForm;
