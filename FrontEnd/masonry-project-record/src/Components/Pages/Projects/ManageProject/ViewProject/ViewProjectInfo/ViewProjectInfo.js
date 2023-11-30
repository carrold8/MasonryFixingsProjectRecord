import React, { useState, useEffect } from "react";
import './ViewProjectInfo.css'
import DropDown from "../../../../../DropDown/DropDown";
import { Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

export default function ViewProjectInfo({projectID}){

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
    

    // const handleLoaded = (projectTitleData) => {
    //     setProjTitleData(projectTitleData);
    //     setTitle(projectTitleData.name);
    //     setCisID(projectTitleData.cis_id);
    //     setApplicant(projectTitleData.applicant);
    //     setCatID(projectTitleData.cate);
    //     setSectorID(projectTitleData.sector_id);
    //     setDesc(projectTitleData.building_description);
    //     setFootprint(projectTitleData.footprint);
        
    //     setLoading(false);
    //     setEditing(false);
    // }

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
        getProjectTitleInfo(projectID)
    }, [projectID])

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
                            <span onClick={() => handleEdit(projectID)}><FaSave/></span>
                        </>
                        :
                        <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                    }
                </div>
                
                {editing ? 
                    <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
                    :
                    <h1>{title}</h1>
                }
                

                <div className="view-project-info-details">
                <div className="detail">
                    <strong>CIS ID</strong> 
                    <div>
                        {editing ? 
                            <Form.Control value={cisID} onChange={(e) => setCisID(e.target.value)}/>
                            :
                            cisID
                        }   
                    </div>
                </div>
                <div className="detail">
                    <strong>Applicant</strong> 
                    <div>
                        {editing ? 
                            <Form.Control value={applicant} onChange={(e) => setApplicant(e.target.value)}/>
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
                        />
                    </div>
                </div>
                

                <div className="detail">
                    <strong>Building Description</strong>
                    <div>
                        {editing ? 
                            <Form.Control value={desc} onChange={(e) => setDesc(e.target.value)} />
                            :
                            desc
                        }
                    </div>
                </div>

                <div className="detail">
                    <strong>Footprint</strong> 
                    <div>
                        {editing ? 
                            <Form.Control value={footprint} onChange={(e) => setFootprint(e.target.value)} />
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
