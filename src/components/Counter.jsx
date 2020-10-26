import React, { Component } from "react";

import { Button, ButtonToolbar, ButtonGroup, Col } from "reactstrap";
import { CartContext } from "./CartContext";

class Counter extends Component {
  state = { count: 0 };

  componentDidUpdate(prevProps, prevState) {}

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    const { count } = this.state;
    if (count) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   this.props.itemCount(this.state.count);
  // }

  render() {
    return (
      <>
        <div>
          <Col>
            <b>PKR {this.state.count * this.props.Price}</b>
          </Col>
        </div>
        <ButtonToolbar>
          <ButtonGroup className="btn btn-white">
            <Button
              className="btn btn-danger btn-outline-danger"
              onClick={this.decrementCount}
            >
              <b>-</b>
            </Button>
            <div className="btn btn-outline-black disabled">
              {this.state.count}
            </div>
            <Button
              className="btn btn-danger btn-outline-danger"
              onClick={this.increaseCount}
            >
              <b>+</b>
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </>
    );
  }
}
export default Counter;
