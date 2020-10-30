import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getMealBox } from "../services/mealBoxServices";
import { loadBugs, addBug } from "../store/Cart";

const CaratModel = props => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.entites.bugs.List);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(loadBugs());
  }, [bugs, dispatch, props.Id]);
  const addBox = async () => {
    const objList = await getMealBox(props.Id);
    console.log("addBox -> objList", objList.data.Result);
    const obj = { ...objList.data.Result };
    obj.Id = null;
    console.log("addBox -> obj", obj);
    dispatch(addBug(obj));
  };
  const addToCart = () => {
    // add item to the reduxcart
    toggle();
    addBox();
  };
  return (
    <div>
      <a className="btn-floating red" color="danger" onClick={toggle}>
        {/* {buttonLabel} */}
        <i className="large material-icons">add_shopping_cart</i>
      </a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {/* <ModalHeader toggle={toggle}>{props.Title}</ModalHeader> */}
        <ModalBody>
          <Card>
            <CardHeader>
              {/* <CardImg top src={props.src} alt="Card image cap" /> */}
            </CardHeader>
            <CardBody>{/* <b>PKR {props.Price}</b> */}</CardBody>
          </Card>
        </ModalBody>
        <ModalFooter>
          <div>
            <Col>{/* <b>PKR {count * props.Price}</b> */}</Col>
          </div>
          <ButtonToolbar>
            {/* <ButtonGroup className="btn btn-white">
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
            </ButtonGroup> */}
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
