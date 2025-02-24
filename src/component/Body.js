
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body =() => {
    return(
  <div className ="body">
    <div className="filter">
        <button className ="filter-btn" onClick={()=>{
            console.log("Button Clicked");
        }}
        >
            Top Rated Restaurants</button>
    </div>
    <div className="res-container">
      {resList.map((List) =>{
        return (
  <RestaurantCard key={List.info.id} resData={List}/>
        )
      }
      )}
    
    
    
    
    </div>
    </div>
      );
   };

   export default Body;