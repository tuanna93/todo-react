import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            completed: false,
            value: ""
        }
        this.myRef = React.createRef();
    }

    handleDoubleClick = () => {
        this.setState({ isEdit: true });
    }
    handleBlur = () => {
        this.setState({ isEdit: false });
        this.props.handleBlur(this.props.item.id, this.state.value)
    }
    handleClick = () => {
        this.props.handleActive(this.props.item);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.item);
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.props.handleBlur(this.props.item.id, this.state.value)
        }
    }
    componentWillMount() {
        this.setState({ value: this.props.item.name })
    }
    render() {
        let item = this.props.item;
        let completed = item.isChecked ? "completed" : "";
        let editing = this.state.isEdit ? "editing" : ""
        return (
            <li className={completed + " " + editing}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={item.isChecked} onChange={this.handleClick} />
                    <label onDoubleClick={this.handleDoubleClick} >{item.name}</label>
                    <button className="destroy" onClick={this.handleDelete}></button>
                </div><input ref={input => this.myRef = input && input.focus()} className="edit" value={this.state.value} onBlur={this.handleBlur} onChange={this.handleChange} onKeyDown={this.keyPress} />
            </li>
        )
    }
}