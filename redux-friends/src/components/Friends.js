import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import Friend from "./Friend";

export class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(this.props);
    return (
      <div className="friends-list">
        FRIENDS LIST
        {this.props.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    );
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
