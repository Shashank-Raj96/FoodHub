import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body"; 
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet} from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
//import Grocery from "./component/Grocery";

// Chunking 
// Code Splitting 
// Dynamic Bundling
// Lazy Laoding
// On Demand Loading 
//(These all are same terms which means chunks your Application . Make your application into smaller Chunks)
 
const Grocery = lazy (() => import("./component/Grocery") );

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
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense> 
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
