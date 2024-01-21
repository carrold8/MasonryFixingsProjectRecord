import React, { useState } from "react";
import DropDown from "../../DropDown/DropDown";
import { Form, Row, Col } from "react-bootstrap";
import CompanyAPIs from "../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import { useNavigate } from "react-router-dom";

export default function CreateCompany({handleCancel, handleAddNew}){

    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [name, setName] = useState('');
    // const [companyTypeID, setComanyTypeID] = useState(1);

    const [phone, setPhone] = useState('');
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [city, setCity] = useState('');
    const [countyID, setCountyID] = useState(0);
    const [countryID, setCountryID] = useState(0);


    const AddNewCompany = (e) => {

        e.preventDefault();
        e.stopPropagation();
        
        setSending(true);
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
            company_type_id: 1,
            head_office: headOffice
        }

        CompanyAPIs.PostCompany(postJSON)
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                handleAddNew();
                setSending(false);
            }
        })
        .catch((err) => {
            console.log(err)
            setSending(false);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
                else{
                    window.alert(err.response.data.message)
                }
            }
        })
    }


    return(
        <form onSubmit={AddNewCompany}>
            <Row>
                <Col>
                    <button type="button" onClick={() => handleCancel()}>Cancel</button>
                </Col>
                <Col align='end'>
                    <button disabled={sending} type="submit">{sending?'Creating...':'Create'}</button>
                </Col>
            </Row>
            
            <h4>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Name</Form.Label>
                <Col>
                    <Form.Control size='sm' onChange={(e) => setName(e.target.value)} required value={name} />
                </Col>
            </Form.Group>
            </h4>
            

            <h4>Head Office:</h4>

            <Form.Group as={Row}>
                <Form.Label column sm={3}>Phone</Form.Label>
                <Col>
                    <Form.Control size='sm' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Col>
            </Form.Group>
        
            
            
            <h5>Address</h5>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Line 1</Form.Label>
                    <Col>
                        <Form.Control size='sm' required value={line1} onChange={(e) => setLine1(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Line 2</Form.Label>
                    <Col>
                        <Form.Control required value={line2} onChange={(e) => setLine2(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>City</Form.Label>
                    <Col>
                        <Form.Control size='sm' required value={city} onChange={(e) => setCity(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>County</Form.Label>
                    <Col>
                        <DropDown.County size='sm' required value={countyID} onChange={(e) => setCountyID(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Country</Form.Label>
                    <Col>
                        <DropDown.Country size='sm' required value={countryID} onChange={(e) => setCountryID(e.target.value)} />
                    </Col>
                </Form.Group>
    

            
        </form>
    )

}