import React, { useEffect, useState } from 'react';
import './Companies.css';
import CreateCompany from './CreateCompany';
import DisplayCompany from './DisplayCompany';
import DropDown from '../../DropDown/DropDown';
import CompanyAPIs  from '../../../MasonyFixingsAPIs/CompanyAPIs/CompanyAPIs';

export default function Companies(){

    const [companyTypeID, setCompanyTypeID] = useState('');
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

    useEffect(() => {
        getAllCompanies();
    }, [])
    
    return(
        <div>
            <div>{CompaniesData.length} companies</div>
            <div onClick={() => setAddNew(!addNew)}>Create new company</div>

            <div>
                <DropDown.CompanyType value={companyTypeID} onChange={(e) => setCompanyTypeID(e.target.value)} /> 
            </div>

            {addNew && 
                <div>
                    <CreateCompany setCompanyData={setCompaniesData} CompanyData={CompaniesData} /> 
                </div>
            }
            {companyTypeID === '' ?

                <div className='company-display'>
                    {CompaniesData.map((company) => {
                        return(
                            <DisplayCompany key={company.id} CompanyData={company} getCompany={getAllCompanies}/>
                        )
                    })}
                </div>
                :
                <div>
                    {CompaniesData.map((company) => {
                        return(
                            <div key={company.id}>
                                {
                                parseInt(company.company_type.id) === parseInt(companyTypeID) && 
                                    <DisplayCompany key={company.id} CompanyData={company} />
                                }    
                            </div>
                        )
                    })}
                </div>
            }

        </div>
    )
}
