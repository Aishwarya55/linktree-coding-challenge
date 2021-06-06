import React, { Component } from 'react'
import linksData from "./../../../mock-data"
import LinkList from "../../link-list"
import "./profile.css"
class Profile extends Component{

    state = {
        data: [...linksData]
    }
    render(){

        //TODO: User profile name must be stored in state and change dynamically
        return <>
        <div className="profileContainer">
            <div className="userContainer">
            <img alt="profilepic" src="https://cdn.dribbble.com/users/1653122/avatars/small/2c66c35c95b63d9391aa6d3aad2402d1.png?1618518626"></img>
            <span className="name">@yourname</span>
            </div>
        <LinkList {...this.state}/>
        </div>
           
        </>
    }

}

export default Profile