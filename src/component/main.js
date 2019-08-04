import React from 'react';
import Item from './item';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <section className="main"><input id="toggle-all" className="toggle-all" type="checkbox" defaultValue="" /><label htmlFor="toggle-all"></label>
                <ul className="todo-list">
                    {this.props.items.map(
                        item => <Item key={item.id} item={item} handleActive={this.props.handleActive} handleDelete={this.props.handleDelete} />)
                    }
                    {/* <li className="completed">
                        <div className="view"><input className="toggle" type="checkbox" /><label>dasdsa</label><button
                            className="destroy"></button>
                        </div><input className="edit" value="dasdsa" defaultValue="" />
                    </li>
                    <li className="">
                        <div className="view"><input className="toggle" type="checkbox" /><label>dsad</label><button
                            className="destroy"></button>
                        </div><input className="edit" value="dsad" defaultValue="" />
                    </li>
                    <li className="">
                        <div className="view"><input className="toggle" type="checkbox" /><label>das</label><button
                            className="destroy"></button>
                        </div><input className="edit" value="das" defaultValue="" />
                    </li> */}
                </ul>
            </section>
        );
    }
}