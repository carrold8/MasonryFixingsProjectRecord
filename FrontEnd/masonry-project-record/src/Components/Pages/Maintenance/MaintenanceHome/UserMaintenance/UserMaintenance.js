import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser/CreateUser";
import LookupAPIs from "../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Table, Card, Row, Col} from "react-bootstrap";
import ViewUser from "./ViewUser";
import { MdAddCircle } from "react-icons/md";
import './UserMaintenance.css';
import { useNavigate } from "react-router-dom";
import UserPasswordChange from "./UserPasswordChange/UserPasswordChange";

export default function UserMaintenance(){

    const navigate = useNavigate();

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addUser, setAddUser] = useState(false);

    const ColumnHeaders = ['First', 'Last', 'Username', 'Email', 'Role'];

    const thData = () => {
        return ColumnHeaders.map((header, index) => {
            return(<th key={index}>{header}</th>)
        })
    }

    const getUserData = () => {

        LookupAPIs.GetUsers()
        .then((response) => {
            if(response.status === 200){
                setUserData(response.data);
                setLoading(false);
            }
        })
        .catch((err) => {
            console.log(err)
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
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
                <Card>
                    <Card.Header>
                        <Row>
                            <Col >
                                <strong>User Maintenance</strong>
                            </Col>
                            <Col align={'end'}>
                                <span onClick={() => setAddUser(!addUser)}><MdAddCircle/></span>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>

                    {addUser && <CreateUser handleAddUser={handleAddUser} />}

                    {userData.length === 0 ?
                    <div>No Users</div>
                    :
                    <Table striped hover responsive className="user-table">
                        <thead>
                            <tr>
                                {thData()}
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user) => {
                                return(
                                    <ViewUser key={user.id} user={user} getUserData={getUserData}/>
                                )
                            }) }  
                        </tbody>
                    </Table>
                }

                    <UserPasswordChange/>
                    </Card.Body>
                </Card>
                

                
            </div>
        )
    }
}