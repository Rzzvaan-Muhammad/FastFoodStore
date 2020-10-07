import React, { useReducer, createContext } from "react";
// createContext, useContext
import { AccessLevelCheck } from "../services/dummyLogin";

// const noAccess = {
//   Read: false,
//   Delete: false,
//   Edit: false,
//   Create: false,
//   Audit: false,
//   Perf: false,
//   Trans: false
// };
const readOnly = {
  Read: true
};
// const crudOnly = {
//   Read: true,
//   Delete: true,
//   Edit: true,
//   Create: true
// };
// const readWrite = {
//   Read: true,
//   Edit: true,
//   Create: true
// };
// const clientAdmin = {
//   Read: true,
//   Delete: true,
//   Edit: true,
//   Create: true,
//   Audit: true
// };

const superAdmin = {
  Read: true,
  Delete: true,
  Edit: true,
  Create: true,
  Audit: true,
  Perf: true,
  Trans: true
};

const accessReducer = (state, action) => {
  const level = AccessLevelCheck(action.type);
  switch (level) {
    case 1:
      return { ...state, ...superAdmin };
    // case 2:
    //   return { ...state, ...clientAdmin };
    // case 3:
    //   return { ...state, ...crudOnly };
    // case 4:
    //   return { ...state, ...readWrite };
    case 5:
      return { ...state, ...readOnly };
    default:
      return state;
  }
};
// const contxt = React.createContext();
export const AccessContext = createContext();
const AccessContextProvider = props => {
  const [access, dispatch] = useReducer(accessReducer);

  return <AccessContext.Provider value={{ access, dispatch }}>{props.children}</AccessContext.Provider>;
};
export default AccessContextProvider;
