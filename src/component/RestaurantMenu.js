//import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

   // const [resInfo, setResInfo] = useState(null);
   // const [resMenu, setResMenu] = useState([])

    const { resId } = useParams();
    console.log(resId)

    const resInfo = useRestaurantMenu(resId);
    console.log("15" , resInfo)

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId );
    //     const json = await data.json();
    //    // console.log("16", json.data);
    //     //  console.log("23" , json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.categories?.[0]?.itemsCards);
    //    // console.log("23eeqw", json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
    //     //setResInfo(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     // setResInfo(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info);
    //     setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
    //     setResMenu(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
    //     console.log("29" , resMenu)
    // };

    if (resInfo === null)
        return <Shimmer />;

    const itemInfo = resInfo?.cards?.[2]?.card?.card?.info

   const resMenu = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards
  // console.log( "41" , resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
   //console.log("42" , resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
    
   const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//console.log("categories", categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{itemInfo?.name}</h1>
            <h2 className="font-bold text-lg">{itemInfo?.cuisines?.join(" ")}</h2>
            <h2>{itemInfo?.avgRating}</h2>
            <h2>{itemInfo?.costForTwoMessage}</h2> 

            {/* categories accordiance*/}
            {categories.map((category , index)=> (
                //controlled component
                <RestaurantCategory 
                key={category?.card?.card?.title}
                 data={category?.card?.card}
                 showItems={index ===1 ? true: false}
                 />
               
        ))}

            {/* <ul> 
            {resMenu?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}
         
          </li>
        ))}      
            </ul> */}
        </div>
    );
};

export default RestaurantMenu;