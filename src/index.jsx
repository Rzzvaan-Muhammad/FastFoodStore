import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AccessContextProvider from "./contexts/accessContext";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/index.css";
import "./css/lightTheme.scss";
import CartContextProvider from "./components/CartContext";

ReactDOM.render(
  <Router basename="/fastfoodstoreui">
    <AccessContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AccessContextProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     const NextApp = import("./App").default;
//     ReactDOM.render(NextApp);
//   });
// }
