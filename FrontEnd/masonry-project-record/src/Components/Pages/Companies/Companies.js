import React, { useEffect, useState } from 'react';
import './Companies.css';
import CreateCompany from './CreateCompany';
import ViewCompany from './ViewCompany/ViewCompany';
// import DropDown from '../../DropDown/DropDown';-
import CompanyAPIs  from '../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs';

export default function Companies(){

    const [addNew, setAddNew] = useState(false);
       
    const [CompaniesData, setCompaniesData] =  useState([])

    const getAllCompanies = () => {

        CompanyAPIs.GetAllCompanies()
        .then((response) => {
            setCompaniesData(response.data);
        }) 
        .catch((err) => {
            console.log(err);
        })
    }

    const handleAddNew = () => {
        getAllCompanies();
        setAddNew(false);
    }

    const handleCancel = () => {
        setAddNew(false);
    }

    useEffect(() => {
        getAllCompanies();
    }, [])
    
    return(
        <div className='company-display'>

            <h1>Companies</h1>
            <hr/>

            {addNew ?
                <div>
                    <CreateCompany handleCancel={handleCancel} handleAddNew={handleAddNew} /> 
                </div>
            :
            
            <div>
                <button onClick={() => setAddNew(true)}>Add New</button>
                {CompaniesData.map((company) => {
                    return(
                        <ViewCompany key={company.id} companyID={company.id}/>
                    )
                })}
            </div>
            }
        </div>
    )
}
