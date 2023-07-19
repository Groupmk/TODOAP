import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    setTimeout(() => {
      this.setState({
        label: '',
      });
    }, 10);
  };

  render() {
    return (
      <form className="new-todo" onSubmit={this.onSubmit}>
        <input
          autoFocus
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          value={this.state.label}
          onChange={this.onLableChange}
        />
      </form>
    );
  }
}
