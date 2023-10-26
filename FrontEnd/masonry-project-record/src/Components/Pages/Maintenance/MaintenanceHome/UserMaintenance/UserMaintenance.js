import React, { useEffect, useState } from "react";
import axios from 'axios'
import CreateUser from "./CreateUser/CreateUser";

export default function UserMaintenance(){


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addUser, setAddUser] = useState(false);


    const getUserData = () => {

        axios.get('http://localhost:8080/lookup/users')
        .then((response) => {
            if(response.status === 200){
                setUserData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleAddUser = () => {
        setAddUser(false);
        getUserData();
    }

    useEffect(() => {
        getUserData();
    }, []);

    if(loading){
        return(
            <div>Loading Users...</div>
        )
    }
    else{
        return(
            <div>
                <h5>User Maintenacne</h5>
                <span onClick={() => setAddUser(!addUser)}>Add new</span>

                {userData.length === 0 ?
                <div>No Users</div>
                :
                userData.map((user) => {
                    return(
                        <div key={user.id}>{user.name}</div>
                    )
                })    
            }

            {addUser && <CreateUser handleAddUser={handleAddUser} />}


            </div>
        )
    }
}