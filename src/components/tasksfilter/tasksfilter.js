import React, {Component} from "react";

export default class TaskFilter extends Component {
    render() {
        return (
            <div className="footer">
                <ul className="filters">
                    <li>
                        <button className="selected">All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </div>
        );
    }
}
