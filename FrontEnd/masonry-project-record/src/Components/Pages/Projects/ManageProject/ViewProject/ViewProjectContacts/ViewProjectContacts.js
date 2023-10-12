import React from "react";
import './ViewProjectContacts.css';
import ViewProjectContractor from "./ViewProjectContractor/ViewProjectContractor";
import ViewProjectEngineer from "./ViewProjectEngineer/ViewProjectEngineer";
import ViewProjectArchitect from "./ViewProjectArchitect/ViewProjectArchitect";

export default function ViewProjectContacts({projectInfo}){



    return(
        <div className="view-project-contacts-container">
            <h3>Contacts</h3>
            
            <div>
                <ViewProjectContractor projectInfo={projectInfo} />
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                
                <ViewProjectEngineer projectInfo={projectInfo} />
                <ViewProjectArchitect projectInfo={projectInfo} />
            </div>
        </div>
    )
}