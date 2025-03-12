
import RestaurantCard from "./RestaurantCard";
import{useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router"
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Body = () => {
  // Local State Variable= super powerful variable
  const [ListofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);
  const [searchText , setsearchText ] = useState("");

//console.log ("Body Rendered ", ListofRestaurants )
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
    setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)

    return(
    <h1>
      Looks like you're offline!! Please check your internet connection
    </h1>
    );

    const { loggedInUser , setUserName} = useContext(UserContext);

  // Conditional Rendering
  if(ListofRestaurants.length === 0){
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input type="text" 
          className="border border-solid border-black" 
           value={searchText } 
           onChange={(e) => {
            setsearchText(e.target.value);
          }} />
          <button className="px-4 py-0.5  bg-green-100 m-4 rounded-lg"
           onClick={() => {
            //Filter the restaurant card and update the UI
            //searchText
            console.log(searchText);

            const filteredRestaurants= ListofRestaurants.filter(
             (res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

           setFilteredRestaurants(filteredRestaurants);

          }}
          >
            Search
            </button>
          </div>
          <div className="m-4 p-0.5 flex items-center ">
          </div>
          <div className="m-4 p-0.5 flex items-center ">
            
            <label>UserName : </label>
            <input
             className="border border-black p-2"
            value={loggedInUser} 
            onChange={(e) => setUserName(e.target.value)}
            />
            </div>
          {/* <button
            className="px-4 py-0.5 bg-gray-50 rounded-lg"
            onClick={() => {
            // Filter Logic Here
            const filteredList = ListofRestaurants.filter(
            (res) => res.info.avgRating > 1
           )
             setListofRestaurants(filteredList)
             // console.log("Button Clicked")
              }}
             >
            Top Rated Restaurants
            </button> */}
          
        
      </div>


      <div className=" flex flex-wrap">  
          {filteredRestaurants?.map((restaurant) => (
        
          <Link 
          key = {restaurant?.info?.id}
          to = {"/restaurants/"+ restaurant?.info?.id}>
            <RestaurantCard  resData={restaurant} />
          </Link>
    ))}
      
      </div>
    </div>
  )
};

export default Body;
