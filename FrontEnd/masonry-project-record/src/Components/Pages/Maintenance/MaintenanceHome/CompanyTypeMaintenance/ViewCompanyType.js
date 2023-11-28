import React, { useState }  from "react";
import MaintenanceAPIs from "../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";

export default function ViewCompanyType({companyType, getCompanyTypeData}){

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
            console.log(err);
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
                    <button onClick={() => handleCancel()}>Cancel</button>
                </td>
                <td>
                    <button onClick={() => editCompanyType()}>Save</button>
                </td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{companyType.name}</td>
            <td>
                <button onClick={() => setEditing(true)}>Edit</button>
            </td>
        </tr>
    )

}