import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import Loader from "react-loader-spinner";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export class Friends extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <AddFriend />
        {this.props.fetchingFriends && (
          <div className="key spinner">
            <Loader type="Bars" color="#204963" height="60" width="60" />
            <p>Getting Friends...</p>
          </div>
        )}
        <div className="friends-list">
          {this.props.friends.map(friend => {
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
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
