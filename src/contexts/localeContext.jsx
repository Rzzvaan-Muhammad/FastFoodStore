import React from "react";

export const LocaleContext = React.createContext();

const LocaleContextProvider = props => {
  const [localeId, setLocale] = React.useState("en-uk");

  return <LocaleContext.Provider value={{ localeId, setLocale }}>{props.children}</LocaleContext.Provider>;
};

export default LocaleContextProvider;
