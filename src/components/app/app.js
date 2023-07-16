import React, { Component } from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";

export default class App extends Component {
  maxId = Math.random()
    state = {
      originalTaskData: [],
      taskData: [],
      filter: "all"
    }
    deletItem = (id) => {
      this.setState(({ taskData }) => {
        const idx = taskData.findIndex((item) => item.id === id);
        const newArray = [
          ...taskData.slice(0, idx),
          ...taskData.slice(idx + 1),
        ]
        localStorage.removeItem(id)
        return {
          taskData: newArray
        }
      })
    }
    onItemAdded = (text) => {
      const newItem = {
        label: text,
        important: false,
        id: this.maxId++,
        condition: "",
        done: false
      }
      this.setState(({ taskData }) => {
        const newArray = [
          ...taskData,
          newItem
        ]
        localStorage.setItem(newItem.id, newItem.label); 
        return {
          taskData: newArray
        }
      })
    }
    toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex((item) => item.id === id);
      const oldItem = arr[idx];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName]
      }
     return[
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1),
      ]
     
    }
    
    onToggleDone = (id) => {
     this.setState(({ taskData }) => {
      return {
        taskData: this.toggleProperty(taskData, id, 'done')
      }
     })
    }

    setFilter = (filter) => {
      this.setState({
        filter
      });
    };
  
    filterTasks = () => {
      const { taskData, filter } = this.state;
      switch (filter) {
        case "all":
          return taskData;
        case "active":
          return taskData.filter((item) => !item.done);
        case "completed":
          return taskData.filter((item) => item.done);
        default:
          return taskData;
      }
    };
    clearCompleted = () => {
      this.setState(({ taskData }) => {
        const newArray = taskData.filter((item) => !item.done);
        newArray.forEach((item) => {
          localStorage.removeItem(item.id);
        });
        return {
          taskData: newArray
        };
      });
    }
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
};


