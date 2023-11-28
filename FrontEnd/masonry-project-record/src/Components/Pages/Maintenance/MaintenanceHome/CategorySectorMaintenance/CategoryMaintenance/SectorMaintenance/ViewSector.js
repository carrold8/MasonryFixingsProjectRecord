import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";


export default function ViewSector({sector, getSectorData}){

    const [editing, setEditing] = useState(false);
    const [sectorName, setSectorName] = useState(sector.name);

    const editSector = () => {

        const putJSON = {
            name: sectorName
        }

        MaintenanceAPIs.PutSector(sector.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getSectorData();
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const handleCancel = () => {
        setEditing(false);
        setSectorName(sector.name);
    }

    if(editing){
        return(
            <tr>
                <td>
                    <input value={sectorName} onChange={(e) => setSectorName(e.target.value)}/>
                </td>
                <td>
                    <button onClick={() => handleCancel()}>Cancel</button>
                </td>
                <td>
                    <button onClick={() => editSector()}>Save</button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{sector.name}</td>
                <td>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </td>
            </tr>
        )
    }

}