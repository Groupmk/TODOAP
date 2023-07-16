import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns';


export default class Task extends Component {
  state = {
    formattedDistance: ''
  };
  intervalId = null; 
  componentDidMount() {
    this.updateFormattedDistance(); 
    this.intervalId = setInterval(this.updateFormattedDistance, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId); 
  }
  updateFormattedDistance = () => {
    const { createdDate } = this.props;
    const formattedDistance = formatDistanceToNow(createdDate, { addSuffix: true });
    this.setState({ formattedDistance });
  }
  render() {
    const { label, onDeleted, onToggleDone, done } = this.props;
    const { formattedDistance } = this.state;
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
          <span className="created">{formattedDistance}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={ onDeleted }></button>
      </div>
      </li>
    );
  }
}




