import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <div>Name: {props.friend.name}</div>
      <div>Age: {props.friend.age}</div>
      <div>Email: {props.friend.email}</div>
      <button className="md-button">Update</button>
      <button className="md-button-danger">Delete</button>
    </div>
  );
};

export default Friend;
