import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  // eslint-disable-next-line class-methods-use-this
  saveToLocalStorage = (value) => {
    const existingValue = localStorage.getItem('newTask');
    let newValue = value;
    if (existingValue) {
      newValue = `${existingValue}, ${value}`;
    }
    localStorage.setItem('newTask', newValue);
  };

  onLableChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.saveToLocalStorage(this.state.label);
    setTimeout(() => {
      this.setState({
        label: '',
      });
    }, 10);
  };

  render() {
    return (
    <form className="new-todo" onSubmit={ this.onSubmit}>
    <input autoFocus
    className="new-todo"
    type="text"
    placeholder="What needs to be done?"
    value = { this.state.label }
    onChange={ this.onLableChange }/>
    </form>
    );
  }
}
