import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./component/Header";
import Body from "./component/Body"; 
 
const AppLayout =() => {
  return (
    <div className="app">
   <Header/>
   <Body/>
    </div>
  );
};
 


//  const elem =<span>React Element</span>;


// const title = (
// <h1 className="head" tabIndex="5">
//   {elem}
//    Namaste React using JSX
// </h1>
// );




// const HeadingComponent = ()=> (
//   <div id="container"> 
//     <title/>
//     <h1 className="Heading"> Namaste React Functional Component</h1>
//     </div>
// );




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
