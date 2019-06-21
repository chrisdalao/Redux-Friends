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
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
