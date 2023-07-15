import React, { Component } from "react";

export default class Task extends Component {
  render() {
    const { label, onDeleted, onToggleDone, done } = this.props;

    let condition = "condition";
    if (done) condition = "completed";
    return (
      <li className={condition}>
           <div className="view">
        <input className="toggle" type="checkbox"  onChange={onToggleDone}
            checked={done} />
        <label>
            <span className="description" onClick={ onToggleDone }>
            {label}
        </span>
          <span className="created">5 min ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={ onDeleted }></button>
      </div>
      </li>
    );
  }
}




