import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    //tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: 10
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

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
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btm-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let countBadgeClasses = "badge m-2 badge-";
    countBadgeClasses += this.state.count === 0 ? "warning" : "primary";
    return countBadgeClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleClick() {
    console.log("Increment clicked!", this);
  }
}

export default Counter;
