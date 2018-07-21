import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
// import './App.css';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Dev'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Website',
          category: 'Web Dev'
        }
      ]
    });
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({todos: data}, () => {
          console.log('Ye hai State', this.state)
        })
      },
      error: (err) => {
        console.error("ERRROR", err);
      }
    })
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  // componentDidMount() {
  //   this.getTodos();
  // }

  handleAdd(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDelete(id) {
    let projects = this.state.projects;
    let i = projects.findIndex( x => x.id === id);
    projects.splice(i,1);
    this.setState({projects:projects});
  }
  
  render() {
    return (
      <div className="App">
        <AddProject add={this.handleAdd.bind(this)}/>
        <Projects onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
//Testing git commit