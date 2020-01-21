import React from 'react';
import './App.css';
import Todo from './todo/todo.js';
import Form from './form/form.js';


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    items: [],
    currentItem:{
      text: '',
      key:'',
      time:'',
      completed: '',
    }
  };
  }
 handleChange = (event) =>  {
   this.setState({
    currentItem:{
      text : event.target.value,
      key: Date.now(),
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `,
      completed: false,
    } 
    });
  }
 handleSubmit = (event) => {
  event.preventDefault();
  let newItem = this.state.currentItem;
  if(newItem.text !== ""){
   const newItems = [...this.state.items,newItem];
   this.setState({
    items:newItems,
    currentItem:({
       text: '',
       key:'',
       time: '', 
      }) 
    })
}}
 handleChecked(todo,key){
  let done = todo.map((items) => {
    if(items.key === key){
      items.completed = !items.completed;
    }   
    return items;
  });
  return done;
}
render() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Todo List</h1>
      </header>
      <main>
        <Form handleChange={this.handleChange}  value={this.state.currentItem.text} handleSubmit={this.handleSubmit} />
        <div className="todos">
        <Todo todo={this.state.items} handleChecked={this.handleChecked} />
        </div>
        </main>
    </div>
  );
  }
}

export default App;
