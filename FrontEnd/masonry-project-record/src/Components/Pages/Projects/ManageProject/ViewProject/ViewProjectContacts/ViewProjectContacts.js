import React, { useState } from "react";
import './ViewProjectContacts.css';
import ViewProjectContractor from "./ViewProjectContractor/ViewProjectContractor";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ViewProjectEngineer from "./ViewProjectEngineer/ViewProjectEngineer";
import ViewProjectArchitect from "./ViewProjectArchitect/ViewProjectArchitect";

export default function ViewProjectContacts(){

    const [showContacts, setShowContacts] = useState(false);

    return(
        <div className="view-project-contacts-container">
            <div className="title">
                <h3>Contacts</h3>
                <span align='center' onClick={() => setShowContacts(!showContacts)}>
                    {showContacts ? <FaChevronUp/> : <FaChevronDown/>}
                </span>
            </div>
            <div className={showContacts ? 'show-contacts active' : 'show-contacts'}>
                <ViewProjectContractor/>

                <div className="view-smaller-contacts">
                    <div className="smaller-contact"><ViewProjectEngineer/></div>
                    <div className="smaller-contact"><ViewProjectArchitect/> </div>
                </div>
                 
                
            </div>            
        </div>
    )
}