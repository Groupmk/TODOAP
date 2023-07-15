import React from "react";
import TaskFilter from "../tasksfilter/tasksfilter";
const Footer = ({ totalCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{ totalCount } left(!!!)</span>
      < TaskFilter />
    </footer>
  );
};

export default Footer;