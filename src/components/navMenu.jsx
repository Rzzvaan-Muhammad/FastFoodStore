// code generated @DevUp using PlatformBuilder, 04/01/2020 14:16:21
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
// import LanguageCombo from "../common/languagesCombo";
import TranslateText from "../common/translateText";
import { SignOut } from "../services/authService";

const NavMenu = ({ localeId, onLocaleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="text-center font-weight-bold">
      <Navbar color="light" light expand="md">
        <NavLink className="navbar-brand nav-item nav-link" to="/">
          <TranslateText defaultText="Fast Food " resourceId="lbl_Fast_Food" />
          <TranslateText defaultText="Store" resourceId="lbl_Store" />
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto justify-content-center" navbar>
            <NavLink className="nav-item nav-link" to="/periPeriBox_List">
              <TranslateText
                defaultText="Meal Boxs"
                resourceId="lbl_Meal_Boxs"
              />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/ItemCategory_list">
              <TranslateText
                defaultText="Item Category"
                resourceId="lbl_Item_Category"
              />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/mealBox_list">
              <TranslateText defaultText="Meal Box" resourceId="lbl_Meal_Box" />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/mealBoxItem_list">
              <TranslateText
                defaultText="Meal Box Item"
                resourceId="lbl_meal_Box_Item"
              />
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/mealItemSensitivity_list"
            >
              <TranslateText
                defaultText="Meal Item Sensitivity"
                resourceId="lbl_MealItemSensitivity"
              />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/sensitiveContent_list">
              <TranslateText
                defaultText="Sensitive Content"
                resourceId="lbl_SensitiveContent"
              />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/mealItem_list">
              <TranslateText
                defaultText="Meal Item"
                resourceId="lbl_MealItems"
              />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/spiceLevel_list">
              <TranslateText
                defaultText="spice Level"
                resourceId="lbl_spiceLevel"
              />
            </NavLink>

            {/* <LanguageCombo localeId={localeId} onLocaleChange={onLocaleChange} /> */}

            <NavLink
              className="nav-item nav-link"
              onClick={() => SignOut()}
              to="/"
            >
              <TranslateText
                defaultText="Log Out"
                resourceId="lbl_spiceLevel"
              />
            </NavLink>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <TranslateText defaultText="Settings" resourceId="lbl_Settings" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <TranslateText defaultText="Profile" resourceId="lbl_Profile" />
                </DropdownItem>
                <DropdownItem>
                  <TranslateText defaultText="Privacy" resourceId="lbl_Privacy" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <TranslateText defaultText="Log Out" resourceId="lbl_Log_Out" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;
