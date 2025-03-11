import {LOGO_URL} from "../../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
   
const Header = () => {
 const [btnNameReact , setBtnNameReact] = useState("Login");

 const onlineStatus = useOnlineStatus();
  // console.log("Header Rendered");
   
   // if no dependencies array => useEffect is called on every render 
   // if empty dependencies array => useEffect is called only once (called on only first render)
   // if dependencies array has some values => useEffect is called on every render if any of the value in dependencies array changes
   // if dependencies array is [btnNameReact] => useEffect is called on every render if btnNameReact changes
   useEffect (() => {
      
   }, [btnNameReact]);

    return(
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50" >
        <div className="Logo-Container">
           <img className="w-45"src ={LOGO_URL}/>
           </div>
          <div className ="flex items-center">
            <ul className="flex p-4 m-4">
              <li className="px-4">
               OnlineStatus:{onlineStatus ? "✅" : "🔴" }
              </li>
              <li className="px-4">
              <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About Us</Link>
                </li>
              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
                </li>
              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
                </li>
              <li className="px-4">
                   Cart
              </li>
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