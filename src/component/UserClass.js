import React from "react";

class UserClass extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            userInfo: {
                name:"Dumey",
                location:"Default",
                //avatar_url:"http://dummy-photo.com"
            },
        };
       // console.log (this.props.name + "Child Constructor")
    }

       async componentDidMount (){
      //  console.log (this.props.name + "Child Component Did Mount")
      // API CALL 

      const data = await fetch ("https://api.github.com/users/Shashank-Raj96");
      const json =  await data.json();

      this.setState({
        userInfo:json,
      })

   //  console.log(json);
    }
  componentDidUpdate(){
  // console.log("Component Did Update"); 
  }

  componentWillUnmount(){
   // console.log("Componet will Unmount")
  }

    render () {
       // console.log (this.props.name + "Child Render");

       const {name, location , avatar_url}= this.state.userInfo
        return  (
        <div className="user-card">
            <img src={avatar_url}/>
            <h2> Name : {name} </h2>
            <h2> Location : {location} </h2>
        </div>
        );
    }
}

export default UserClass;


/**
 * ----Mounting Lifecycle----
 * 
 * Constructor
 * Render(dummy)
 * <HTML Dummy >
 * Component Did Mount 
 * < API Call>
 * <this.setStates> - state variable is updated
 * 
 * --- Update Cycle----
 * 
 * render (API data)
 * <HTML(new API data)>
 * ComponentDidUpdate
 * 
 */