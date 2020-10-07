import React from "react";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import Form from "../common/form";
// import AppRouter from "../appRoutes";
import { SignIn } from "../services/authService";
import { getCurrentUser } from "../utils/jwtUtils";
import "../styles/signin.css";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: []
  };

  schema = {
    username: Joi.string()
      .alphanum()
      .required()
      .label("User Name"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await SignIn(data);
      // this.props.history.replace("./appRoutes");
      // alert("signin successfully");
      this.props.history.push("/notfound");
      // this.props.history.push("/expenseItem_list");
    } catch (e) {
      if (e.response && e.response.status === 401) toast.error(e.response.data);
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/" />;
    return (
      <div className=".body text-center flex-centered">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <FontAwesomeIcon className="m-2" size="5x" icon={faUser} alt="User Check" />
          <p className="h3 m-2 font-weight-normal">Please sign in</p>
          {this.renderInput("username", "username")}
          {this.renderInput("password", "password", "password", {
            required: true
          })}
          <button disabled={this.validate()} className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default LoginForm;
