import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteMealBox, getMealBox } from "../services/mealBoxServices";

class CartBoxList extends Component {
  constructor(props) {
    super();
    this.state = {
      Data: [],
      count: 1
    };
  }

  async componentDidMount() {
    const cacheArray = this.getFromCache("__cartdata__");
    this.setState({ Data: cacheArray });
  }

  setIntoCache = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  };

  getFromCache = key => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
    // return item;
  };
  // const [count, setcount] = useState(1);

  // const [cart, setCart] = useContext(CartContext);
  increaseCount = () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  };

  decrementCount = () => {
    let { count } = this.state;
    count -= 1;
    this.setState({ count });
  };

  setIntoCache = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  };

  getFromCache = key => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
    // return item;
  };

  handlePrice = id => {
    // const count = this.state.count;
    const cacheArray = this.getFromCache("__cartdata__");
    const arrayIndex = cacheArray.findindex(x => (x.Id = id));
    cacheArray[arrayIndex].MealBoxPrice =
      this.state.count * cacheArray[arrayIndex].MealBoxPrice;
    this.setIntoCache("__cartdata__", [cacheArray]);
    this.setState({ Data: cacheArray });

    // obj.MealBoxPrice = count * obj.MealBoxPrice;
    // console.log("result", obj);
    // return obj;
  };

  deleteBox = id => {
    console.log("CartBoxList -> id", id);
    const Data = [...this.state.Data];
    const updateData = Data.filter(x => x.Id !== id);
    this.setState({ Data: updateData });
    this.setIntoCache("__cartdata__", updateData);

    console.log("CartBoxList -> updateData", updateData);
  };

  render() {
    return (
      <>
        {this.state.Data.map(item => (
          <Row>
            <Col key={item.Id}>
              <CardColumns>
                <Card body size="md" className="border border-0">
                  <Row>
                    <Col md="6">
                      <small>
                        <b>
                          <CardTitle>{item.MealBoxTitle}</CardTitle>
                        </b>
                      </small>
                      <small>
                        <b>
                          <CardText>{item.Description}</CardText>
                        </b>
                      </small>
                      <small>
                        <b>
                          <CardText>£ {item.MealBoxPrice}</CardText>
                        </b>
                      </small>
                    </Col>
                    <Col md="2">
                      <small>
                        <ButtonToolbar>
                          <ButtonGroup className="btn btn-white">
                            <Button
                              className="btn btn-success btn-outline-danger"
                              onClick={() => this.decrementCount()}
                            >
                              <b>-</b>
                            </Button>
                            <div className="btn btn-outline-black disabled">
                              {this.state.count}
                            </div>
                            <Button
                              className="btn btn-success btn-outline-danger"
                              onClick={() => this.increaseCount()}
                            >
                              <b>+</b>
                            </Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </small>
                    </Col>
                  </Row>
                </Card>
              </CardColumns>
            </Col>
            <Col md="2">
              <Button
                className="btn btn-success"
                onClick={() => this.deleteBox(item.Id)}
              >
                {/* Delete */}
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Col>
          </Row>
        ))}
      </>
    );
  }
}

export default CartBoxList;
