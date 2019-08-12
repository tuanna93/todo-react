import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import AppContext from '../context/appContext';


class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addItem = (name) => {
        let { id, items } = this.props.context.state;
        if (name) {
            items.push(
                {
                    id: id + 1,
                    name,
                    isChecked: false,
                });
            this.setState({ id, items });
            this.props.context.updateValue({ id: id + 1, items });
        }
    }
    toggleAllItem = () => {
        const { items } = this.props.context.state;
        const itemsFilter = items.filter(i => !i.isChecked);
        const condition = (itemsFilter && itemsFilter.length) ? true : false;
        const newItems = items.map(item => {
            item.isChecked = condition
            return item;
        });
        this.props.context.updateValue({ items: newItems });
    }
    handleActive = ({ id }) => {
        const { items } = this.props.context.state;
        const newItems = items.map(item => {
            if (id === item.id) {
                item.isChecked = !item.isChecked
            }
            return item;
        });
        this.props.context.updateValue({ items: newItems });
    }

    handleDelete = (item) => {
        const { items } = this.props.context.state;
        const id = item.id;
        const newItems = items.filter(it => it.id !== id);
        this.props.context.updateValue({ items: newItems })
    }

    handleBlur = (id, value) => {
        this.handleEdit(id, value);
    }
    handleEdit = (id, value) => {
        const { items } = this.props.context.state;
        const newItems = items.map(item => {
            if (id === item.id) {
                item.name = value
            }
            return item;
        });
        this.props.context.updateValue({ items: newItems });
    }
    clearAllItem = () => {
        this.props.context.updateValue({ items: [] });
    }

    render() {
        let items = this.props.context.state.items;
        let link = this.props.location.pathname;
        switch (link) {
            case '/active':
                items = items.filter(item => !item.isChecked);
                break;
            case '/completed':
                items = items.filter(item => item.isChecked);
                break;
            default:
                break;
        }
        return (
            <div>
                <section className="todoapp">
                    <div>
                        <Header onSubmit={this.addItem} />
                        <Main toggleAllItem={this.toggleAllItem} items={items} handleActive={this.handleActive} handleDelete={this.handleDelete} handleDoubleClick={this.handleDoubleClick} handleBlur={this.handleBlur} />
                        <Footer items={this.props.context.state.items} clearAllItem={this.clearAllItem} />
                    </div>
                </section>
            </div>
        );
    }
}
const withContext = (Component) => {
    return (props) => (
        <AppContext.Consumer>
            {
                (context) => {
                    return (<Component {...props} context={context} />)
                }
            }
        </AppContext.Consumer>
    )
}

export default withContext(AppMain);
