import React from "react";
import { connect } from "react-redux";
import { createFriend } from "../actions";

class AddFriend extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  changeHandler = e => {
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div>
        <form className="add-friend-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.changeHandler}
            value={this.state.friend.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.changeHandler}
            value={this.state.friend.age}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.changeHandler}
            value={this.state.friend.email}
          />
          <button className="add-friend-btn">Add A Friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.friendsReducer.creatingFriend);
  return {
    error: state.friendsReducer.error,
    creatingFriend: state.friendsReducer.creatingFriend
  };
};

export default connect(
  mapStateToProps,
  { createFriend }
)(AddFriend);
