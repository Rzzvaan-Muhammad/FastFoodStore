import React, { Component } from "react";
import tService from "../services/translationServices";
import TranslateText from "./translateText";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TOPFB
      defaultTexts: {
        txt_Email: "Email Address",
        txt_Password: "Password"
      },
      translatedTexts: {}
    };
  }

  // TOPFB
  componentDidMount() {
    this.setTranslation();
  }

  // TOPFB
  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setTranslation();
    }
  }

  async setTranslation() {
    const { defaultTexts } = this.state;
    const translatedTexts = { ...defaultTexts };
    if (tService.getCurrentLocale() !== "en-uk") {
      Object.entries(defaultTexts).forEach(async ([key, value]) => {
        const text = await tService.getTranslationForResource(key, value);
        translatedTexts[key] = text;
        this.setState({ translatedTexts });
      });
    } else this.setState({ translatedTexts });
  }

  render() {
    // TOPFB
    const { translatedTexts } = this.state;
    return (
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>
                <TranslateText defaultText="Sign in" resourceId="lbl_Signin" />
              </h3>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="Email1">
                  <TranslateText defaultText="Email" resourceId="lbl_Email" />
                  <input
                    type="email"
                    className="form-control"
                    id="Email1"
                    aria-describedby="emailHelp"
                    placeholder={translatedTexts.txt_Email}
                  />
                </label>
                <small id="emailHelp" className="form-text text-muted">
                  <TranslateText
                    defaultText="We'll never share your email with anyone else"
                    resourceId="message_Email"
                  />
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="Password1">
                  <TranslateText
                    defaultText="Password"
                    resourceId="lbl_Password"
                  />
                  <input
                    type="password"
                    className="form-control"
                    id="Password1"
                    placeholder={translatedTexts.txt_Password}
                  />
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="Check1" className="form-check-label">
                  <input
                    id="Check1"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <TranslateText
                    defaultText="Check Me Out"
                    resourceId="lbl_CheckMeOut"
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                <TranslateText defaultText="Submit" resourceId="btn_Submit" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
