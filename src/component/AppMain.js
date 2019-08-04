import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import AppContext from '../context/appContext';


class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: 0
        }
    }

    addItem = (name) => {
        let { id, items } = this.state;
        id += 1;
        if (name) {
            items.push(
                {
                    id,
                    name,
                    isChecked: false
                });
            this.setState({ id, items });
        }
    }

    handleActive = ({ id }) => {
        const { items } = this.state;
        const newItems = items.map(item => {
            if (id === item.id) {
                item.isChecked = !item.isChecked
            }
            return item;
        });
        this.setState({ items: newItems });
        console.log(this.props);
    }

    handleDelete = (item) => {
        const { items } = this.state;
        const id = item.id;
        const newItems = items.filter(it => it.id !== id);
        this.setState({ items: newItems })
    }

    render() {
        return (
            <div>
                <section className="todoapp">
                    <div>
                        <Header onSubmit={this.addItem} />
                        <Main items={this.state.items} handleActive={this.handleActive} handleDelete={this.handleDelete} />
                        <Footer items={this.state.items} />
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