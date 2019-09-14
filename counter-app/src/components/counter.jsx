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
    const { onIncrement, onDelete, onDecrement, counter } = this.props;
    return (
      <React.Fragment>
        <div className="align-self-center col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btm-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btm-sm m-2"
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btm-sm"
          >
            X
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let countBadgeClasses = "badge badge-";
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
