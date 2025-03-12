import { useContext } from "react";
import {CDN_URL} from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { info } = resData;
  
 
  const {loggedInUser} = useContext(UserContext)
  
    //console.log(info.name,info.cloudinaryImageId);
    return(
      <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" 
      
      >
             <img
              className="rounded-lg"
              alt="res-logo"
              src={CDN_URL + info.cloudinaryImageId}
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