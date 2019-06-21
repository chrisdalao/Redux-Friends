import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login } from "../actions";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials) //this.props.login is calling .post - .then is handling the data - .catch handles the error
      //.then is called here when .then is called in loginReducer whic is successful and returns true
      .then(res => {
        if (res) {
          this.props.history.push("./friends");
        }
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.loginReducer.error,
    loggingIn: state.loginReducer.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
