
/**
 * Header
 * logo
 * nav items
 * search
 * RestaurantContainer
 * RestaurantCard
 * --Image
 * -Name of Res , Star rating , cuisine , delievery time
 * footer
 * copyright
 * Link
 * Address 
 * Contact
 */
 const Header = () => {
  return(
    <div className="header">
      <div className="Logo-Container">
         <img className="logo"src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
         </div>
        <div className ="nav-items">
          <ul>
            <li>Home</li>
            <li>Address</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>




        </div>


    </div>
  )
 };

  

 const RestaurantCard =(props) => {
  console.log(props);
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
     <img
     className="res-logo"
      alt="res-logo"
      src ="https://images.deliveryhero.io/image/fd-my/LH/zggt-listing.jpg"/>
      <h3>{props.resName}</h3>
      <h4> {props.cuisineName}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    
    </div>
  );
 };
 const Body =() => {
  return(
<div className ="body">
  <div className="search">search</div>
  <div className="res-container">
  <RestaurantCard
   resName="Meghana Foods"
   cuisine="Biryani, North Indian foods"
  />
  <RestaurantCard
   resName="KGF"
   cuisine="Burger"
   />
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  <RestaurantCard/>
  </div>
  </div>
    )
 }

const AppLayout =() => {
  return (
    <div className="app">
   <Header/>
   <Body/>
    </div>
  );
};
 import React from "react";
 import ReactDOM from "react-dom/client";


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
