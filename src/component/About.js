import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }
render () {
    console.log ("Parent Render");
        return (
            <div>
            <h1>About Class Component </h1>
            <h2> This is Food Hub application</h2>
           
            <UserClass  name ={"Shashank Raj ( class)"} location={"Dehradun Class"}/>
            </div>
        );
        }
}


    export default About;