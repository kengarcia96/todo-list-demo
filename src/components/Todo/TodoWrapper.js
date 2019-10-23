import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"
import TodoResource from '../../api/TodoResource';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class TodoWrapper extends Component {

  componentDidMount() {
    TodoResource.getAll()
      .then(res => res.json())
      .then(res => {
        console.log("todos res:", res._embedded.todos);
        this.props.refreshTodos( res._embedded.todos)
      })
  }

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      this.props.createNewTodo(newTodoContent);
    }
  };

  updateTodos = (todo) => {
    this.props.updateTodo(todo);
  };
    displayAllTodo = () =>{
        TodoResource.getActive()
            .then(res => res.json())
            .then(res => {this.props.getActive( res._embedded.todos)})
    }


    render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos} onChangeStatus={this.updateTodos}/>
          <Button onClick={this.displayAllTodo}>Active</Button>
      </div>
    )
  }
}
