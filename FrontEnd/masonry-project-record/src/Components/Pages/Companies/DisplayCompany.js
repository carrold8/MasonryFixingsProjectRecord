import React, { useState } from "react";
import DisplayEmployees from "./Employees/DisplayEmployees";
import { FiChevronDown} from 'react-icons/fi';

function DisplayCompany({CompanyData}){

    const [showDetails, setShowDetails] = useState(false);

    const DisplayHeadOffice = () => {
        return(
            <div className="head-office-container">
                <div align='right'><span>Edit</span></div>
                <div><label>Line 1:</label> <div>{CompanyData.head_office.address.line1}</div></div>
                <div><label>Line 2:</label> <div>{CompanyData.head_office.address.line2}</div></div>
            
                <div className="head-office-address">
                    
                    <div><label>City:</label> {CompanyData.head_office.address.city}</div>
                    <div><label>County:</label> {CompanyData.head_office.address.county.county}</div>
                    <div><label>Country:</label> {CompanyData.head_office.address.country.country}</div>
                    <div><label>Phone</label> {CompanyData.head_office.phone}</div>
                </div>
            </div>
        )
    }

    return(
        <div className="company-card">
            <div className="component-card-title">
                <h2>{CompanyData.name}</h2>
                <div>{CompanyData.company_type.name}</div>
                <div><FiChevronDown onClick={() => setShowDetails(!showDetails)} /></div>
            </div>
            
            <div className={showDetails ? 'company-details active' : 'company-details'}>
                <hr/>
                <DisplayHeadOffice/>    
                <DisplayEmployees CompanyID={CompanyData.id} />
            </div>
            
        </div>
    )

}
export default DisplayCompany;