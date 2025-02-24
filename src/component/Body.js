
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body =() => {
    return(
  <div className ="body">
    <div className="search">search</div>
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