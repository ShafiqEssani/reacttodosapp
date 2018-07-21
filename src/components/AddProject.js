import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

    constructor() {
        super();
        this.state = {
            newProjectAddition: {}
        }
    }

    static defaultProps = {
        categories: [
            'Web Design',
            'Web Dev',
            'Mobile Dev'
        ]
    }

    myButtonFunction(e) {
        console.log('submitted');
        e.preventDefault();
        if (this.refs.title.value === '') {
            alert('Title is required');
        } else {
            this.setState( {
                newProjectAddition: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, () => {
                console.log(this.state);
                this.props.add(this.state.newProjectAddition);
            });
        }
        
    }

    render() {
        let catOptions = this.props.categories.map(cat => {
            return <option key={cat} value={cat}> {cat}</option>
        })

        return (
        <div>
            <h3> Add Project</h3>
            <form onSubmit={this.myButtonFunction.bind(this)}>
                <div>
                    <label>Title</label> <br/>
                    <input type="text" ref="title" />
                </div>
                <div>
                    <label>Category</label> <br/>
                    <select ref="category">
                    {catOptions}
                    </select>
                </div>
                <br/>
                <input type="submit" value="Go Add this project" />
            </form>
        </div>
        );
    }
}

export default AddProject;
