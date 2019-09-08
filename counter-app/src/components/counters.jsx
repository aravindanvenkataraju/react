import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <div style={{ margin: "5px" }} key={counter.id}>
            <Counter
              onDelete={onDelete}
              counter={counter}
              onIncrement={onIncrement}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
