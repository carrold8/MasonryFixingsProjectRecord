import React, { useState } from "react";
import CompanyAPIs from "../../../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import { useNavigate } from "react-router-dom";

function CreateEmployee({companyID, handleAddNew}){
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const addNewEmployee = () => {
        
        const postJSON = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            employee_type_id: 1
        }

        if(
            firstName !== '' &&
            lastName !== '' &&
            phone !== ''
        ){
            CompanyAPIs.PostCompanyEmployee(companyID, postJSON)
            .then((response) => {
                if(response.status === 200){
                    handleAddNew()
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
        
            <td><input onChange={(e) => setFirstName(e.target.value)} required value={firstName} /></td>
            <td><input onChange={(e) => setLastName(e.target.value)} required value={lastName} /></td>
            <td><input onChange={(e) => setPhone(e.target.value)} required value={phone} /></td>
            <td><button onClick={() => addNewEmployee()}>Create</button></td>
        </tr>
    )
}
export default CreateEmployee;