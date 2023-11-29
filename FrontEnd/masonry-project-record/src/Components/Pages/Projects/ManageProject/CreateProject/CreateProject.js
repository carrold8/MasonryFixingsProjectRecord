import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import DropDown from "../../../../DropDown/DropDown";

export default function CreateProject(){

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
    const [startDate, setStartDate] = useState('2023-10-21');
    const [endDate, setEndDate] = useState('2023-10-21');
    const [inductionReq, setInductReq] = useState(true);
    const [inductionProvided, setInductProv] = useState('');
    const [buildDesc, setBuildDesc] = useState('');
    const [footprint, setFootprint] = useState(0);
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


    const navigate = useNavigate()

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

        axios.post(
            'http://localhost:8080/project',
            PostJSON
        )
        .then((newProject) => {
    
            if(newProject.status === 200){
            console.log('ID: ',newProject.data.id);
            navigate('/project/' + newProject.data.id)
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <div>Name:</div>
                <Form.Control required value={name} onChange={(e) => setName(e.target.value)} />
                <div>CIS ID:</div>
                <Form.Control required value={cisID} onChange={(e) => setCisID(e.target.value)} />

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

                <hr/>

                <div>Applicant</div>
                <Form.Control required value={applicant} onChange={(e) => setApplicant(e.target.value)} />

                <div>Architect Company</div>
                <DropDown.AllCompanies required value={architectCompID} onChange={(e) => setArchitectCompId(e.target.value)} />

                <div>Architect</div>
                <DropDown.CompanyEmployees required companyID={architectCompID} disabled={architectCompID === 0} value={architectID} onChange={(e) => setArchitectID(e.target.value)} />


                <div>Engineering Company</div>
                <DropDown.AllCompanies required value={engineerCompID} onChange={(e) => setEngineerCompID(e.target.value)} />

                <div>Engineer</div>
                <DropDown.CompanyEmployees required companyID={engineerCompID} disabled={engineerCompID === 0} value={engineerID} onChange={(e) => setEngineerID(e.target.value)} />


                <div>Category</div>
                <DropDown.Category required value={categoryID} onChange={(e) => {
                        setCategoryID(e.target.value);
                        setSectorID('');
                    }} />


                <div>Sector</div>
                <DropDown.CategorySectors required categoryID={categoryID} disabled={categoryID === ''} value={sectorID} onChange={(e) => setSectorID(e.target.value)} />
                
                <div>Start Date</div>
                <Form.Control required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

                <div>End Date</div>
                <Form.Control required type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

                <div>Induction Required: <input type="checkbox" checked={inductionReq} onChange={(e) => setInductReq(!inductionReq)} /></div>
                <div>Induction Provided on:</div>
                <Form.Control as="textarea" rows={2}  value={inductionProvided} onChange={(e) => setInductProv(e.target.value)}/>

                <div>Building Description:</div>
                <Form.Control as="textarea" rows={2}  value={buildDesc} onChange={(e) => setBuildDesc(e.target.value)}/>

                <div>Footprint</div>
                <Form.Control required type="number" value={footprint} onChange={(e) => setFootprint(e.target.value)} />


                <div>Frame Material</div>
                <DropDown.FrameMaterial required value={frameMatID} onChange={(e) => setFrameMatID(e.target.value)} />

                <div>Floor Material</div>
                <DropDown.FloorMaterial required value={floorMatID} onChange={(e) => setFloorMatID(e.target.value)} />

                <div>Envelope Material</div>
                <DropDown.EnvelopeMaterial required value={envelopeMatID} onChange={(e) => setEnvelopeMatID(e.target.value)} />

                <div>Roof Material</div>
                <DropDown.RoofMaterial required value={roofMatID} onChange={(e) => setRoofMatID(e.target.value)} />

                <div>Partitioning Material</div>
                <DropDown.PartitioningMaterial required value={partitioningMatID} onChange={(e) => setPartitioningMatID(e.target.value)} />


                <h4>Main Contractor</h4>
                <DropDown.AllCompanies required value={mainContractorID} onChange={(e) => setMainContractorID(e.target.value)} />

                <div>Account Contact</div>
                <DropDown.CompanyEmployees required companyID={mainContractorID} disabled={mainContractorID === 0} value={accountContactID} onChange={(e) => setAccountContactID(e.target.value)} />

                <div>Foreman</div>
                <DropDown.CompanyEmployees required companyID={mainContractorID} disabled={mainContractorID === 0} value={foremanID} onChange={(e) => setForemanID(e.target.value)} />

                <div>Safety Officer</div>
                <DropDown.CompanyEmployees required companyID={mainContractorID} disabled={mainContractorID === 0} value={safetyOffID} onChange={(e) => setSafeOffID(e.target.value)} />

                <div>Storeman</div>
                <DropDown.CompanyEmployees required companyID={mainContractorID} disabled={mainContractorID === 0} value={storemanID} onChange={(e) => setStoremanID(e.target.value)} />


                <Button type="submit" size="sm">Submit</Button>
            </Form>
        </div>
    )

}