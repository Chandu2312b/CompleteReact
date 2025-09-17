// this is about the functions components and class components
// used same name as Greeting.js in components folder to avoid confusion

//  -------------------------- function components -----------------------------
// Just add <Greeting /> in app.js to use this component

// import React from 'react';

// function Greeting(){
//     return (
//     <h1>This is functional component</h1>
// )}
// export default Greeting;

//  -------------------------- class components -----------------------------
// Just add <Greeting /> in app.js to use this component
import React, {Component} from 'react';
class Greeting extends Component{
    render(){
        return (
            <h1>This is class component</h1>
        )
    }
}
export default Greeting;
