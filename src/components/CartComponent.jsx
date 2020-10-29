import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faRetweet, faShoppingBag, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import OrderForm from "../forms/OrderForm";
import Cart from "./cart";

const CartComponent = (props) => {
  const { buttonLabel, className, cartItems } = props;
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const setIntoCache = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
    return obj;
  };
  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  const reset = () => {
    setIntoCache("__cartdata__", []);
    localStorage.removeItem("__Obj__");
    toggle();
  };

  return (
    <div>
      <button onClick={toggle} className="btn btn-light ">
        {/* {buttonLabel} */}
        {/* <b>{cartItems}</b> */}
        <FontAwesomeIcon icon={faCartPlus} color="success" />
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>
          <FontAwesomeIcon icon={faCartPlus} />
        </ModalHeader>
        <ModalHeader>
          <Button color="danger" onClick={reset}>
            <FontAwesomeIcon icon={faRetweet} />
          </Button>
        </ModalHeader>
        <ModalBody>
          <Cart />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleNested}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </Button>

          <Modal size="lg" isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>
              <FontAwesomeIcon icon={faShoppingBag} />
            </ModalHeader>
            <ModalBody>
              <OrderForm toggleAll={toggleAll} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                Back
              </Button>
              {/* <Button color="success" onClick={toggleAll}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </Button> */}
            </ModalFooter>
          </Modal>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartComponent;
