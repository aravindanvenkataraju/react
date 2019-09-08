import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <div style={{ margin: "5px" }} key={counter.id}>
            <Counter
              onDelete={this.props.onDelete}
              counter={counter}
              onIncrement={this.props.onIncrement}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
