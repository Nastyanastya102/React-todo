import React from 'react';
import './App.scss';
import Todo from '../todo/todo.js';
import Form from '../form/form.js';
import Header from '../header/header.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
                time: '',
                completed: ''
            }
        };
    }
    handleChange = (event) => {
        this.setState({
            currentItem: {
                text: event.target.value,
                key: Date.now(),
                time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `,
                completed: true
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: ({
                 text: '',
                 key: '',
                 time: '', 
                 completed: ''})
            })
        }
    }
    handleChecked = (todo, key) => {
        const done = todo.map((items) => {
            if (items.key === key) {
                items.completed = !items.completed;
                this.setState({completed: false});
            }
            return items;
        });
        return done;
    }
    handelDelete = (key) => {
        let arr = this.state.items.findIndex((currentValue) => currentValue.key === key);
        this.state.items.splice(arr, 1);
        this.setState({completed: false});
    }
    setUpdate = (text, key) => {
        const items = this.state.items;
        items.map(item => {
            if (item.key === key) 
                item.text = text;
            return item;
        })
        this.setState({items: items})
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <main>                  
                    <Form
                        handleChange={this.handleChange}
                        className={this.state.currentItem.completed}
                        value={this.state.currentItem.text}
                        handleSubmit={this.handleSubmit}/>
                    <div className="todos">
                    
                        {(this.state.items.length === 0)
                            ? <p className="empty">Empty</p>
                            :  <Todo
                                todo={this.state.items}
                                handleChecked={this.handleChecked}
                                handelDelete={this.handelDelete}
                                setUpdate={this.setUpdate}/>} 
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
