import { useContext } from "react";
import {CDN_URL} from "../../utils/constants";
import UserContext from "../../utils/UserContext";
import { imagesUrl } from "../Images/ImageUrl";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
  
 
  const {loggedInUser} = useContext(UserContext)
  console.log("info",info)
    //console.log(info.name,info.cloudinaryImageId);
    function getRandomUrl() {
      const index = Math.floor(Math.random() * imagesUrl.length);
      return imagesUrl[index];
    }
    return(
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200 " 
      
      >
             <img
              className="rounded-lg"
              alt="res-logo"
              
              src={getRandomUrl()}
              
              /> 
  
             <h3 className="font-bold py-3 text-lg">{info.name}</h3>
             <h4>{info.cuisines.join(", ")}</h4>
             <h4>{info.avgRating}stars</h4>
             <h4>{info.costForTwo}</h4>
             <h4>{info.sla.deliveryTime} minutes</h4>
             <h4>User: {loggedInUser}</h4>
      
      </div>
  
    );
  }

  export default RestaurantCard;