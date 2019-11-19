import React, { Component } from "react";
import { connect } from "react-redux";

import Login from "./Login";
import Profile from "./Profile";

import { getMe } from "../redux/actions/me";

const mapStateToProps = state => ({
  me: state.me,
  accessToken: localStorage.getItem("accessToken")
});

const mapDispatchToProps = { getMe };

export class index extends Component {
  state = {
    loading: this.props.accessToken && !this.props.me.fetched
  };
  componentDidMount() {
    if (this.state.loading) {
      this.props.getMe().then(() => this.setState({ loading: false }));
    }
  }
  render() {
    if (this.state.loading) return null;
    return !this.props.me.loggedIn ? <Login /> : <Profile me={this.props.me} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);
