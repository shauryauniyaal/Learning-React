import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>count = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: Delhi</h3>
        <h3>Contact: @shauryauniyaal</h3>
      </div>
    );
  }
}

export default UserClass;
