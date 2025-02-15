import React, {Component} from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default class TodoInput extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  dispatch = () => {
    this.props.onNewTodoAdded(this.state.inputValue);
    this.setState({inputValue: ''})
  };

  render() {
    return (
      <div className="todo-input" >
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        {/*<button onClick={this.dispatch}>add</button>*/}
        <Button type="primary" onClick={this.dispatch}>Add</Button>
      </div>
    )
  }
}
