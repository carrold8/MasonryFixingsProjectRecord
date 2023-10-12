import React from "react";
import './ViewProjectInfo.css'

export default function ViewProjectInfo({projectInfo}){

    
    const fakeCatergories = ['Hospitality', 'Residential'];
    const fakeSecotrs = ['Restaurants', 'Apartments'];

    const fakeFrame = ['', 'Steel'];
    const fakeFloor = ['', 'Concrete'];
    const fakeEnv = ['', 'Wood'];
    const fakeRoof = ['', 'Slate'];
    const fakePart = ['', 'Fibreglass'];

    return(
        <div className="view-project-info-container">
            <h1>{projectInfo.name}</h1>
            <div>CIS ID: {projectInfo.cis_id}</div>
            <div>Category: {fakeCatergories[projectInfo.category_id]}</div>
            <div>Sector: {fakeSecotrs[projectInfo.sector_id]}</div>

            <h3>Building Description</h3>
            <div>{projectInfo.building_description}</div>

            <div>Footprint: {projectInfo.footprint}m<sup>2</sup></div>

            <h3>Materials:</h3>
            <div className="view-project-info-materials">
                <div className="material">
                    <strong>Frame:</strong> 
                    <span>{fakeFrame[projectInfo.frame_material_id]}</span>
                </div>
                <div className="material">
                    <strong>Floor: </strong>
                    <span>{fakeFloor[projectInfo.floor_material_id]}</span>
                </div>
                <div className="material">
                    <strong>Envelope: </strong>
                    <span>{fakeEnv[projectInfo.envelope_material_id]}</span>
                </div>
                <div className="material">
                    <strong> Roof: </strong>
                    <span>{fakeRoof[projectInfo.roof_material_id]}</span>
                </div>
                <div className="material">
                    <strong>Partitioning: </strong>
                    <span>{fakePart[projectInfo.partitioning_material_id]}</span>
                </div>
            </div>
        </div>
    )
}
