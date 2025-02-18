/**
 * <div id="parent">
 *       <div id="child">
 *          <h1> I am Shashank </h1>
 *          <h2> I am Shanu </h2>
 *       </div>
 * </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement(
//     "div", 
//     { id:"parent"},
// React.createElement(
//     "div",
//     { id:"child"},[
//     React.createElement("h1", {},"I am Shashank Raj"),
//     React.createElement("h2", {},"I am Shanu"),
// ])
// );

// //const heading = React.createElement("h1",{id: "heading"},"Hello World From React");

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// React.createElement = ReactElement-JS object =HTMLElement(render)

const heading = React.createElement(
"h1",
{id : "heading"},
"Namaste React"
);

const fn = () => true;

const fn2 =() =>{
    return true;
}

// React component
// Class Based Component -- old way 
// Functional component  -- new way

// React functional component 
const HeadingComponent = ()=> {
    return <h1> Namaste React Functional Component</h1>;
};

const HeadingComponent2 = ()=> (
    <h1 className="heading"> Namaste React Functional Component</h1>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);