import React, { useEffect, useState } from "react";
import CreateUser from "./CreateUser/CreateUser";
import LookupAPIs from "../../../../../MasonyFixingsAPIs/LookupAPIs/LookupAPIs";
import { Table, Card, Row, Col} from "react-bootstrap";
import ViewUser from "./ViewUser";
import { MdAddCircle } from "react-icons/md";

export default function UserMaintenance(){


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addUser, setAddUser] = useState(false);


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
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
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
                    </Card.Body>
                </Card>
                

                
            </div>
        )
    }
}