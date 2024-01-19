import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function ViewCompanyType({companyType, getCompanyTypeData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [companyTypeName, setCompanyTypeName] = useState(companyType.name);

    const editCompanyType = () => {

        const putJSON = {
            name: companyTypeName
        }

        MaintenanceAPIs.PutCompanyType(companyType.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getCompanyTypeData();
                setEditing(false);
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


    const handleCancel = () => {
        setEditing(false);
        setCompanyTypeName(companyType.name);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={companyTypeName} onChange={(e) => setCompanyTypeName(e.target.value)}/>
                </td>
                <td>
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editCompanyType()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{companyType.name}</td>
            <td>
                <span onClick={() => setEditing(true)}><AiFillEdit/></span>
            </td>
        </tr>
    )

}