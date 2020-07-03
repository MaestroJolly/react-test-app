import React, { Component } from 'react';
import './App.css';


class AppBody extends Component {

    constructor(){
        super();
        this.state = {
            name: 'Jolly',
            age: 'Infinity'
        }
    };

    render(){
        const { data } = this.props;
        const dataList = data.map( datum =>{
            return (
                <div key={ datum.id }>
                    <p>Name: { datum.name },</p>
                    <p>Sex: { datum.sex }</p>
                </div>
            )
        })
        return (
            <div className="App-body">
                <p>Name: { this.state.name },</p>
                <p>Age: { this.state.age },</p>
                <p>Title: { this.props.title },</p>
                { dataList }
            </div>
        )
    }
}

export default AppBody;