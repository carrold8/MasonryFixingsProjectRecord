import React, { useEffect, useState } from "react";
import ViewEmployees from "./Employees/ViewEmployees";
import CompanyAPIs from "../../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import ViewCompanyHeadOffice from "./ViewCompanyHeadOffice/ViewCompanyHeadOffice";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ApiResponseHandler from "../../../../MasonyFixingsAPIs/ApiResponseHandler";

export default function ViewCompany({companyID, getCompanies}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [edit, setEdit] = useState(false);

    const [companyData, setCompanyData] = useState();
    const [companyName, setCompanyName] = useState();

    const getCompanyData = (companyID) => {
        CompanyAPIs.GetCompany(companyID)
        .then((response) => {
            if(response.status === 200){
                setCompanyData(response.data);
                setCompanyName(response.data.name);
                setLoading(false);
            }
        })
        .catch((err) => {
            ApiResponseHandler(err.response, navigate);
        })
    }

    const updateCompany = () => {
        setSending(true);
        const putJSON = {
            name: companyName,
            company_type_id: 1,
        }

        if(companyName !== ''){
            CompanyAPIs.PutCompany(companyID, putJSON)
            .then((response) => {
                if(response.status === 200){
                    setEdit(false);
                    getCompanyData(companyID);
                    setSending(false);
                }
            }) 
            .catch((err) => {
                setSending(false);
                ApiResponseHandler(err.response, navigate);
            })
        }
    }

    const deleteCompany = () => {
        setSending(true);
        CompanyAPIs.DeleteCompany(companyID)
        .then((response) => {
            if(response.status === 200){
                getCompanies();
                setSending(false);
            }
        })
        .catch((err) => {
            setSending(false);
            ApiResponseHandler(err.response, navigate);
        })
    }

    const handleCancel = () => {
        setCompanyName(companyData.name);
        setEdit(false);
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure you want to delete ' + companyData.name + 'from system?')){
            deleteCompany();
        }
    }

    useEffect(() => {
        getCompanyData(companyID);
    }, [companyID]);

    if(loading){
        return(<div>Loading Company...</div>)
    }
    else{
        return(
            <div className="company-card">
                
                <div className="component-card-title">
                    <h2>{edit ? <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} /> : companyName}</h2>
                    
                    <div>
                        {edit ? 
                            <button disabled={sending} onClick={() => updateCompany()}><FaSave/></button>
                            :
                            <button disabled={sending} onClick={() => handleDelete()}><MdDelete/></button>
                        }
                    </div>
                    <div>
                    {edit ?
                        <button disabled={sending} onClick={() => handleCancel()}><MdCancel/></button>
                        :
                        <button disabled={sending} onClick={() => setEdit(true)}><AiFillEdit/></button>
                    
                    }
                    </div>   
                    <div>{showDetails ? <FaChevronUp onClick={() => setShowDetails(!showDetails)} /> : <FaChevronDown onClick={() => setShowDetails(!showDetails)} />}</div>
                </div>
                
                <div className={showDetails ? 'company-details active' : 'company-details'}>
                
                    <ViewCompanyHeadOffice companyID={companyID} />

                    <ViewEmployees CompanyID={companyID} />                
                </div>
            
                
                
            </div>
        )
    }

}
