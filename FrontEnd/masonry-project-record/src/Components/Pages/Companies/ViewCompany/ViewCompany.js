import React, { useEffect, useState } from "react";
import ViewEmployees from "./Employees/ViewEmployees";
import CompanyAPIs from "../../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs";
import ViewCompanyHeadOffice from "./ViewCompanyHeadOffice/ViewCompanyHeadOffice";
import { FaChevronDown, FaChevronUp, FaSave } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ViewCompany({companyID}){

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [edit, setEdit] = useState(false);

    const [companyData, setCompanyData] = useState();
    const [companyName, setCompanyName] = useState();
    // const [companyTypeID, setCompanyTypeID] = useState(1);

    

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

    const updateCompany = () => {
        
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
        

    }

    const handleCancel = () => {
        setCompanyName(companyData.name);
        setEdit(false);
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
                        <>
                            <button onClick={() => updateCompany()}><FaSave/></button>
                            <button onClick={() => handleCancel()}><MdCancel/></button>
                        </>
                        :
                        <button onClick={() => setEdit(true)}><AiFillEdit/></button>
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
