import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <h2> This is Food Hub application</h2>
        <User name = {"Shashank Raj (Function)"}/>
        <UserClass  name ={"Shashank Raj ( class)"} location={"Dehradun Class"}/>
        </div>
    );
    };

    export default About;