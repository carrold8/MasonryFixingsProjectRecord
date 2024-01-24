import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectAPIs from "../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import ApiResponseHandler from "../../../../../../MasonyFixingsAPIs/ApiResponseHandler";
import { Form, Col, Row } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import DropDown from "../../../../../DropDown/DropDown";

export default function ViewProjectAddress(){

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);

    const [addressData, setAddressData] = useState();
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [city, setCity] = useState('');
    const [countyID, setCountyID] = useState('');
    const [countryID, setCountryID] = useState('');


    const getProjectAddress = (projectID) => {
        ProjectAPIs.GetProjectAddress(projectID)
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
            ApiResponseHandler(err.response, navigate);
        })
    }


    const editProjectAddress = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Submitting address');
        setSending(true);

        const putJSON = {
            line1: line1,
            line2: line2,
            city: city,
            county_id: countyID,
            country_id: countryID
        }

        ProjectAPIs.PutProjectAddress(addressData.id, putJSON)
        .then((response) => {
            if(response.status === 200){
                getProjectAddress(params.ProjectID);
                setEditing(false);
                setSending(false);
            }
        })
        .catch((err) =>{
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const handleCancel = () => {
        setLine1(addressData.line1);
        setLine2(addressData.line2);
        setCity(addressData.city);
        setCountyID(addressData.county_id);
        setCountryID(addressData.country_id);
        setEditing(false);
    }

    useEffect(() => {
        getProjectAddress(params.ProjectID);
        console.log('running')
    }, [params.ProjectID])

    if(loading){
        return(
            <div>Loading Address...</div>
        )
    }

    else{
        return(
            <div className="view-project-info-container">
                <h4>Address:</h4>
                <Form onSubmit={editProjectAddress}>
                <div align='end'>
                    {editing ? 
                        <>
                            <button  type={"submit"} disabled={sending}><FaSave/></button>
                            <button type="button" disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                        </>
                        :
                        <>
                            <button disabled={true} type={"submit"} onClick={() => setEditing(true)}><FaSave/></button>
                            <button type={"button"} onClick={() => setEditing(true)}><AiFillEdit/></button>
                        </>
                    }
                </div>
                <Row>
                    <Col>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Line 1:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control required disabled={!editing} value={line1} onChange={(e) => setLine1(e.target.value)} />
                                </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Line 2:</Form.Label>
                            <Col sm={8}>
                                <Form.Control required disabled={!editing} value={line2} onChange={(e) => setLine2(e.target.value)} />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>City:</Form.Label>
                            <Col sm={8}>
                                <Form.Control required disabled={!editing} value={city} onChange={(e) => setCity(e.target.value)} />
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>County:</Form.Label>
                            <Col sm={8}>
                                <DropDown.County required disabled={!editing} value={countyID} onChange={(e) => setCountyID(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={3}>Country:</Form.Label>
                            <Col sm={8}>
                                <DropDown.Country required disabled={!editing} value={countryID} onChange={(e) => setCountryID(e.target.value)} />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                    
                        
                </Form>
            </div>
        )
    }
}