import React, { useState } from "react";
import DisplayEmployees from "./Employees/DisplayEmployees";
import { FiChevronDown, FiChevronUp} from 'react-icons/fi';
import axios from "axios";
import DropDown from "../../DropDown/DropDown";
import { Button, Form } from "react-bootstrap";

function DisplayCompany({CompanyData, getCompany}){

    const [showDetails, setShowDetails] = useState(false);
    const [edit, setEdit] = useState(false);


    const [companyName, setCompanyName] = useState(CompanyData.name);
    const [companyTypeID, setCompanyTypeID] = useState(CompanyData.company_type.id);

    const [phone, setPhone] = useState(CompanyData.head_office.phone)
    const [line1, setLine1] = useState(CompanyData.head_office.address.line1)
    const [line2, setLine2] = useState(CompanyData.head_office.address.line2)
    const [city, setCity] = useState(CompanyData.head_office.address.city)
    const [countyID, setCountyID] = useState(CompanyData.head_office.address.county.id)
    const [countryID, setCountryID] = useState(CompanyData.head_office.address.country.id)


    const updateCompany = (e) => {
        
        e.preventDefault();
        e.stopPropagation();

        const postJSON = {
            id: CompanyData.id,
            name: companyName,
            company_type_id: companyTypeID,
            head_office: {
                id: CompanyData.head_office.id,
                phone: phone,
                address: {
                    id: CompanyData.head_office.address.id,
                    line1: line1,
                    line2: line2,
                    city: city,
                    county_id: countyID,
                    country_id: countryID
                }
            }
        }
        axios.put(
            'http://localhost:8080/company/' + CompanyData.id,
            postJSON,
        )
        .then((response) => {
            setEdit(false);
            getCompany();
        }) 
        .catch((err) => {
            console.log((err))
        })

    }

    return(
        <div className="company-card">
            
            
            <div className="component-card-title">
                <h2>{edit ? <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} /> : CompanyData.name}</h2>
                <div>{edit ? <DropDown.CompanyType value={companyTypeID} onChange={(e) => setCompanyTypeID(e.target.value)} /> : CompanyData.company_type.name}</div>
                <div>{showDetails ? <FiChevronUp onClick={() => setShowDetails(!showDetails)} /> : <FiChevronDown onClick={() => setShowDetails(!showDetails)} />}</div>
            </div>
            
            <div className={showDetails ? 'company-details active' : 'company-details'}>
                <hr/>


                <Form onSubmit={updateCompany}>

                <div className="head-office-container">
                    <div align='right'><span onClick={() => setEdit(!edit)}>Edit</span></div>
                    <div>
                        <label>Line 1:</label>
                        {
                            edit ? <div><Form.Control value={line1} onChange={(e) => setLine1(e.target.value)} /></div>
                            : <div>{CompanyData.head_office.address.line1}</div>
                        } 
                    </div>
                    <div>
                        <label>Line 2:</label>
                        {
                            edit ? <div><Form.Control value={line2} onChange={(e) => setLine2(e.target.value)} /></div>
                            : <div>{CompanyData.head_office.address.line2}</div>
                        } 
                    </div>
            
                    <div className="head-office-address">
                        
                        <div>
                            <label>City:</label> {edit ? <Form.Control required value={city} onChange={(e) => setCity(e.target.value)}/> : CompanyData.head_office.address.city}
                        </div>
                        <div>
                            <label>County:</label> {edit ? <DropDown.County required size='sm' value={countyID} onChange={(e) => setCountyID(e.target.value)} /> : CompanyData.head_office.address.county.county}
                        </div>
                        <div>
                            <label>Country:</label> {edit ? <DropDown.Country required size='sm' value={countryID} onChange={(e) => setCountryID(e.target.value)} /> : CompanyData.head_office.address.country.country}
                        </div>
                        <div>
                            <label>Phone:</label> {edit ? <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)}/> : CompanyData.head_office.phone}
                        </div>
                    </div>
                {edit && <Button size="sm" type="submit">Save Changes</Button>}
                
              
                </div>
                </Form>

                <DisplayEmployees CompanyID={CompanyData.id} />                
            </div>
         
            
            
        </div>
    )

}
export default DisplayCompany;