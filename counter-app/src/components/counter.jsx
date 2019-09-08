import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10
  };

  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    //console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btm-sm m-1"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btm-sm m-1"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let countBadgeClasses = "badge m-2 badge-";
    countBadgeClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return countBadgeClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
