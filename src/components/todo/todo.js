import React from 'react';
import './todo.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';

export default function Todo(props) { 
    const todoItems = props.todo.map((item, index) => 
            <li key={item.key}
            className={(item.completed)
            ? 'active'
            : 'done'}>
            <input
                type="checkbox"
                className="check"
                onClick={() => props.handleChecked(props.todo, item.key)}/>
            <input
                type="text"
                className="change_input"
                id={item.key}
                value={item.text}
                onChange={(e) => props.setUpdate(e.target.value, item.key)}></input>
            <FontAwesomeIcon
                icon={faTrash}
                className="trash"
                onClick={() => props.handelDelete(item.key)}/></li>);
    const todoItemsTimes = props.todo.map((item) =>
        <li key={item.key}> {item.time} </li>);
return(    
    <div className="task_bar_main">
     <ul className="tasks task_bar"><h2 className="taks-list">Tasks</h2><FlipMove  enterAnimation="fade" leaveAnimation="fade" duration={300} easing="ease-in-out">{todoItems}</FlipMove> </ul>
     <ul className="tasks task_time"><h2 className="taks-list">Time</h2><FlipMove  enterAnimation="fade" leaveAnimation="fade"  duration={300} easing="ease-in-out">{todoItemsTimes}</FlipMove></ul>
    </div >
      )
}