import React from "react";

const footer = () => {
  return (
    <>
      <footer className="page-footer" style={{ backgroundColor: "#263238" }}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Address</h5>
              <p className="grey-text text-lighten-4">
                FFC is an Pakistan fast food restaurant chain headquartered in
                Islamabad, that specializes in fried chicken. It is the
                Pakistan's Third restaurant chain after McDonald's and KFC, with
                many locations in several cities as of December 2019.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">About US</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Mitao Bhook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/privacyPolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="/CarrersForm">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Fast Food Store Pakistan. All rights reserved.
            <a className="grey-text text-lighten-4 right" href="/Contects">
              Contacts
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
