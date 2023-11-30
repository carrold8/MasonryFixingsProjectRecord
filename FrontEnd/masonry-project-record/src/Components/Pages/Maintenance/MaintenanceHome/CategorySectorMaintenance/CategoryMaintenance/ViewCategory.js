import React, { useState } from "react";
import './ViewCategory.css';
import SectorMaintenance from "./SectorMaintenance/SectorMaintenance";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

export default function ViewCategory({category, getCategoryData}){

    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(category.name);
    const [showSectors, setShowSectors] = useState(false);


    const handleCancel = () => {
        setEditing(false);
        setEditedName(category.name);
    }

    const handleEdited = () => {
        setEditing(false);
        getCategoryData();
    }

    const editCategory = () => {

        const putJSON = {
            name: editedName
        }
        MaintenanceAPIs.PutCategory(category.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                handleEdited();
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return(
        <div className="category-container">

            {editing ? 
                <div className="body">
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <span onClick={() => handleCancel()}><MdCancel/></span>
                    <span onClick={() => editCategory()}><FaSave/></span>
                </div>
                :
                <div className="body">
                    <h4>{category.name}</h4>
                    <span onClick={() => setEditing(!editing)}><AiFillEdit/></span>
                    <span onClick={() => setShowSectors(!showSectors)}>
                        {showSectors ? <FaChevronUp/> : <FaChevronDown/>}
                    </span>
                </div>
            }

            
            
            <div className={showSectors ? "sectors active" : "sectors"}>
                <SectorMaintenance categoryID={category.id} />
            </div>
        </div>
    )

}