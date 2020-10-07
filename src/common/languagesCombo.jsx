// Please add this file to portal an copy as it is to new applictation
import React, { Component } from "react";
import _ from "lodash";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import tService from "../services/translationServices";
import TranslateText from "./translateText";

class translationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      locales: [],
    };
  }

  // TOPFB
  async componentDidMount() {
    const locales = await tService.getLocales();
    this.setState({ locales });
    this.handleSelect(this.props.localeId);
  }

  // TOPFB;

  handleSelect = (id) => {
    tService.setCurrentLocale(id);
    this.props.onLocaleChange(id);
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  renderLocaleName = () => {
    const { locales } = this.state;
    const { localeId } = this.props;
    if (localeId === "en-uk") return "English";
    return _.find(locales, { LocaleId: localeId }).LocalizedName;
  };

  render() {
    const { locales, dropdownOpen } = this.state;
    if (!locales) return null;
    return (
      <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret>
          <TranslateText defaultText="Language" resourceId="lbl_Language" />:{this.renderLocaleName()}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.handleSelect("en-uk")}>English</DropdownItem>
          {locales &&
            locales.map((x) => (
              <DropdownItem key={x.Id} onClick={() => this.handleSelect(x.LocaleId)}>
                {x.LocalizedName}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default translationButton;
