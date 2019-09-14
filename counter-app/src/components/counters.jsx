import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
              Reset
            </button>
          </div>
          {counters.map(counter => (
            <div className="row" key={counter.id}>
              <Counter
                onDelete={onDelete}
                counter={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
