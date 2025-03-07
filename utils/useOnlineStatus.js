import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [OnlineStatus , setOnlineStatus] = useState(true);
    
    //check if online 

    //boolean value

    useEffect(() => {

        window.addEventListener("offline",() => {
            setOnlineStatus(false);
         })
       
        window.addEventListener("online",() => {
           setOnlineStatus(true);
        })
    } , []);

    return OnlineStatus;
}

export default useOnlineStatus; 