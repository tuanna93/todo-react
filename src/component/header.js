import React from 'react';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    handleOnchange = (event) => {
        this.setState({ value: event.target.value })
    }
    keyPress = (event) => {
        if (event.keyCode === 13) {
            this.props.onSubmit(this.state.value);
            this.setState({ value: "" })
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" type="text" onKeyDown={this.keyPress} placeholder="What needs to be done?" onChange={this.handleOnchange} value={this.state.value} />
            </header>
        );
    }
}