import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([])
    const { resId } = useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId + "&submitAction=ENTER");


        const json = await data.json();
       // console.log("16", json.data);
        //  console.log("23" , json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.categories?.[0]?.itemsCards);
       // console.log("23eeqw", json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
        //setResInfo(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setResInfo(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info);
        setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
        setResMenu(json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
        console.log("29" , resMenu)
    };

    if (resInfo === null)
        return <Shimmer />;

    

    
    return (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>{resInfo?.cuisines?.join(" ")}</h2>
            <h2>{resInfo?.avgRating}</h2>
            <h2>{resInfo?.costForTwoMessage}</h2>
          
            
            <ul>
          
            {resMenu?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}
         
          </li>
        ))}
                 
                <li>Biryani</li>
                <li>Diet Coke</li>
                <li>Cake</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;