import React, {useState} from "react";
import MaintenanceAPIs from "../../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function ViewSector({sector, getSectorData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [sectorName, setSectorName] = useState(sector.name);

    const editSector = () => {

        const putJSON = {
            name: sectorName
        }

        MaintenanceAPIs.PutSector(sector.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getSectorData(sector.id);
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