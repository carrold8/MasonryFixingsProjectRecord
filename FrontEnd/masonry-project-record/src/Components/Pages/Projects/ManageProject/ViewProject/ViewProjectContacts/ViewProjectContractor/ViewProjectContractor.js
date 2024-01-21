import React, { useState, useEffect } from "react";
import './ViewProjectContractor.css';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectAPIs from "../../../../../../../MasonyFixingsAPIs/ProjectAPIs/ProjectAPIs";
import DropDown from "../../../../../../DropDown/DropDown";
import ViewProjectContractorEmployee from "./ViewProjectContractorEmployee/ViewProjectContractorEmployee";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { Form } from "react-bootstrap";

export default function ViewProjectContractor(){

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [sending, setSending] = useState(false);
    const [showEmployees, setShowEmployees] = useState(false);

    const [contractorData, setContractorData] = useState();
    const [mainContractorID, setMainContractorID] = useState();
    const [accContactID, setAccContactID] = useState();
    const [foremanID, setForemanID] = useState();
    const [sftyOffID, setSftyOffID] = useState();
    const [storemanID, setStoremanID] = useState();

   

    const getProjectContractorData = (projectID) => {
        ProjectAPIs.GetProjectMainContractor(projectID)
        .then((response) => {
            setContractorData(response.data);
            setMainContractorID(response.data.company.id);
            setAccContactID(response.data.account_contact_id);
            setForemanID(response.data.foreman_id);
            setSftyOffID(response.data.safety_officer_id);
            setStoremanID(response.data.storeman_id);
            setLoading(false);    
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

    const editProjectContractorData = (e) => {
        
        e.stopPropagation();
        e.preventDefault();
        setSending(true);
        const putJSON = {
            main_contractor_id: parseInt(mainContractorID),
            account_contact_id: parseInt(accContactID),
            foreman_id: parseInt(foremanID),
            safety_officer_id: parseInt(sftyOffID),
            storeman_id: parseInt(storemanID),
        }

        ProjectAPIs.PutProjectMainContractorEmployees(params.ProjectID, putJSON)
        .then((response) => {
            if(response.status === 200){
                getProjectContractorData(params.ProjectID);
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
        setMainContractorID(contractorData.company.id);
        setAccContactID(contractorData.account_contact_id);
        setForemanID(contractorData.foreman_id);
        setSftyOffID(contractorData.safety_officer_id);
        setStoremanID(contractorData.storeman_id);
        setEditing(false);
    }

    const handleChangeCompany = (e) => {
        setMainContractorID(e.target.value);
        setAccContactID('');
        setForemanID('');
        setSftyOffID('');
        setStoremanID('');
    }

    useEffect(() => {
        getProjectContractorData(params.ProjectID);
    }, [params.ProjectID])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else {
        return(
            <div className="view-project-contractor-container">
                <Form onSubmit={editProjectContractorData}>
                <div className="title">
                    <h5>
                        <div><strong>Contractor</strong></div> 
                        {editing ? 
                        <DropDown.AllCompanies value={mainContractorID} onChange={handleChangeCompany} />
                        :
                        contractorData.company.name}
                    </h5>
                    <span align='center' onClick={() => setShowEmployees(!showEmployees)}>{showEmployees ? <FaChevronUp/> : <FaChevronDown/>}</span>
                </div>

                <div className={showEmployees ? 'show-employees active' : 'show-employees'}>   
                    <div align='end'>
                        {editing ? 
                            <>
                                <button disabled={sending} type="button" onClick={() => handleCancel()}><MdCancel/></button>
                                <button disabled={sending} type={"submit"} ><FaSave/></button>
                            </>
                            :
                            <button type="button" onClick={() => setEditing(true)}><AiFillEdit/></button>
                        }
                    </div>

                    <div className="employees">
                        <div className="employee">
                            <strong>Account Contact: </strong>
                            <div>
                                <DropDown.CompanyEmployees 
                                    companyID={mainContractorID} 
                                    value={accContactID} 
                                    onChange={(e) => setAccContactID(e.target.value)}
                                    disabled={!editing}
                                    required
                                    size='sm'
                                />
                                <ViewProjectContractorEmployee employeeID={accContactID}/>
                            </div>
                        </div>

                        <div className="employee">
                            <strong>Foreman: </strong>
                            <div>
                                <DropDown.CompanyEmployees 
                                    companyID={mainContractorID} 
                                    value={foremanID} 
                                    onChange={(e) => setForemanID(e.target.value)}
                                    disabled={!editing} 
                                    required
                                    size='sm'
                                />
                                <ViewProjectContractorEmployee employeeID={foremanID}/>
                            </div>
                        </div>

                        <div className="employee">
                            <strong>Safety Officer: </strong>
                            <div>
                                <DropDown.CompanyEmployees 
                                    companyID={mainContractorID} 
                                    value={sftyOffID} 
                                    onChange={(e) => setSftyOffID(e.target.value)}
                                    disabled={!editing} 
                                    required
                                    size='sm'
                                />
                                <ViewProjectContractorEmployee employeeID={sftyOffID}/>
                            </div>
                        </div>

                        <div className="employee">
                            <strong>Storeman: </strong>
                            <div>
                                <DropDown.CompanyEmployees 
                                    companyID={mainContractorID} 
                                    value={storemanID} 
                                    onChange={(e) => setStoremanID(e.target.value)}
                                    disabled={!editing}  
                                    required
                                    size='sm'
                                />
                                <ViewProjectContractorEmployee employeeID={storemanID}/>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                </Form>
                
            </div>
        )
    }
}