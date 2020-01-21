import React from 'react';
import './todo.css';

export default function Todo (props){
    const classes= [];
    let done = props.todo.map(items => items);
  console.log(done);

    const todoItems = props.todo.map((item,index) => <li key={item.key} index={index} className={props.classes} ><input type="checkbox" onChange={() => props.handleChecked(props.todo,item.key,classes)}/>{item.text}</li>);
    const todoItemsTimes = props.todo.map((item) => <li key={item.key} >{item.time}</li>);

return(
    <div className="task_bar_main">
    <ul className="task_bar">{todoItems}</ul>
    <ul className="task_time">{todoItemsTimes}</ul>
    </div>
)}