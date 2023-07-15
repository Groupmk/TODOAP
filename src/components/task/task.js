import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    const element = document.querySelector(".description");
    element.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    const element = document.querySelector(".description");
    element.removeEventListener("click", this.handleClick);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    const { label, important = false } = this.props;
    const { checked } = this.state;

    const style = {
      textDecoration: checked ? "line-through" : "none",
      importantDecoration: important ? "line-through" : "none",
    };

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={ this.handleClick } />
        <label>
          <span className="description" style={style}>
            {label}
          </span>
          <span className="created">5 min ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    );
  }
}




