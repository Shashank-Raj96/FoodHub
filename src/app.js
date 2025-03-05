import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body"; 
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
 
const AppLayout =() => {
  return (
    <div className="app">
   <Header/>
   <Outlet/>
   </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,

    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
    
      {
        path: "/contact",
        element: <Contact/>
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error />,
  },
 
  
  
]);

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

root.render(<RouterProvider router={appRouter}/>);
