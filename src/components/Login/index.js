import React, { Component } from "react";
import { connect } from "react-redux";

import { LoginUser } from "../../redux/actions/me";
import Login from "./Login";

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

class index extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = () => {
    const { email, password } = this.state;
    console.log(email, password);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReset = () => this.setState({ email: "", password: "" });

  render() {
    return (
      <Login handleLogin={this.handleLogin} handleChange={this.handleChange} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
