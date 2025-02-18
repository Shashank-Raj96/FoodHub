
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

//JSX (transpiled before it reaches to the JS ) - transpiling by JS - DONE by BABEL

//JSX =>  React.createElement = ReactElement-JS object =HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX </h1>

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
