import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUser } from "../../redux/actions/me";
import Login from "./Login";

const mapStateToProps = state => ({
  me: state.me
});

const mapDispatchToProps = { loginUser };

class index extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser(email, password);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Login
        handleLogin={this.handleLogin}
        handleChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
