import React, { useState } from "react";
import './ViewProjectMaterials.css';
import DropDown from "../../../../../DropDown/DropDown";

export default function ViewProjectMaterials({projectInfo}){

    const [editing, setEditing] = useState(false);
    const [showMaterials, setShowMaterials] = useState(false);

    const [frameMat, setFrameMat] = useState(projectInfo.frame_material_id);
    const [floorMat, setFloorMat] = useState(projectInfo.floor_material_id);
    const [envelopeMat, setEnvMat] = useState(projectInfo.envelope_material_id);
    const [roofMat, setRoofMat] = useState(projectInfo.roof_material_id);
    const [partitioningMat, setPartitionMat] = useState(projectInfo.partitioning_material_id);

    return(
        <div className="view-project-info-materials-container">
            <div>
                <h3>Materials </h3>
                <span onClick={() => setShowMaterials(!showMaterials)}>chevron</span>
            </div>
            <div className={showMaterials ? "view-project-info-materials active" : "view-project-info-materials"}>
                {/* <span onClick={() => setEditing(!editing)}>Edit</span> */}
                <div className="material">
                    <strong>Frame:</strong> 
                    <span>
                        <DropDown.FrameMaterial 
                            value={frameMat} 
                            onChange={(e) => setFrameMat(e.target.value)} 
                            disabled={!editing} 
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
                        />
                    </span>
                </div>
            </div>
        </div>
    )


}