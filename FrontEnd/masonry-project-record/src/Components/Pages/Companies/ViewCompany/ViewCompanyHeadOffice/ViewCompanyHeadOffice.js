import React, { useEffect, useState } from "react";
import CompanyAPIs from "../../../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import AddressAPIs from "../../../../../MasonyFixingsAPIs/AddressAPIs/AddressAPIs";
import DropDown from "../../../../DropDown/DropDown";
import { Form, Row, Col, Card } from "react-bootstrap";
import { FaChevronUp, FaChevronDown, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewCompanyHeadOffice({companyID}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [showHeadOffice, setShowHeadOffice] = useState(false);

    const [headOfficeData, setHeadOfficeData] = useState();
    const [addressData, setAddressData] = useState();
    const [phone, setPhone] = useState();
    const [line1, setLine1] = useState();
    const [line2, setLine2] = useState('');
    const [city, setCity] = useState();
    const [countyID, setCountyID] = useState();
    const [countryID, setCountryID] = useState();

    const getHeadOffice = (compID) => {

        CompanyAPIs.GetCompanyHeadOffice(compID)
        .then((response) => {
            if(response.status === 200){
                setHeadOfficeData(response.data);
                setPhone(response.data.phone);
                AddressAPIs.GetAddress(response.data.address_id)
                .then((response) => {
                    if(response.status === 200){
                        setAddressData(response.data);
                        setLine1(response.data.line1);
                        setLine2(response.data.line2);
                        setCity(response.data.city);
                        setCountyID(response.data.county_id)
                        setCountryID(response.data.country_id)
                        setLoading(false);
                    }
                })
                .catch((err) => {
                    console.log(err)
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
        })
        .catch((err) => {
            console.log(err)
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

    const editHeadOffice = () => {

        setSending(true);
        const putJSON = {
            phone: phone,
            address_id: headOfficeData.address_id,
            line1: line1,
            line2: line2,
            city: city,
            county_id: countyID,
            country_id: countryID
        }

        CompanyAPIs.PutCompanyHeadOffice(companyID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getHeadOffice(companyID);
                setEditing(false);
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

    const handleCancel = () => {
        setPhone(headOfficeData.phone);
        setLine1(addressData.line1);
        setLine2(addressData.line2);
        setCity(addressData.city);
        setCountyID(addressData.county_id);
        setCountryID(addressData.country_id);
        setEditing(false);
    }

    useEffect(() => {
        getHeadOffice(companyID);
    }, [companyID])

    if(loading){
        return(
            <div>Loading Head Office...</div>
        )
    }
    else{
        return(
            
            <div className="company-card"> 

                <div className="component-card-title">
                    <h4>Head Office:</h4>
                    <div>{city}</div>
                    <div>
                        {showHeadOffice ? 
                        <FaChevronUp onClick={() => setShowHeadOffice(!showHeadOffice)} /> 
                        : 
                        <FaChevronDown onClick={() => setShowHeadOffice(!showHeadOffice)} />
                        }
                    </div>
                </div>

                <div className={showHeadOffice ? 'employee-details active' : 'employee-details'}>
                        
                <Card>
                    <Card.Body>
                        <div align='end'>
                        {editing ? 
                            <>
                                <button disabled={sending} onClick={() => editHeadOffice()}><FaSave/></button>
                                <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                            </>
                            :
                            <button onClick={() => setEditing(true)}><AiFillEdit/></button>
                        }
                        </div>
                
                    
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Phone</Form.Label>
                            <Col sm={8}>
                            <Form.Control disabled={!editing} value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Line 1:</Form.Label>
                            <Col sm={8}>
                                <Form.Control disabled={!editing} value={line1} onChange={(e) => setLine1(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Line 2:</Form.Label>
                            <Col sm={8}>
                                <Form.Control disabled={!editing} value={line2} onChange={(e) => setLine2(e.target.value)} />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>City:</Form.Label>
                            <Col sm={8}>
                                <Form.Control disabled={!editing} value={city} onChange={(e) => setCity(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>County:</Form.Label>
                            <Col sm={8}>
                                <DropDown.County disabled={!editing} value={countyID} onChange={(e) => setCountyID(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Country:</Form.Label>
                            <Col sm={8}>
                                <DropDown.Country disabled={!editing} value={countryID} onChange={(e) => setCountryID(e.target.value)} />
                            </Col>
                        </Form.Group>
                    
                    
                    </Card.Body>
                </Card>
                </div>
                
            </div>
        )
    }
}