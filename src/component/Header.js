import {LOGO_URL} from "../../utils/constants";
import { useEffect, useState } from "react";

   const Header = () => {

   const [btnNameReact , setBtnNameReact] = useState("Login");
   console.log("Header Rendered");
   
   // if no dependencies array => useEffect is called on every render 
   // if empty dependencies array => useEffect is called only once (called on only first render)
   // if dependencies array has some values => useEffect is called on every render if any of the value in dependencies array changes
   // if dependencies array is [btnNameReact] => useEffect is called on every render if btnNameReact changes
   useEffect (() => {
      console.log("useEffect called");
   }, [btnNameReact]);

    return(
      <div className="header">
        <div className="Logo-Container">
           <img className="logo"src ={LOGO_URL}/>
           </div>
          <div className ="nav-items">
            <ul>
              <li>Home</li>
              <li>Address</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button
               className ="Login"
               onClick={() => {
               btnNameReact == "Login"
                ?  setBtnNameReact("Logout")
                 : setBtnNameReact("Login");
               }}
               >
                {btnNameReact}
                </button>
            </ul>
  
  
  
  
          </div>
  
  
      </div>
    )
   };

   export default Header;