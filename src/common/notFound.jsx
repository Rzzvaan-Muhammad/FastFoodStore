import React from "react";
import { Container, Row } from "reactstrap";

const NotFound = props => {
  return (
    <Container fluid>
      <Row>
        <h3>Not Found {props.location.pathname}</h3>
      </Row>
      <Row>
        <p>
          <button type="submit" onClick={() => props.history.goBack()}>
            Go Back
          </button>
        </p>
      </Row>
    </Container>
  );
};

export default NotFound;
