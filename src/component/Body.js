
import RestaurantCard from "./RestaurantCard";
import{useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  // Local State Variable= super powerful variable
  const [ListofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
   // Log the structure of json.data.cards
    setListofRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // Conditional Rendering
  if(ListofRestaurants.length === 0){
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4
            )
            setListofRestaurants(filteredList)
            // console.log("Button Clicked")
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
       

        {ListofRestaurants?.map((restaurant) => (
        
          
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
    ))}
      
      </div>
    </div>
  )
};

export default Body;
