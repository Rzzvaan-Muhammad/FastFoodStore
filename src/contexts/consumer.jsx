import { withRouter } from "react-router-dom";
import React, { useContext } from "react";
import { LocaleContext } from "./localeContext";
import { AccessContext } from "./accessContext";
import Settings from "../components/settings";

const ContextConsumer = props => {
  const locale = useContext(LocaleContext);
  const access = useContext(AccessContext);
  return (
    <div>
      {JSON.stringify(locale, null, "\t")}
      <br />
      {JSON.stringify(access, null, "\t")}
      <br />
      {JSON.stringify(props, null, "\t")}
      <br />
      <button type="button" onClick={() => locale.setLocale("aaaaa")}>
        locale
      </button>
      <Settings />
    </div>
  );
};

export default withRouter(ContextConsumer);
