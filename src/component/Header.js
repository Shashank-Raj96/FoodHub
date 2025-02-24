import {LOGO_URL} from "../../utils/constants";

 export const Header = () => {
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
            </ul>
  
  
  
  
          </div>
  
  
      </div>
    )
   };

   export default Header;