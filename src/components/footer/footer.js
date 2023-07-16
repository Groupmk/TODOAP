import React from "react";
import TaskFilter from "../tasksfilter/tasksfilter";
const Footer = ({ totalCount, doneCount, filter, setFilter, clearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{ totalCount } incomplete { doneCount } completed</span>
      < TaskFilter filter = { filter } setFilter = { setFilter } clearCompleted = { clearCompleted } />
    </footer>
  );
};

export default Footer;