import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';

const TaskList = ({ todos, onDeleted, onToggleDone, onItemEdit }) => {
  const elements = todos.map((item) => {
    const { id, condition, ...props } = item;

    return (
      <Task
        {...props}
        key={id}
        condition={condition}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onItemEdit={(text) => onItemEdit(id, text)}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
  onItemEdit: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      condition: PropTypes.string,
      // Остальные необходимые свойства
    })
  ).isRequired,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onItemEdit: PropTypes.func,
};

export default TaskList;
