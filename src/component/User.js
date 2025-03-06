import { useState } from "react";

const User = ( props ) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        //Api Calls
    })

    return(
     <div className="user-card">
        <h1>Count 2 = {count2}</h1>
        <h1>Count = {count}</h1>
        <h2> Name : {props.name} </h2>
        <h3> Location : Hajipur </h3>
    </div>
    );
}

export default User;