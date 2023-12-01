import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import DropDown from "../../../../../../DropDown/DropDown";
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

export default function AddInduction({projectID, handleAddNew}){

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
                console.log(err);
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