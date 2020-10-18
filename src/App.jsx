import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Loading from "./common/loading";
import ErrorBoundary from "./common/errorBoundary";

const NotFound = lazy(() => import("./common/notFound"));
const LoginForm = lazy(() => import("./components/loginForm"));

const AppRoutes = lazy(() => import("./appRoutes"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localeId: "en-uk"
    };
  }

  render() {
    return (
      <Container fluid>
        <ErrorBoundary>
          <ToastContainer autoClose={2000} />
          <Suspense fallback={<Loading />}>
            <Switch>
              {/* <Route path="/" exact component={LoginForm} /> */}
              <AppRoutes />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default App;
