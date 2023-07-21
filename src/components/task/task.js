import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static defaultProps = {
    updateInterval: 1000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  state = {
    formattedDistance: '',
    editing: false,
    label: this.props.label,
  };

  startEditing = () => {
    this.setState({ editing: true });
  };

  finishEditing = () => {
    const { label } = this.state;
    if (label.trim() !== '') {
      this.props.onItemEdit(label);
    }
    this.setState({ editing: false });
  };

  intervalId = null;

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateFormattedDistance();
    this.intervalId = setInterval(this.updateFormattedDistance, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateFormattedDistance = () => {
    const { createdDate } = this.props;
    const formattedDistance = formatDistanceToNow(createdDate, { addSuffix: true });
    this.setState({ formattedDistance });
  };

  handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      this.finishEditing();
    } else if (e.keyCode === 27) {
      this.setState({ editing: false });
    }
  };
  hendleBlur = () => {
    this.setState({ editing: false });
  };

  render() {
    const { label, onDeleted, onToggleDone, done } = this.props;
    const { formattedDistance, editing } = this.state;
    let condition = 'condition';
    if (done) condition = 'completed';

    if (editing) {
      return (
        <li className={condition}>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
            <input
              className="edit-label"
              value={this.state.label}
              autoFocus={true}
              onBlur={this.hendleBlur}
              onChange={(e) => {
                const newLabel = e.target.value;
                this.setState({ label: newLabel });
              }}
              onKeyDown={this.handleKeyPress}
            />
          </div>
        </li>
      );
    }
    return (
      <li className={condition}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} autoFocus={true} />
          <label>
            <span className="description" onClick={onToggleDone}>
              {label}
            </span>
            <span className="created">{formattedDistance}</span>
          </label>
          <button className="icon icon-edit" onClick={this.startEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
