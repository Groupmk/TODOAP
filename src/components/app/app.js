import React, { Component } from "react";
import AppHeader from "../header";
import TaskList from "../tasklist/tasklist";
import Footer from "../footer/footer";

export default class App extends Component {
    state = {
      taskData: [
        { label: "Drink Coffe", important: false, condition: "completed", id: 1},
        { label: "Make Awesome App", important: true, condition: "", id: 2 },
        { label: "Have a lunch", important: false, condition: "editing", id: 3 },
      ],
      toggleDoneCount: 0,
    }
    deletItem = (id) => {
      this.setState(({ taskData }) => {
        const idx = taskData.findIndex((item) => item.id === id);
        const newArray = [
          ...taskData.slice(0, idx),
          ...taskData.slice(idx + 1),
        ]
        return {
          taskData: newArray
        }
      })
    }
    onToggleDone = (id) => {
     this.setState(({ taskData }) => {
       const idx = taskData.findIndex((item) => item.id === id);
       const oldItem = taskData[idx];
       const newItem = {
         ...oldItem,
         done: !oldItem.done
       }
       const newArray = [
        ...taskData.slice(0, idx),
        newItem,
        ...taskData.slice(idx + 1),
      ]
      return {
        taskData: newArray
      }
     })
    }
  render(){
    const totalCount = this.state.taskData.length;
    // const doneCount = this.state.taskData.filter((item) => item.done).length;
    return (
      <section className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList todos={this.state.taskData}
           onDeleted={this.deletItem}
           onToggleDone={this.onToggleDone}/>
          <Footer totalCount = { totalCount }/>
        </section>
      </section>
    );
  }
};


