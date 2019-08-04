import React from 'react';
export default (props) => {
    let item = props.item;
    return (
        <li className={item.isChecked ? "completed" : ""}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={handleClick.bind(this, props)} />
                <label>{item.name}</label>
                <button className="destroy" onClick={handleDelete.bind(this, props)}></button>
            </div><input className="edit" value={item.name} onDoubleClick={handleEdit.bind(this, props)} />
        </li>
    )
}
const handleEdit = (props) => {
    console.log("item");
}

const handleClick = (props) => {
    props.handleActive(props.item);
}
const handleDelete = props => {
    props.handleDelete(props.item);
}