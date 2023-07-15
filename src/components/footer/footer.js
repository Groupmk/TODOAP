import React from "react";
import TaskFilter from "../tasksfilter/tasksfilter";
const Footer = () => {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left(!!!)</span>
      < TaskFilter />
    </footer>
  );
};

export default Footer;
