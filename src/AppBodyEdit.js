import React, { Component } from 'react';

class AppBodyEdit extends Component {
    constructor(){
        super();
        this.state = {
            name: null,
            age: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
    }

    render(){
        return(
        <div>
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" required onChange={ this.handleChange } />
                <label htmlFor="age">Age: </label>
                <input type="text" id="age" required onChange={ this.handleChange } />
                <button>Submit</button>
            </form>
        </div>)
    }
}

export default AppBodyEdit;