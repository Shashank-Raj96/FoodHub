import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";

const ItemList =({items, dummy }) => {

   const dispatch = useDispatch();

   const handleAddItem = () => {
    // Dispatch an action
    dispatch(addItem("pizzas"));
   };


    return (
        <div>
            {items.map((items=>
                 <div
                  key={items.card.info.id}
                  className="p-2 m-2 border-l-gray-200 border-b-2 text-left flex justify-between"
                  >
                   
                  <div className="w-9/12">
                    <div className="py-2">
                        <span>{items.card.info.name}</span>
                        <span>
                           - ₹
                            {items.card.info.price 
                            ? items.card.info.price/100 
                            : items.card.info.defaultPrice/100}
                        </span>
                        </div>
                        <p className="text-xs">{items.card.info.description}</p>
                        </div>

                        <div className="w-3/12 p-4">
                            <div className="absolute">
                               <button className="p-2 mx-6 rounded-lg bg-black text-white shadow-lg " 
                                onClick ={handleAddItem}
                                >
                                Add +
                                </button>
                             </div>
                         <img src={CDN_URL + items.card.info.imageId} className="w-full" />
                       </div>
                      
                     </div>
                 ))}
        </div>
    );
};

export default ItemList;