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
import { loadBugs } from "../store/bug";

const CaratModel = props => {
  const { buttonLabel, className } = props;
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.entites.bugs.List);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(loadBugs());
    console.log("bugs", bugs);
  }, [bugs, dispatch]);
  const addBox = async () => {
    // const objList = await getMealBox(props.Id);
  };
  const addToCart = () => {
    // add item to the reduxcart
    toggle();
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
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
