import React, { useContext, useState, useReducer } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  ButtonToolbar,
  ButtonGroup,
  Col
} from "reactstrap";
import { CartContext } from "./CartContext";
import { getMealBox } from "../services/mealBoxServices";

const CaratModel = props => {
  const { buttonLabel, className } = props;
  let ArrayLength;
  const [modal, setModal] = useState(false);
  const [count, setcount] = useState(1);

  const toggle = () => setModal(!modal);

  const [cart, setCart] = useContext(CartContext);
  const increaseCount = () => {
    setcount(count + 1);
  };

  const decrementCount = () => {
    setcount(count - 1);
  };
  const handlePrice = obj => {
    // let result;
    obj.MealBoxPrice = count * obj.MealBoxPrice;
    console.log("result", obj);
    return obj;
  };
  const addBox = async () => {
    const objList = await getMealBox(props.Id);
    setIntoCache("__Obj__", objList.data.Result);
    const cacheObj = getFromCache("__Obj__");
    const updatedObj = handlePrice(cacheObj);
    const cacheArray = getFromCache("__cartdata__");
    if (cacheArray) {
      const fullArray = cacheArray.concat([updatedObj]);
      ArrayLength = fullArray.length;
      setIntoCache("__cartdata__", fullArray);
      localStorage.removeItem("__Obj__");
    } else if (!cacheArray) {
      const fullArray = getFromCache("__Obj__");
      setIntoCache("__cartdata__", [fullArray]);
    }
  };
  function setIntoCache(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  }
  function getFromCache(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
    // return item;
  }
  const addToCart = () => {
    const Items = {
      Id: props.Id,
      name: props.Title,
      price: props.Price,
      Count: count,
      Length: ArrayLength
    };

    setCart(currentState => [...currentState, Items]);
    toggle();
    addBox();
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.Title}</ModalHeader>
        <ModalBody>
          <Card>
            <CardHeader>
              <CardImg top src={props.src} alt="Card image cap" />
            </CardHeader>
            <CardBody>
              <b>PKR {props.Price}</b>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <div>
            <Col>
              <b>PKR {count * props.Price}</b>
            </Col>
          </div>
          <ButtonToolbar>
            <ButtonGroup className="btn btn-white">
              <Button
                className="btn btn-danger btn-outline-danger"
                onClick={() => decrementCount()}
              >
                <b>-</b>
              </Button>
              <div className="btn btn-outline-black disabled">{count}</div>
              <Button
                className="btn btn-danger btn-outline-danger"
                onClick={() => increaseCount()}
              >
                <b>+</b>
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <Button color="primary" onClick={() => addToCart()}>
            Add to cart
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CaratModel;
