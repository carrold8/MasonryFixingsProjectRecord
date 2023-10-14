import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function CreateProject(){

    const [name, setName] = useState('');
    const [cisID, setCisID] = useState('');
    const [completed, setCompletedID] = useState(false);
    
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
    const [contactedEng, setContactedEngID] = useState(false);
    const [categoryID, setCategoryID] = useState(0);
    const [sectorID, setSectorID] = useState(0);
    const [startDate, setStartDate] = useState(new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate());
    const [endDate, setEndDate] = useState(new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate());
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

    console.log(endDate);


    const navigate = useNavigate()

    const handleSubmit = (e) => {

        console.log('creating new project')
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
            completed: completed,
            address: addressJSON,
            applicant: applicant,
            architect_company_id: architectCompID,
            architect_id: architectID,
            engineering_company_id: engineerCompID,
            engineer_id: engineerID,
            contacted_engineer: contactedEng,
            category_id: categoryID,
            sector_id: sectorID,
            start_date: "2023-01-01",
            end_date: "2024-01-01",
            indcution_required: inductionReq,
            indcution_provided: inductionProvided,
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
            console.log('ID: ',newProject.data.id);
            navigate('/project/' + newProject.data.id)
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

                <div>Lin</div>

                <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <Button type="submit" size="sm">Submit</Button>
            </Form>
        </div>
    )

}