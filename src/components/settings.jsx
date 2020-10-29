import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import Languages from "../common/languages";
import TranslateText from "../common/translateText";

const Settings = () => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        <TranslateText defaultText="Settings" resourceId="lbl_Settings" />
      </DropdownToggle>
      <DropdownMenu>
        {/* <Languages /> */}
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
    </UncontrolledDropdown>
  );
};

export default Settings;
