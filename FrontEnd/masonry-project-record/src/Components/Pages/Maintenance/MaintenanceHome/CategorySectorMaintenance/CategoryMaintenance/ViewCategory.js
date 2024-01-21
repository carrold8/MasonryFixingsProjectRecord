import React, { useState } from "react";
import './ViewCategory.css';
import SectorMaintenance from "./SectorMaintenance/SectorMaintenance";
import MaintenanceAPIs from "../../../../../../MasonyFixingsAPIs/MaintenanceAPIs/MaintenanceAPIs";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../../../MasonyFixingsAPIs/ApiResponseHandler";

export default function ViewCategory({category, getCategoryData}){

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [editedName, setEditedName] = useState(category.name);
    const [showSectors, setShowSectors] = useState(false);


    const handleCancel = () => {
        setEditing(false);
        setEditedName(category.name);
    }

    const handleEdited = () => {
        setEditing(false);
        getCategoryData();
        setSending(false);
    }

    const editCategory = () => {
        setSending(true);
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
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })

    }

    const deleteCategory = () => {
        setSending(true);
        MaintenanceAPIs.DeleteCategory(category.id)
        .then((response) => {
            if(response.status === 200){
                getCategoryData();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to permanently delete ' + category.name + ' from the system.')){
            deleteCategory();
        }
    }

    return(
        <div className="category-container">

            {editing ? 
                <div className="body">
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <div><button disabled={sending} onClick={() => editCategory()}><FaSave/></button></div>
                    <div><button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button></div>
                    <div>
                        {showSectors ? 
                            <FaChevronUp onClick={() => setShowSectors(false)}/>
                            : 
                            <FaChevronDown onClick={() => setShowSectors(true)}/>}
                    </div>
                </div>
                :
                <div className="body">
                    <h4>{category.name}</h4>
                    <div> <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button> </div>
                    <div> <button disabled={sending} onClick={() => setEditing(!editing)}><AiFillEdit/></button> </div>
                    <div>
                        {showSectors ? 
                            <FaChevronUp onClick={() => setShowSectors(false)}/>
                            : 
                            <FaChevronDown onClick={() => setShowSectors(true)}/>}
                    </div>
                </div>
            }

            
            
            <div className={showSectors ? "sectors active" : "sectors"}>
                <SectorMaintenance categoryID={category.id} />
            </div>
        </div>
    )

}