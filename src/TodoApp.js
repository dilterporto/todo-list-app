import React, { Component } from 'react';
import TodoList from './TodoList'
import { Modal, Button } from 'react-bootstrap'; 



class TodoApp extends Component {

  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);


    this.state = {items: [], text: '', modalIsOpen: false};

  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
          Add Item
        
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <form onSubmit={this.handleSubmit}>
              <input className="form-control" onChange={this.handleChange} value={this.state.text} />
              <button className="btn btn-success">{'Add #' + (this.state.items.length + 1)}</button>
            </form>    
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>


        
        
        <TodoList items={this.state.items} />        
        
      </div>
    );
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }


}

export default TodoApp;
