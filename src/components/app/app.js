import React, { Component } from 'react';

import AppHeader from '../header';
import TaskList from '../tasklist/tasklist';
import Footer from '../footer/footer';

export default class App extends Component {
  maxId = 100;
  state = {
    taskData: [],
    filter: 'all',
  };

  deletItem = (id) => {
    this.setState(({ taskData }) => {
      const newArray = taskData.filter((item) => item.id !== id);
      return {
        taskData: newArray,
      };
    });
  };

  onItemAdded = (text) => {
    if (text.trim() === '') return;
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
      condition: '',
      done: false,
      createdDate: new Date(),
    };
    this.setState(({ taskData }) => {
      const newArray = [newItem, ...taskData];
      return {
        taskData: newArray,
      };
    });
  };

  toggleProperty = (id, propName) => {
    this.setState(({ taskData }) => {
      const newArray = taskData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [propName]: !item[propName],
          };
        }
        return item;
      });
      return {
        taskData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.toggleProperty(id, 'done');
  };

  setFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  filterTasks = () => {
    const { taskData, filter } = this.state;
    switch (filter) {
      case 'all':
        return taskData;
      case 'active':
        return taskData.filter((item) => !item.done);
      case 'completed':
        return taskData.filter((item) => item.done);
      default:
        return taskData;
    }
  };

  clearCompleted = () => {
    this.setState(({ taskData }) => {
      const newArray = taskData.filter((item) => !item.done);
      return {
        taskData: newArray,
      };
    });
  };

  onItemEdit = (id, text) => {
    this.setState(({ taskData }) => {
      const newArray = taskData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            label: text,
          };
        }
        return item;
      });
      return {
        taskData: newArray,
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredTasks = this.filterTasks();
    const totalCount = filteredTasks.length;
    const doneCount = filteredTasks.filter((item) => item.done).length;

    return (
      <section className="todoapp">
        <AppHeader onItemAdded={this.onItemAdded} />
        <section className="main">
          <TaskList
            todos={filteredTasks}
            onDeleted={this.deletItem}
            onToggleDone={this.onToggleDone}
            onItemEdit={this.onItemEdit}
          />
          <Footer
            totalCount={totalCount}
            doneCount={doneCount}
            filter={filter}
            setFilter={this.setFilter}
            clearCompleted={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
