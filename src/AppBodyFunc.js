import React from 'react';
import './App.css';


const AppBodyFunc = ({ data, deleteData }) => {
    const dataList = data.map( datum =>{

        // using if else conditional statement
        // if (datum.age > 20 ){
        //     return (
        //         <div key={ datum.id }>
        //             <p>Title II: { datum.title },</p>
        //             <p>Sex: { datum.sex }</p>
        //             <p>Age: { datum.age }</p>
        //         </div>
        //     )
        // }else{
        //     return null;
        // }

        return ( datum.age > 20 ) ? (
                    <div className="data" key={ datum.id }>
                        <p>Title II: { datum.title },</p>
                        <p>Sex: { datum.sex }</p>
                        <p>Age: { datum.age }</p>
                        <button onClick={ () => { deleteData(datum.id) } }>DELETE USER</button>
                    </div>
                )  : null;
    })
    return (
        <div className="App-body">
            { dataList }
        </div>
    )
}

export default AppBodyFunc;