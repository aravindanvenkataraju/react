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
    const { onIncrement, onDelete } = this.props;
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-secondary btm-sm m-1"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btm-sm m-1"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let countBadgeClasses = "badge m-2 badge-";
    countBadgeClasses += counter.value === 0 ? "warning" : "primary";
    return countBadgeClasses;
  }

  formatCount() {
    const { counter } = this.props;
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
