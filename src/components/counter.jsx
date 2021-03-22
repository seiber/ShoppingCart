import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="">{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Add item
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete item
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
