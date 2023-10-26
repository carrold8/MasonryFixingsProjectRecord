import React from "react";
import './ViewProjectInfo.css'

export default function ViewProjectInfo({projectInfo}){

    
    const fakeCatergories = ['Hospitality', 'Residential'];
    const fakeSecotrs = ['Restaurants', 'Apartments'];

    return(
        <div className="view-project-info-container">
            <h1>{projectInfo.name}</h1>

            <div className="view-project-info-details">
            <div className="detail">CIS ID: {projectInfo.cis_id}</div>
            <div className="detail">Category: {fakeCatergories[projectInfo.category_id]}</div>
            <div className="detail">Sector: {fakeSecotrs[projectInfo.sector_id]}</div>
            </div>

            <h3>Building Description</h3>
            <div>{projectInfo.building_description}</div>

            <div>Footprint: {projectInfo.footprint}m<sup>2</sup></div>

            
        </div>
    )
}
