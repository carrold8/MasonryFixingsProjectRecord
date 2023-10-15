import axios from "axios";
import React, { useState } from "react";
import DropDown from "../../DropDown/DropDown";
import { Form } from "react-bootstrap";

export default function CreateCompany({CompanyData, setCompanyData}){


    const [name, setName] = useState('');
    const [companyTypeID, setComanyTypeID] = useState(0);

    const [phone, setPhone] = useState('');
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [city, setCity] = useState('');
    const [countyID, setCountyID] = useState(0);
    const [countryID, setCountryID] = useState(0);




    const AddNewCompany = (e) => {

        e.preventDefault();
        e.stopPropagation();
        
        const addressJSON = {
            line1: line1,
            line2: line2,
            city: city,
            county_id: countyID,
            country_id: countryID,
        }

        const headOffice = {
            phone: phone,
            address: addressJSON
        }

        const postJSON = {
            name: name,
            company_type_id: companyTypeID,
            head_office: headOffice
        }

        axios.post('http://localhost:8080/company', postJSON)
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                console.log('success');
            }
        })
        .catch((err) => {
            console.log(err);
        })
        

    }


    return(
        <form onSubmit={AddNewCompany}>
            <label>Name:</label>
            <input onChange={(e) => setName(e.target.value)} required value={name} />

            <label>Type:</label>
            <DropDown.CompanyType value={companyTypeID} onChange={(e) => setComanyTypeID(e.target.value)} />

            <label>Head Office:</label>
            <div>Phone:</div>
            <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} />
            
            <h4>Address</h4>
                <hr/>
                <div>Line 1</div>
                <Form.Control required value={line1} onChange={(e) => setLine1(e.target.value)} />

                <div>Line 2</div>
                <Form.Control required value={line2} onChange={(e) => setLine2(e.target.value)} />

                <div>City</div>
                <Form.Control required value={city} onChange={(e) => setCity(e.target.value)} />

                <div>County</div>
                <DropDown.County required value={countyID} onChange={(e) => setCountyID(e.target.value)} />

                <div>County</div>
                <DropDown.Country required value={countryID} onChange={(e) => setCountryID(e.target.value)} />


            <button type="submit">Create</button>
        </form>
    )

}