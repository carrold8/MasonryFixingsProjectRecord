import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


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
                getSectorData(sector.id);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) => {
            console.log(err)
            setSending(false);
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
        setSectorName(sector.name);
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
                    <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                </td>
            </tr>
        )
    }

}