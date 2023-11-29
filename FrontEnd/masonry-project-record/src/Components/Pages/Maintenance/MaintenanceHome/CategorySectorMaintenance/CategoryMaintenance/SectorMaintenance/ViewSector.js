import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";


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
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                </td>
                <td>
                    <span onClick={() => editSector()}><FaSave/></span>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{sector.name}</td>
                <td>
                    <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                </td>
            </tr>
        )
    }

}