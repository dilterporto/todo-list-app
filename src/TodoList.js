import React, { Component } from 'react';

class TodoList extends Component {

  constructor() {
    super();
    
    this.ul = { 'listStyle': 'none' };

  }

  removeItem(item) {

    if(confirm(`Deseja realmente excluir o item ${item.id}`)) {

      let items = this.props.items;
      items.splice(items.indexOf(item), 1);

      this.setState({
        items: items
      });

    }    
    
  }

  render() {

    return (

      <ul style={this.ul}>
        { this.props.items.map(item => (
            <li onClick={() => this.removeItem(item)} key={item.id}>
              <button className="btn btn-sm btn-danger">x</button> {item.text} 
            </li>
          ))
        }
      </ul>
    );
  }
}

export default TodoList;