import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import { CartContext } from "./CartContext";
import OrderForm from "../forms/OrderForm";
import { deleteMealBox, getMealBox } from "../services/mealBoxServices";
import CartBoxList from "./CartListComponent";

const Cart = () => {
  // const [list, setlist] = useState([]);

  const [cart, setCart] = useContext(CartContext);
  const title = cart.reduce((acc, curr) => curr.name, "");
  const Id = cart.reduce((acc, curr) => curr.Id, 0);
  const Count = cart.reduce((acc, curr) => curr.Count, 0);
  const Price = cart.reduce((acc, curr) => curr.price, 0);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div>
        <Row style={{ marginBottom: 15 }}>
          <Col className="img-fluid">
            <b>{/* <span className="chead-icon-length">Items : {cart.length + Count === 1 ? 0 : Count}</span> */}</b>
          </Col>

          <Col>
            <b>{/* <span>Total £ {Price * Count}</span> */}</b>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
            <CartBoxList Id={Id} />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Cart;
