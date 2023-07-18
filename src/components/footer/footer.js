import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../tasksfilter/tasksfilter';

const Footer = ({
  totalCount, doneCount, filter, setFilter, clearCompleted,
}) => (
    <footer className="footer">
      <span className="todo-count">{ totalCount } incomplete { doneCount } completed</span>
      < TaskFilter
      filter = { filter }
      setFilter = { setFilter }
      clearCompleted = { clearCompleted } />
    </footer>
);
Footer.propTypes = {
  totalCount: PropTypes.node,
  doneCount: PropTypes.node,
  filter: PropTypes.node,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};
export default Footer;
