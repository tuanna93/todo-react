import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';


export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            length : 0
        }
    }
    render(){
        let length = 0;
        let items =this.props.items;
        if(!_.isEmpty(items)){
            length = this.props.items.filter(item => !item.isChecked).length;
        }
        return (
            <footer className="footer"><span className="todo-count"><strong>{length}</strong><span> </span><span>items</span><span>
            left</span></span>
                <ul className="filters">
                    <li><Link to="/" className="selected">All</Link></li><span> </span>
                    <li><Link to="/active" className="">Active</Link></li><span> </span>
                    <li><Link to="/completed" className="">Completed</Link></li>
                </ul><button className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}