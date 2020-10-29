import React from "react";
import Sidebar from "react-sidebar";
import { Button, Row, Col } from "reactstrap";
import { faBabyCarriage, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./cart";

class NewSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <div>
        <Sidebar
          className="sidenav"
          sidebar={
            <div>
              <b>
                <h5>Manage Cart</h5>
              </b>
              <Row>
                <Col>
                  <Cart />
                </Col>
              </Row>
            </div>
          }
          //   <textarea name="" id="" cols="30" rows="10"></textarea>
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            root: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden"
            },
            content: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              transition: "right .3s ease-out, left .3s ease-out"
            },
            sidebar: {
              zIndex: 2,
              background: "white",
              position: "absolute",
              top: 10,
              bottom: 0,
              transition: "transform .3s ease-out",
              WebkitTransition: "-webkit-transform .3s ease-out",
              willChange: "transform",
              overflowY: "auto"
            },
            overlay: {
              zIndex: 1,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              visibility: "hidden",
              transition: "opacity .3s ease-out, visibility .3s ease-out",
              backgroundColor: "rgba(0,0,0,.3)"
            }
          }}
        >
          <Button onClick={() => this.onSetSidebarOpen(true)} color="link">
            <FontAwesomeIcon className="mr-2 fa-fw" size="2x" icon={faBars} />
          </Button>
        </Sidebar>
      </div>
    );
  }
}

export default NewSideBar;
