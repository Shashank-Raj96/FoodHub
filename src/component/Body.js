
import RestaurantCard from "./RestaurantCard";
import{useEffect, useState} from "react";
import resList from "../../utils/mockData";

const Body =() => {
    // Local State Variable= super powerful variable
    const [ListofRestaurants, setListofRestaurants] = useState(resList);

    //Normal JS Variable
   // let ListofRestaurants= null;

   useEffect(() =>{
    fetchData();
   },[]);

  const fetchData = async () => {
    const data = await fetch (
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  }
   
    return(
  <div className ="body">
    <div className="filter">
        <button className ="filter-btn" 
        onClick={()=>{
            // Filter Logic Here
            const filteresList = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurants(filteresList);
            //console.log("Button Clicked");
        }}
        >
            Top Rated Restaurants
            </button>
    </div>
    <div className="res-container">
      {ListofRestaurants.map((restaurant) =>{
        return (
  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        )
      }
      )}
    
    
    
    
    </div>
    </div>
      );
   };

   export default Body;
