import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../../utils/UserContext";
class About extends Component {
    constructor(props){
        super(props);
    //    console.log("Parent Constructor")
    }

    componentDidMount (){
       // console.log ("Parent Component Did Mount")
     // Api call
    }

    render () {
     // console.log ("Parent Render");
        return (
            <div>
            <h1>About Class Component </h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                   {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>} 
                </UserContext.Consumer>
            </div>
            <h2> This is Food Hub application</h2>
            <UserClass  name ={"Shashank Raj ( class)"} location={"Dehradun Class"}/>
            

            </div>
        );
        }
       
    }

    export default About;