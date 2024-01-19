import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import DropDown from "../../../../DropDown/DropDown";
import './CreateProject.css';
import ProjectAPIs from "../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";

export default function CreateProject(){

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cisID, setCisID] = useState('');
    // const [completed, setCompletedID] = useState(false);
    
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [city, setCity] = useState('');
    const [countyID, setCountyID] = useState(0);
    const [countryID, setCountryID] = useState(0);

    const [applicant, setApplicant] = useState('');
    const [architectCompID, setArchitectCompId] = useState(0);
    const [architectID, setArchitectID] = useState(0);
    const [engineerCompID, setEngineerCompID] = useState(0);
    const [engineerID, setEngineerID] = useState(0);
    // const [contactedEng, setContactedEngID] = useState(false);
    const [categoryID, setCategoryID] = useState('');
    const [sectorID, setSectorID] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [inductionReq, setInductReq] = useState(true);
    const [inductionProvided, setInductProv] = useState('');
    const [buildDesc, setBuildDesc] = useState('');
    const [footprint, setFootprint] = useState('');
    const [frameMatID, setFrameMatID] = useState(0);
    const [floorMatID, setFloorMatID] = useState(0);
    const [envelopeMatID, setEnvelopeMatID] = useState(0);
    const [roofMatID, setRoofMatID] = useState(0);
    const [partitioningMatID, setPartitioningMatID] = useState(0);
    const [mainContractorID, setMainContractorID] = useState(0);
    const [accountContactID, setAccountContactID] = useState(0);
    const [foremanID, setForemanID] = useState(0);
    const [safetyOffID, setSafeOffID] = useState(0);
    const [storemanID, setStoremanID] = useState(0);

    // console.log(endDate);
    const [pageIndex, setPageIndex] = useState(0);

    const handleNextPage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(pageIndex < 5){
            setPageIndex(pageIndex+1);
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        e.stopPropagation();

        const addressJSON = {
            line1: line1,
            line2: line2,
            city: city,
            county_id: countyID,
            country_id: countryID,
        }

        const PostJSON = {
            name: name,
            cis_id: cisID,
            completed: false,
            address: addressJSON,
            applicant: applicant,
            architect_company_id: architectCompID,
            architect_id: architectID,
            engineering_company_id: engineerCompID,
            engineer_id: engineerID,
            contacted_engineer: false,
            category_id: categoryID,
            sector_id: sectorID,
            start_date: "2023-01-01",
            end_date: "2024-01-01",
            induction_required: inductionReq,
            induction_provided: inductionProvided,
            building_description: buildDesc,
            footprint: footprint,
            frame_material_id: frameMatID,
            floor_material_id: floorMatID,
            envelope_material_id: envelopeMatID,
            roof_material_id: roofMatID,
            partitioning_material_id: partitioningMatID,
            main_contractor_id: mainContractorID,
            account_contact_id: accountContactID,
            foreman_id: foremanID,
            safety_officer_id: safetyOffID,
            storeman_id: storemanID

        }

        
        ProjectAPIs.PostProject(PostJSON)
        .then((newProject) => {
            if(newProject.status === 200){
            navigate('/project/' + newProject.data.id)
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


    return(
        <div className="create-project">

            <div>
                <Button onClick={() => navigate('/project')}>Back to Projects</Button>
            </div>
            <div align='center'>
                <span>{pageIndex + 1} / 6</span>
            </div>
            

                {pageIndex === 0 &&
                
                <Card>
                    <Card.Header>
                    Basic Information
                    </Card.Header>
                    <Form onSubmit={handleNextPage}>
                    <Card.Body>
                        <Row>
                            <Col sm={8}>
                                <strong>Title</strong>
                                <Form.Control size='sm' required value={name} onChange={(e) => setName(e.target.value)} />
                            </Col>
                            <Col>
                                <strong>CIS ID</strong>
                                <Form.Control size='sm' required value={cisID} onChange={(e) => setCisID(e.target.value)} />
                            </Col>
                        </Row>
                        
                        <strong>Building Description:</strong>
                        <Form.Control size='sm' as="textarea" rows={2}  value={buildDesc} onChange={(e) => setBuildDesc(e.target.value)}/>

                        <Row>
                            <Col>
                                <strong>Applicant</strong>
                                <Form.Control size='sm' required value={applicant} onChange={(e) => setApplicant(e.target.value)} />
                            </Col>
                            <Col>
                                <strong>Footprint {'('}m<sup>2</sup>{')'}</strong>
                                <Form.Control size='sm' required type="number" value={footprint} onChange={(e) => setFootprint(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <strong>Category</strong>
                                <DropDown.Category size='sm' required value={categoryID} onChange={(e) => {
                                        setCategoryID(e.target.value);
                                        setSectorID('');
                                    }} />
                            </Col>
                            <Col>
                                <strong>Sector</strong>
                                <DropDown.CategorySectors 
                                    size='sm'
                                    required 
                                    categoryID={categoryID} 
                                    disabled={categoryID === ''} 
                                    value={sectorID} 
                                    onChange={(e) => setSectorID(e.target.value)} 
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <strong>Start Date</strong>
                                <Form.Control size='sm' required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                            </Col>
                            <Col>
                                <strong>End Date</strong>
                                <Form.Control size='sm' required type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col><button disabled>Back</button></Col>
                            <Col align='end'><button type='submit'>Next</button></Col>
                        </Row>
                    </Card.Body>
                    </Form>

                </Card>
                }
                
                {pageIndex === 1 &&
                <Card>
                    <Card.Header>Address</Card.Header>
                    <Form onSubmit={handleNextPage}>
                    
                    <Card.Body>
                    <strong>Line 1</strong>
                    <Form.Control size='sm' required value={line1} onChange={(e) => setLine1(e.target.value)} />

                    <strong>Line 2</strong>
                    <Form.Control size='sm' value={line2} onChange={(e) => setLine2(e.target.value)} />

                    <strong>City</strong>
                    <Form.Control size='sm' required value={city} onChange={(e) => setCity(e.target.value)} />

                    <strong>County</strong>
                    <DropDown.County size='sm' required value={countyID} onChange={(e) => setCountyID(e.target.value)} />

                    <strong>County</strong>
                    <DropDown.Country size='sm' required value={countryID} onChange={(e) => setCountryID(e.target.value)} />

                  
                    <Row>
                        <Col>
                            <button type='button' onClick={() => setPageIndex(pageIndex-1)}>Back</button>
                        </Col>
                        <Col align='end'>
                            <button type='submit'>Next</button>
                        </Col>
                    </Row>
                        
                        
                    </Card.Body>
                    </Form>
                </Card>
                }

                {pageIndex === 2 &&
                <Card>
                    
                    <Card.Header>Materials</Card.Header>
                    <Form onSubmit={handleNextPage}>
                    <Card.Body>

                        
                    <strong>Frame Material</strong>
                    <DropDown.FrameMaterial size='sm' required value={frameMatID} onChange={(e) => setFrameMatID(e.target.value)} />

                    <strong>Floor Material</strong>
                    <DropDown.FloorMaterial size='sm' required value={floorMatID} onChange={(e) => setFloorMatID(e.target.value)} />

                    <strong>Envelope Material</strong>
                    <DropDown.EnvelopeMaterial size='sm' required value={envelopeMatID} onChange={(e) => setEnvelopeMatID(e.target.value)} />

                    <strong>Roof Material</strong>
                    <DropDown.RoofMaterial size='sm' required value={roofMatID} onChange={(e) => setRoofMatID(e.target.value)} />

                    <strong>Partitioning Material</strong>
                    <DropDown.PartitioningMaterial size='sm' required value={partitioningMatID} onChange={(e) => setPartitioningMatID(e.target.value)} />
                    
                    
                    <Row>
                        <Col>
                            <button type='button' onClick={() => setPageIndex(pageIndex-1)}>Back</button>
                        </Col>
                        <Col align='end'>
                            <button type='submit'>Next</button>
                        </Col>
                    </Row>
                    
                    </Card.Body>
                    </Form>
                </Card>
                }   

                

                
                {pageIndex === 3 &&
                <Card>
                    <Form onSubmit={handleNextPage}>
                        <Card.Header>Induction</Card.Header>
                        <Card.Body>
                            <strong>Required: <input type="checkbox" checked={inductionReq} onChange={(e) => setInductReq(!inductionReq)} /></strong>
                            <div>
                            <strong>Induction Provided on:</strong>
                            <Form.Control size='sm' as="textarea" rows={2}  value={inductionProvided} onChange={(e) => setInductProv(e.target.value)}/>
                            </div>
                            <Row>
                                <Col>
                                    <button type='button' onClick={() => setPageIndex(pageIndex-1)}>Back</button>
                                </Col>
                                <Col align='end'>
                                    <button type='submit'>Next</button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Form>
                </Card>
                }
                
                
                
                

                { pageIndex === 4 &&
                <Card>
                    <Card.Header>Main Contractor</Card.Header>
                    <Form onSubmit={handleNextPage}>
                        <Card.Body>
                        <strong>Company</strong>
                        <DropDown.AllCompanies size='sm' required value={mainContractorID} onChange={(e) => setMainContractorID(e.target.value)} />

                        <strong>Account Contact</strong>
                        <DropDown.CompanyEmployees size='sm' required companyID={mainContractorID} disabled={mainContractorID === 0} value={accountContactID} onChange={(e) => setAccountContactID(e.target.value)} />

                        <strong>Foreman</strong>
                        <DropDown.CompanyEmployees size='sm' required companyID={mainContractorID} disabled={mainContractorID === 0} value={foremanID} onChange={(e) => setForemanID(e.target.value)} />

                        <strong>Safety Officer</strong>
                        <DropDown.CompanyEmployees size='sm' required companyID={mainContractorID} disabled={mainContractorID === 0} value={safetyOffID} onChange={(e) => setSafeOffID(e.target.value)} />

                        <strong>Storeman</strong>
                        <DropDown.CompanyEmployees size='sm' required companyID={mainContractorID} disabled={mainContractorID === 0} value={storemanID} onChange={(e) => setStoremanID(e.target.value)} />
                    
                    <Row>
                        <Col>
                            <button type='button' onClick={() => setPageIndex(pageIndex-1)}>Back</button>
                        </Col>
                        <Col align='end'>
                            <button type='submit'>Next</button>
                        </Col>
                    </Row>
                    
                    
                        </Card.Body>
                    </Form>
                </Card>
                }

                {pageIndex === 5 &&
                <Card>
                    <Card.Header>Contacts</Card.Header>
                    <Form onSubmit={handleSubmit}>
                        <Card.Body>
                            <strong>Architect Company</strong>
                            <DropDown.AllCompanies size='sm' required value={architectCompID} onChange={(e) => setArchitectCompId(e.target.value)} />

                            <strong>Architect</strong>
                            <DropDown.CompanyEmployees size='sm' required companyID={architectCompID} disabled={architectCompID === 0} value={architectID} onChange={(e) => setArchitectID(e.target.value)} />


                            <strong>Engineering Company</strong>
                            <DropDown.AllCompanies size='sm' required value={engineerCompID} onChange={(e) => setEngineerCompID(e.target.value)} />

                            <strong>Engineer</strong>
                            <DropDown.CompanyEmployees size='sm' required companyID={engineerCompID} disabled={engineerCompID === 0} value={engineerID} onChange={(e) => setEngineerID(e.target.value)} />
                            
                            <Row>
                                <Col>
                                    <button type='button' onClick={() => setPageIndex(pageIndex-1)}>Back</button>
                                </Col>
                                <Col align='end'>
                                <button type='submit'>Finish</button>
                                </Col>
                            </Row>
                            

                        </Card.Body>
                    
                    </Form>
                    </Card>
                }

             
            

            
        </div>
    )

}