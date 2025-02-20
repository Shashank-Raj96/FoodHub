
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
 const elem =<span>React Element</span>;


const title = (
<h1 className="head" tabIndex="5">
  {elem}
   Namaste React using JSX
</h1>
);

// React Functional component
// const HeadingComponent = ()=> {
//     return <h1> Namaste React Functional Component</h1>;
//};
// Both are same


const HeadingComponent = ()=> (
  <div id="container"> 
 {title}
    <h1 className="Heading"> Namaste React Functional Component</h1>
    </div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
