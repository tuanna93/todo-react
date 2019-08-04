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
                    isChecked: false
                });
            this.setState({ id, items });
            this.props.context.updateValue({ id: id + 1, items });
        }
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

    render() {
        console.log(this.props);
        let items = this.props.context.state.items;
        let link = this.props.location.pathname;
        switch(link){
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
                        <Main items={items} handleActive={this.handleActive} handleDelete={this.handleDelete} />
                        <Footer items={this.props.context.state.items} />
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