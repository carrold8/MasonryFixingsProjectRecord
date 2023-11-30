import React, { useEffect, useState } from "react";
import './ViewProjectMaterials.css';
import DropDown from "../../../../../DropDown/DropDown";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Form } from "react-bootstrap";

export default function ViewProjectMaterials({projectID}){

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [showMaterials, setShowMaterials] = useState(false);

    const [projMatData, setProjMatData] = useState();
    const [frameMat, setFrameMat] = useState();
    const [floorMat, setFloorMat] = useState();
    const [envelopeMat, setEnvMat] = useState();
    const [partitioningMat, setPartitionMat] = useState();
    const [roofMat, setRoofMat] = useState();
    

    const getProjectMaterials = (projectID) => {

        ProjectAPIs.GetProjectMaterials(projectID)
        .then((response) => {
            if(response.status === 200){
                setProjMatData(response.data);
                setFrameMat(response.data.frame_material_id);
                setFloorMat(response.data.floor_material_id);
                setEnvMat(response.data.envelope_material_id);
                setPartitionMat(response.data.partitioning_material_id);
                setRoofMat(response.data.roof_material_id);

                setLoading(false);
                setEditing(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    const handleEdit = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const putJSON = {
            frame_material_id: frameMat,
            floor_material_id: floorMat,
            envelope_material_id: envelopeMat,
            partitioning_material_id: partitioningMat,
            roof_material_id: roofMat
        }

        ProjectAPIs.PutProjectMaterials(projectID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getProjectMaterials(projectID);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleCancel = () => {
        setFrameMat(projMatData.frame_material_id);
        setFloorMat(projMatData.floor_material_id);
        setEnvMat(projMatData.envelope_material_id);
        setPartitionMat(projMatData.partitioning_material_id);
        setRoofMat(projMatData.roof_material_id);
        setEditing(false);
    }

    useEffect(() => {
        getProjectMaterials(projectID);
    }, [projectID]);

    if(loading){
        return(
            <div className="view-projectmaterials-container">Loading Project Materials...</div>
        )
    }
    else{
        return(
            <div className="view-project-materials-container">
                <div align='end'>
                        {editing ? 
                            <>
                                <span onClick={() => handleCancel()}><MdCancel/></span>
                                <button type={"submit"} ><FaSave/></button>
                            </>
                            :
                            <span onClick={() => setEditing(true)}><AiFillEdit/></span>
                        }
                    </div>
                <div>
                    <h3>Materials </h3>
                    <span onClick={() => setShowMaterials(!showMaterials)}>chevron</span>
                </div>
                <Form onSubmit={handleEdit}>
                <div className={showMaterials ? "view-project-materials active" : "view-project-materials"}>
                {/* <div> */}
                    
                    
                    <div className="material">
                        <strong>Frame:</strong> 
                        <span>
                            <DropDown.FrameMaterial 
                                value={frameMat} 
                                onChange={(e) => setFrameMat(e.target.value)} 
                                disabled={!editing} 
                                required
                            />
                        </span>
                    </div>
                    <div className="material">
                        <strong>Floor: </strong>
                        <span>
                            <DropDown.FloorMaterial 
                                value={floorMat} 
                                onChange={(e) => setFloorMat(e.target.value)} 
                                disabled={!editing} 
                                required
                            />
                        </span>
                    </div>
                    <div className="material">
                        <strong>Envelope: </strong>
                        <span>
                            <DropDown.EnvelopeMaterial 
                                value={envelopeMat} 
                                onChange={(e) => setEnvMat(e.target.value)} 
                                disabled={!editing} 
                                required
                            />
                        </span>
                    </div>
                    <div className="material">
                        <strong> Roof: </strong>
                        <span>
                            <DropDown.RoofMaterial 
                                value={roofMat} 
                                onChange={(e) => setRoofMat(e.target.value)} 
                                disabled={!editing} 
                                required
                            />
                        </span>
                    </div>
                    <div className="material">
                        <strong>Partitioning: </strong>
                        <span>
                            <DropDown.PartitioningMaterial 
                                value={partitioningMat} 
                                onChange={(e) => setPartitionMat(e.target.value)} 
                                disabled={!editing} 
                                required
                            />
                        </span>
                    </div>
                    
                </div>
                </Form>
            </div>
        )
    }
    


}