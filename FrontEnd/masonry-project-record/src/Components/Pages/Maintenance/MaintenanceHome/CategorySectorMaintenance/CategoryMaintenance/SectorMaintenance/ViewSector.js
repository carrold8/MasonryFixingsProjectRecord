import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../../../MasonyFixingsAPIs/ApiResponseHandler";


export default function ViewSector({sector, getSectorData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [sectorName, setSectorName] = useState(sector.name);

    const editSector = () => {

        setSending(true);
        const putJSON = {
            name: sectorName
        }

        MaintenanceAPIs.PutSector(sector.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getSectorData(sector.category_id);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }


    const handleCancel = () => {
        setEditing(false);
        setSectorName(sector.name);
    }

    const deleteSector = () => {
        setSending(true);
        MaintenanceAPIs.DeleteSector(sector.id)
        .then((response) => {
            if(response.status === 200){
                getSectorData(sector.category_id);
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to permanently delete ' + sector.name + 'from the system?')){
            deleteSector();
        }
    }
    if(editing){
        return(
            <tr>
                <td>
                    <input value={sectorName} onChange={(e) => setSectorName(e.target.value)}/>
                </td>
                <td>
                    <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                </td>
                <td>
                    <button disabled={sending} onClick={() => editSector()}><FaSave/></button>
                </td>
            </tr>
        )
    }
    else{
        return(
            <tr>
                <td>{sector.name}</td>
                <td>
                    <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button>
                </td>
                <td>
                <button disabled={sending} onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }

}