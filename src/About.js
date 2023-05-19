import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <>
        <ProfileClass name={"Arpit"}/>
       <div>This is About Page</div>
       <h1>Namaste React</h1>     
        </>
    )
}

export default About;