import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
    //tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 10
  };

  // constructor() {
  //   super();
  //   this.handleClick = this.handleClick.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  render() {
    //console.log("props", this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleClick({ id: 1 })}
          className="btn btn-secondary btm-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let countBadgeClasses = "badge m-2 badge-";
    countBadgeClasses += this.state.value === 0 ? "warning" : "primary";
    return countBadgeClasses;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleClick = product => {
    console.log("Increment clicked!", product);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
