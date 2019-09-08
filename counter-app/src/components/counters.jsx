import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <div style={{ margin: "5px" }} key={counter.id}>
            <Counter onDelete={this.handleDelete} counter={counter} />
          </div>
        ))}
      </React.Fragment>
    );
  }

  handleDelete = counterId => {
    //console.log("Event handler called ", counterId);
    const counters = this.state.counters.filter(
      counter => counter.id != counterId
    );
    this.setState({ counters });
  };
}

export default Counters;
