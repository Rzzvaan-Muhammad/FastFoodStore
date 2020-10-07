import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBabyCarriage, faBars } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

class ExampleBar extends Component {
  state = {
    Modules: [],
    Menu: [],
    isCollapsed: false
  };

  toggleCollapse = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { Modules, isCollapsed, Menu } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand sidebar-float-right navbar-dark bg-light">
          <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
            {/* <span className="navbar-toggler-icon" /> */}
            <NavLink className="nav-close float-right" to="#" onClick={() => this.toggleCollapse()}>
              <FontAwesomeIcon className="mr-2 fa-fw" size="2x" icon={faBars} />
            </NavLink>
          </a>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                Manage <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item"> Cart</li>
            </ul>
            <form className="form-inline my-2 my-md-0"> </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default ExampleBar;
