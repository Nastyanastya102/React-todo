import React from 'react';
import './form.scss';

export default function Form(props){
return (
    <form className="input_todo"  onSubmit={props.handleSubmit}>
     <input type="text" 
     className="input_for_task"  
     placeholder="Add new task" 
     value={props.value}  
     onChange={props.handleChange}/>
    </form>   
)
}
