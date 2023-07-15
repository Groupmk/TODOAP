import React from "react";
import Task from "../task/task";

const TaskList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, condition, ...props } = item;

    return (
      <li className={condition} key={id}>
       <Task {...props} />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
