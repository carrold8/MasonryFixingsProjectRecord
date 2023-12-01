import React, { useState, useEffect } from "react";
import './ViewProjectInfo.css'
import DropDown from "../../../../../DropDown/DropDown";
import { Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { useParams } from "react-router-dom";

export default function ViewProjectInfo(){

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    const [projTitleData, setProjTitleData] = useState();
    
    const [title, setTitle] = useState();
    const [cisID, setCisID] = useState();
    const [applicant, setApplicant] = useState()
    const [catID, setCatID] = useState();
    const [sectorID, setSectorID] = useState();
    const [desc, setDesc] = useState();
    const [footprint, setFootprint] = useState();
    
    const getProjectTitleInfo = (id) => {

        ProjectAPIs.GetProjectTitleInfo(id)
        .then((response) => {
            if(response.status === 200){
                setProjTitleData(response.data);
                setTitle(response.data.name);
                setCisID(response.data.cis_id);
                setApplicant(response.data.applicant);
                setCatID(response.data.category_id);
                setSectorID(response.data.sector_id);
                setDesc(response.data.building_description);
                setFootprint(response.data.footprint);
        
                setLoading(false);
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleEdit = (projID) => {

        const putJSON = {
            name: title,
            cis_id: cisID,
            applicant: applicant,
            category_id: catID,
            sector_id: sectorID,
            building_description: desc,
            footprint: footprint
        
        }
        if(catID !== '' && sectorID !== ''){
            ProjectAPIs.PutProjectTitleInfo(projID, putJSON)
            .then((response) => {
                if(response.status === 200){
                    getProjectTitleInfo(projID);
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
    }
    const handleCancel = () => {
        setEditing(false);
        setTitle(projTitleData.name);
        setCatID(projTitleData.category_id);
        setSectorID(projTitleData.sector_id);
        setDesc(projTitleData.building_description);
        setFootprint(projTitleData.footprint);
    }

    useEffect(() => {
        getProjectTitleInfo(params.ProjectID)
    }, [params.ProjectID])

    if(loading){
        return(
            <div className="view-project-info-container">Loading Project Title Info...</div>
        )
    }
    else{
        return(
            <div className="view-project-info-container">
                <div align='end'>
                    {editing ? 
                        <>
                            <span onClick={() => handleCancel()}><MdCancel/></span>
                            <span onClick={() => handleEdit(params.ProjectID)}><FaSave/></span>
                        </>
                        :
                        <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                    }
                </div>
                
                {editing ? 
                    <Form.Control size='sm' value={title} onChange={(e) => setTitle(e.target.value)} />
                    :
                    <h1>{title}</h1>
                }
                

                <div className="view-project-info-details">
                <div className="detail">
                    <strong>CIS ID</strong> 
                    <div>
                        {editing ? 
                            <Form.Control size='sm' value={cisID} onChange={(e) => setCisID(e.target.value)}/>
                            :
                            cisID
                        }   
                    </div>
                </div>
                <div className="detail">
                    <strong>Applicant</strong> 
                    <div>
                        {editing ? 
                            <Form.Control size='sm' value={applicant} onChange={(e) => setApplicant(e.target.value)}/>
                            :
                            applicant
                        }   
                    </div>
                </div>
                <div className="detail">
                    <strong>Category</strong> 
                    <div className="dropdown">
                        <DropDown.Category 
                            value={catID} 
                            onChange={(e) => {
                                setCatID(e.target.value)
                                setSectorID('');
                            }} 
                            disabled={!editing}
                            size='sm'
                        />
                    </div>
                </div>
                <div className="detail">
                    <strong>Sector</strong> 
                    <div className="dropdown">
                        <DropDown.CategorySectors 
                            categoryID={catID}
                            value={sectorID}
                            onChange={(e) => setSectorID(e.target.value)} 
                            disabled={!editing}
                            size='sm'
                        />
                    </div>
                </div>
                

                <div className="detail">
                    <strong>Building Description</strong>
                    <div>
                        {editing ? 
                            <Form.Control size='sm' value={desc} onChange={(e) => setDesc(e.target.value)} />
                            :
                            desc
                        }
                    </div>
                </div>

                <div className="detail">
                    <strong>Footprint</strong> 
                    <div>
                        {editing ? 
                            <Form.Control size='sm' value={footprint} onChange={(e) => setFootprint(e.target.value)} />
                            :
                            footprint
                        }
                        m<sup>2</sup></div>
                </div>

                </div>
                

                
            </div>
        )
    }
}
