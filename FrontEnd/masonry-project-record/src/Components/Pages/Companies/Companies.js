import React, { useState } from 'react';
import CreateCompany from './CreateCompany';
import DisplayCompany from './DisplayCompany';

export default function Companies(){

    const [companyTypeID, setCompanyTypeID] = useState(0);
    const [addNew, setAddNew] = useState(false);

    const CompanyTypes = [
        {
            id: 1,
            name: 'Contractor'
        },
        {
            id: 2,
            name: 'Engineering'
        },
        {
            id: 3,
            name: 'Architecture'
        }
    ]
    
    
    const [CompaniesData, setCompaniesData] =  useState([
    
        {
            id: 1,
            name: 'Contractor',
            companyType: 1,
            headOfficeID: 1,
        },
        {
            id: 2,
            name: 'Engineering',
            companyType: 2,
            headOfficeID: 1,
        },
        {
            id: 3,
            name: 'Architect',
            companyType: 3,
            headOfficeID: 1,
        }
    
    ])


    
    return(
        <div>
            <div>{CompaniesData.length} companies</div>
            <div onClick={() => setAddNew(true)}>Create new company</div>

            <div>
                <select value={companyTypeID} onChange={(e) => setCompanyTypeID(parseInt(e.target.value))}>
                    <option value={0}>Comany Type</option>
                
                {CompanyTypes.map((companyType) => {
                    return(
                        <option key={companyType.id} value={companyType.id}>{companyType.name}</option>
                    )
                })}
                </select>
            </div>

            {addNew && 
                <div>
                    <CreateCompany setCompanyData={setCompaniesData} CompanyData={CompaniesData} /> 
                </div>
            }
            {companyTypeID === 0 ?

                <div>
                    {CompaniesData.map((company) => {
                        return(
                            <DisplayCompany key={company.id} CompanyData={company} />
                        )
                    })}
                </div>
                :
                <div>
                    {CompaniesData.map((company) => {
                        return(
                            <div key={company.id}>
                                {
                                parseInt(company.companyType) === parseInt(companyTypeID) && 
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
