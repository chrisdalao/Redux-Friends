import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <button className="md-button">Update</button>
      <button className="md-button-danger">Delete</button>
    </div>
  );
};

export default Friend;
