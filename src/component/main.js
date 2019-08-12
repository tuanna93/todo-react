import React from 'react';
import Item from './item';

export default class Footer extends React.Component {

    render() {
        return (
            <ErrorBoundary>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" defaultValue="" onClick={this.props.toggleAllItem} /><label htmlFor="toggle-all"></label>
                    <ul className="todo-list">
                        {this.props.items.map(
                            item => <Item key={Math.random()} item={item} handleActive={this.props.handleActive} handleDelete={this.props.handleDelete} handleDoubleClick={this.props.handleDoubleClick} handleBlur={this.props.handleBlur} />)
                        }
                    </ul>
                </section>
            </ErrorBoundary>
        );
    }
}
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}