import React, { Component } from 'react';

class ProjectItem extends Component {

    delete(id) {
        console.log('delete this id', id);
        this.props.onDelete(id);
    }

    render() {
        
        return (
        <li>
            <strong>{this.props.pro.title}</strong>: { this.props.pro.category}
            <button onClick={this.delete.bind(this, this.props.pro.id)}> Click to delete this project</button>
        </li>
        );
    }
}

export default ProjectItem;
