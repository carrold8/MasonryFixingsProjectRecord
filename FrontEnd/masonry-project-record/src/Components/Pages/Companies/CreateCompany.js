import React, { useState } from "react";

export default function CreateCompany({CompanyData, setCompanyData}){


    const [name, setName] = useState('');
    const [companyType, setComanyType] = useState('');
    const headOfficeID = 1;



    const AddNewCompany = (e) => {

        e.preventDefault();
        e.stopPropagation();
        const tempData = [...CompanyData];
        tempData.push(
            {
                id: tempData.length + 1,
                name: name,
                companyType: companyType,
                headOfficeID: headOfficeID,
            }
        )
        console.log(tempData);
        setCompanyData(tempData)

    }


    return(
        <form onSubmit={AddNewCompany}>
            <label>Name:</label>
            <input onChange={(e) => setName(e.target.value)} required value={name} />

            <label>Type:</label>
            <select onChange={(e) => setComanyType(e.target.value)} required value={companyType}>
                <option value={''}>Type</option>
                <option value={1}>Contractor</option>
                <option value={2}>Engineering</option>
                <option value={3}>Architect</option>
            </select>

            <label>headOfficeID:</label>
            <input defaultValue={headOfficeID} />

            <button type="submit">Create</button>
        </form>
    )

}