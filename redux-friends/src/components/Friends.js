import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";

export class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return <div>FRIEND LIST</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
