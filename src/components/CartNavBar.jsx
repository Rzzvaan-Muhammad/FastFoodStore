import React from "react";
import { Link } from "react-router-dom";
import CartComponent from "./CartComponent";

const Navbar = () => {
  return (
    <nav className="nav-wrapper"  style={{ backgroundColor: "#263238" }}>
      <div className="container">
        <Link to="/periPeriBox_List" className="brand-logo">
          Shopping
        </Link>

        <ul className="right">
          <li>
            <Link to="#">
              {/* <i className="material-icons">shopping_cart</i> */}
              <CartComponent buttonLabel="Cart" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
