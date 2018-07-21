import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    console.log(this.props)
    let todoItems;
    if ( this.props.todos ) {
        todoItems = this.props.todos.map( t => {
            // console.log(p);
            return(
                <TodoItem key={t.id} todo={t}/>
            )
        })
    }
    return (
      <div>
        <h3>API Todos</h3>
        <p>{todoItems}</p>
      </div>
    );
  }

}

// Projects.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Todos;
