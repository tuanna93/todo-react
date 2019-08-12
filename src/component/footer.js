import React from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0
        }
    }
    render() {
        let length = 0;
        let items = this.props.items;
        if (!_.isEmpty(items)) {
            length = this.props.items.filter(item => !item.isChecked).length;
        }
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{length}</strong>
                    <span> </span>
                    <span>items</span>
                    <span> </span>
                    <span>left</span>
                </span>
                <ul className="filters">
                    <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li><span> </span>
                    <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li><span> </span>
                    <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
                </ul>
                <button className="clear-completed" onClick={this.props.clearAllItem}>Clear completed</button>
            </footer>
        );
    }
}