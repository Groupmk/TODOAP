import React, { Component } from 'react';

export default class TaskFilter extends Component {
  clearCompleted = () => {
    this.props.clearCompleted();
  };

  render() {
    const { filter, setFilter } = this.props;
    return (
      <div className="footer">
        <ul className="filters">
          <li>
            <button className="selected" filter={filter} onClick={() => setFilter('all')}>
              All
            </button>
          </li>
          <li>
            <button filter={filter} onClick={() => setFilter('active')}>
              Active
            </button>
          </li>
          <li>
            <button filter={filter} onClick={() => setFilter('completed')}>
              Completed
            </button>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.clearCompleted}>
          Clear completed
        </button>
      </div>
    );
  }
}
