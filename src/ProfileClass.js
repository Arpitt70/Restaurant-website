import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0 ,
            count2: 0
        }        
        
    }
    render(){
        const{count} = this.state;     
        return (
        <div>
           <h2>This is profile page </h2>
           <h2>{this.props.name}</h2>
    </div>
    )

    }
}
console.log(Profile);
export default Profile;
