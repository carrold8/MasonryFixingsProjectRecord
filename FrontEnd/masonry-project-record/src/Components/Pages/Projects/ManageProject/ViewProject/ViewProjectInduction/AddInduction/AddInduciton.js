import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import DropDown from "../../../../../../DropDown/DropDown";
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { useNavigate } from "react-router-dom";

export default function AddInduction({projectID, handleAddNew}){

    const navigate = useNavigate();
    const [userID, setUserID] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        // e.stopPropagation();
        // e.preventDefault();

        const postJSON = {
            user_id: userID,
            date: date,
        }

        if(userID !== '' && date !== ''){
            ProjectAPIs.PostProjectInduction(projectID, postJSON)
            .then((response) => {
                if(response.status ===200){
                    handleAddNew();
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

        
    }

    return(
            <tr>
                <td>
                <DropDown.Users required value={userID} onChange={(e) => setUserID(e.target.value)} />
                </td>
                <td>
                    <Form.Control required type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                </td>
                <td>
                    <Button onClick={() => handleSubmit()}>Add</Button>
                </td>

            </tr>
    )

}