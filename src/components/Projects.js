import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  delete(id) {
    this.props.onDelete(id);
  }


  render() {
    console.log(this.props)
    let pItems;
    if ( this.props.projects ) {
        pItems = this.props.projects.map( p => {
            // console.log(p);
            return(
                <ProjectItem onDelete={this.delete.bind(this)} key={p.id} pro={p}/>
            )
        })
    }
    return (
      <div>
        <h3>Latest Projects</h3>
        <p>{pItems}</p>
      </div>
    );
  }

}

// Projects.propTypes = {
//   projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Projects;
