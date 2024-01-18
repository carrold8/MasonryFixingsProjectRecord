import React from "react";
import UserAccountInfo from "./UserAccountInfo/UserAccountInfo";
import UserAccountPassword from "./UserAccountPassword/UserAccountPassword";
import './UserAccount.css'

export default function UserAccount(){

    return(
        <div className="user-account">
            <h1>My Account</h1>
            <UserAccountInfo/>
            <UserAccountPassword/>
        </div>
    )
}