import React from "react";
import Task from "../task/task";

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, condition, ...props } = item;

    return (
       <Task {...props} id = {id} condition = {condition}
        onDeleted = {() => onDeleted(id)}
        onToggleDone = {() => onToggleDone(id)}/>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
